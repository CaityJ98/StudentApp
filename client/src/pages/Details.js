import React from "react";
import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import Header from "../components/header/Header";
import Breadcrumb from "../components/Details/Breadcrumb";
import ListingInfo from "../components/Details/ListingDetails/ListingDetails";
import Aside from "../components/Details/Aside/Aside";
import { getSpecific } from "../functions/listingdata";
import { useNavigate, useParams } from "react-router-dom";
import "../components/Details/ListingDetails/ListingDetails.scss";
import "../components/Details/Aside/Aside.scss";

function Details({ match, navigate }) {
  let params = useParams();
  console.log(params);
  let listingId = params.id;
  let category = params.category;
  let [listing, setListing] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getSpecific(listingId)
      .then((res) => setListing(res), setLoading(false))
      .catch((err) => console.log(err));
  }, [listingId, setListing, setLoading]);

  return (
    <>
      <Header />
      <div className="container">
        {!loading ? (
          <>
            <Breadcrumb params={listingId} />
            <Row>
              <Col lg={8} id="detailsListing">
                <ListingInfo params={listing} />
              </Col>
              <Col lg={4}>
                <Aside params={listing} navigate={navigate} />
              </Col>
            </Row>
          </>
        ) : (
          <Spinner animation="border" />
        )}
      </div>
    </>
  );
}

export default Details;
