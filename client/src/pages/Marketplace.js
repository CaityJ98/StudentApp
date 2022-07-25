import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { getAll } from '../functions/listingdata'
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { BiSortDown, BiSort, BiDownArrowAlt, BiUpArrowAlt, BiSortUp } from 'react-icons/bi';
import CategoriesNav  from '../components/Categories/categoriesNav';
import SearchBar from '../components/SearchBar/SearchBar';




const Marketplace = ({ match }) => {
    
    let currentCategory = match.params.category;
    const [products, setProduct] = useState([])
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('oldest');

    useEffect(() => {
        setPage(1);
        setLoading(true);
        setQuery("")
        getAll(1, currentCategory)
            .then(res => {
                setProduct(res.products);
                setLoading(false);
                setPage(page => page + 1);
                setQuery("");
            })
            .catch(err => console.log(err));
    }, [currentCategory, setProduct])

    useEffect(() => {
        setPage(1);
        setLoading(true);
        getAll(2, currentCategory, query)
            .then(res => {
                if (query === "") {
                    setProduct(products => [...products, ...res.products]);
                } else {
                    setProduct(res.products)
                }
                setLoading(false);
                setPage(page => page + 1);
            })
            .catch(err => console.log(err));
    }, [query, currentCategory])

    const handleSearch = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    {/* async function populateMarketplace() {
        const req = await fetch('http://localhost:1337/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const data = req.json()
        console.log(data)
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            console.log(user)
            if (!user) {
                // alert("Credentials aren't valid. Please try again or sign up.")
                localStorage.removeItem('token')
                navigate.replace('/login')
            } else {
                populateMarketplace();
            }
        }
    }, []) */}

    

    return (
    <>
     <div id="sider">
         <SearchBar />
                <input className="col-lg-6" type="text" placeholder="Search..." name="search" value={query} onChange={handleSearch} />
            </div>
    <h1> Book Exchange </h1>
    <CategoriesNav />
            <div className="container">
                <Dropdown id="dropdown-sort">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Sort <BiSort />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { setSort('oldest') }}>Oldest <BiDownArrowAlt /></Dropdown.Item>
                        <Dropdown.Item onClick={() => { setSort('newest') }}>Newest <BiUpArrowAlt /></Dropdown.Item>
                        <Dropdown.Item onClick={() => { setSort('lowerPrice') }}>Price <BiSortDown /></Dropdown.Item>
                        <Dropdown.Item onClick={() => { setSort('biggerPrice') }}>Price <BiSortUp /> </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div> 
    </>
    )
    

}

export default Marketplace; 