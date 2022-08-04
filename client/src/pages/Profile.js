import { useEffect, useState, useParams } from 'react';
import ProfileSection from '../components/Profile/ProfileSection';
import CurrentListings from '../components/Profile/Sales/CurrentListings';
import ArchivedListings from '../components/Profile/Sales/ArchivedListings';
import SalesProfile from '../components/Profile/SalesProfile';
import { getUserById } from '../functions/userData';
import { Col, Row, Button } from 'react-bootstrap';

import '../components/Profile/Profile.scss';

function Profile({ match, history }) {

    const [active, setActive] = useState(true);
    const [archived, setArchived] = useState(false);
    const [user, setUser] = useState([]);
    const { params } = useParams();
    const handleActive = () => {
        setActive(true);
        setArchived(false);
    }

    const handleArchived = () => {
        setActive(false);
        setArchived(true);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getUserById(match.params.id)
            .then(res => setUser(res.user))
            .catch(err => console.log(err))
    }, [match.params.id])

    return (
        <>
            {user.isMe ? (
                <> 
                <ProfileSection params={user} />
                <div className="container">
                    <Row>
                        <Col lg={2} sm={12} id="aside">
                            <Button variant="dark" id="current-listings" onClick={handleActive}>Active Listings</Button>{' '}
                            <Button variant="dark" id="archived-listings" onClick={handleArchived}>Archived Listings</Button>{' '}
                        </Col>
                        <Col lg={10} sm={12}>
                            {active && <CurrentListings params={user} />}
                            {archived && <ArchivedListings history={history} />}
                        </Col>
                    </Row>
                </div>
                </>
            ) : (
                <SalesProfile params={user} history={history} /> 
            )
            }
        
        </>
    )


}

export default Profile; 