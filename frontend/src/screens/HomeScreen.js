import React from 'react'
import product from '../products'
import {Row,Col} from 'react-bootstrap'
import Product from '../component/Product'

const HomeScreen = () => {
    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {product.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
