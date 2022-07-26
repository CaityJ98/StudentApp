import { useEffect, useState } from "react";
import ListingCard from '../../ListingCards/ListingCard';
import { Col, Row, Spinner } from 'react-bootstrap';
import { getUserCurrentListings } from '../../../services/userData'


function CurrentListings({ params, history }) {
    const [products, setProduct] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        //Takes page/user to specific coordinates
        window.scrollTo(0, 0);
        if (params._id) {
            getUserCurrentListings(params._id)
            .then(res => {
                setProduct(res.Sales);
                setLoading(false)
            })
            .catch(err => console.log(err))
        }
    }, [params._id])

    return(
        <>
        {!loading ?
        (<>
            <h1 className="heading">Current Listings</h1>
                {products ? (
                    <Row>
                        {products
                            .map(x => 
                                    <Col xs={12} md={6} lg={4} key={x.id.toString()}>
                                        <ProductCard params={x} />
                                    </Col>
                                )
                        }
                    </Row>
                ) : (
                        <p className="nothing-here">Nothing to show here. You have no current Listings.</p>
                    )
                }
       </> ) : 
        <Spinner animation="border" />
        
    }
        </>
    )
}

export default CurrentListings;