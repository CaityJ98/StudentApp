import { useEffect, useState } from 'react';
import DeletedCard from '../../DeletedListings/DeletedListings';
import { Col, Row, Spinner} from 'react-bootstrap';
import { getUserArchivedListings } from '../../../functions/userData';

import '../../DeletedListings/DeletedListings.scss';

function ArchivedListings({ history }) {
    const [products, setProduct] = useState([])
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        getUserArchivedListings()
            .then( res => {
                setProduct(res.sales);
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [setProduct, setLoading])

    return(
        <>
            {!loading ?
                (<>
                    <h1 classname="heading">Archived Listings</h1>
                    {products ? (
                        <Row>
                            {products
                                .filter(x => x.active === false)
                                .map(x => 
                                        <Col xs={12} md={6} lg={4} key={x._id.toString()}>
                                            <DisabledCard params={x} history={history} /> 
                                        </Col>
                                        )
                            }
                        </Row>

                    ) : (
                        <p className="nothing-here">Nothing to show here. You have no archived Listings. </p>
                    )
                }
                </>) :
                <Spinner animation="border" />}
        
        </>


    )
}

export default ArchivedListings; 
