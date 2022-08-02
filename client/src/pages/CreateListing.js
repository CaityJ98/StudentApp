import { Component } from 'react';
import { Form, Button, Col, Spinner, Alert, Card } from 'react-bootstrap';
import { createListing } from '../functions/listingdata';
import SearchBar from '../components/header/Header';
import '../components/CreateListing/CreateListing.scss';

class AddListing extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", price: "", description: "", category: "", condition: "", image: "", loading: false, alertShow: false, errors: [] };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.files) {
            this.setState({ image: e.target.files[0] })
        }
    };

    onSubmitHandler(e) {
        e.preventDefault();
        let { title, price, description, category, condition, image } = this.state;
        let obj = { title, price, description, category, condition }
        this.setState({ loading: true })
        this.getBase64(image)
            .then((data) => {
                obj['image'] = data;
                createListing(obj)
                    .then(res => {
                        if (res.error) {
                            this.setState({ loading: false })
                            this.setState({ errors: res.error })
                            this.setState({ alertShow: true })
                        } else {
                            this.props.history.push(`/marketplace/${category}/${res.listingId}/details`)
                        }
                    })
                    .catch(err => console.error('Creating listing err: ', err))
            })
            .catch(err => console.error('Converting to base64 err: ', err));
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    render() {
        return (
            <>
            <SearchBar />
                <div className='formy'>
                    <Card>
                <Card.Body>
                    <h1 className="heading">Add a Listing</h1>
                    <Form onSubmit={this.onSubmitHandler}>
                        {this.state.alertShow &&
                            <Alert variant="danger" onClose={() => this.setState({ alertShow: false })} dismissible>
                                <p>
                                    {this.state.errors}
                                </p>
                            </Alert>
                        } 
                       
                       
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" name="title" required onChange={this.onChangeHandler} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" step="0.01" placeholder="Price" name="price" required onChange={this.onChangeHandler} />
                            </Form.Group>
                      

                        <Form.Group controlId="formGridDescription.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" required onChange={this.onChangeHandler} />
                        </Form.Group>

                            <Form.Group as={Col} controlId="formGridCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="category" required onChange={this.onChangeHandler}>
                                    <option>Choose...</option>
                                    <option>Art</option>
                                    <option>Business</option>
                                    <option>Coding</option>
                                    <option>Education</option>
                                    <option>English</option>
                                    <option>Law</option>
                                    <option>Maths</option>
                                    <option>Nursing</option>
                                    <option>Psychology</option>
                                    <option>Science</option>

                                </Form.Control>
                            </Form.Group>
                          
                            <Form.Group as={Col} controlId="formGridCondition">
                                <Form.Label>Condition</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="condition" required onChange={this.onChangeHandler}>
                                    <option>Choose...</option>
                                    <option>Like New</option>
                                    <option>Some wear and tear</option>
                                    <option>Has highlighted sections and/or notes</option>
                                 
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridImage" >
                                <Form.Label>Image</Form.Label>
                                <Form.Control name="image" type="file" required onChange={this.onChangeHandler} />
                            </Form.Group>
                      
                        {this.state.loading ?
                            <Button className="col-lg-12" variant="dark" disabled >
                                Please wait... <Spinner animation="border" />
                            </Button>
                            :
                            <Button className="col-lg-12" variant="dark" type="submit">Add Listing</Button>
                        }
                    </Form> 
                    </Card.Body>
                    </Card>
                 </div> 
           </>
        )
    }
}

export default AddListing;