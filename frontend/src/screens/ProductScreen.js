import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    ListGroupItem,
    FormControl
} from 'react-bootstrap'
import Rating from '../component/Rating'
import Loader from '../component/Loader'
import Message from '../component/Message'
import {listProductDetails} from '../actions/productAction'

const ProductScreen = ({history, match}) => {
    const [qty,
        setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return ( <> <Link className='btn btn-dark my-3' to='/'>
            Go back
        </Link>
        {
        loading
            ? <Loader/>
            : error
                ? <Message variant='danger'>{error}</Message>
                : (
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid/>
                        </Col>
                        <Col md={3}>
                            <ListGroup>
                                <ListGroupItem>
                                    <h4>
                                        {product.name}
                                    </h4>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Price: ${product.price}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Description: {product.description}
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>
                                                    ${product.price}
                                                </strong>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                <strong>
                                                    {product.countInStock > 0
                                                        ? 'In Stock '
                                                        : 'Out of stock'}
                                                </strong>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>

                                    {product.countInStock > 0 && (
                                        <ListGroupItem>
                                            <Row>
                                                <Col>
                                                    qty
                                                </Col>
                                                <Col>
                                                    <FormControl as='select' value={qty} onChange={(e) => setQty(e.target.value)}>{[...Array(product.countInStock).keys()].map(x => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))
}
                                                    </FormControl>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    )}

                                    <ListGroup.Item>
                                        <Button
                                            onClick={addToCartHandler()}
                                            className='btn-block'
                                            type='button'
                                            disabled={product.countInStock === 0}>
                                            Add to cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                )
    } </>
    )
}

export default ProductScreen