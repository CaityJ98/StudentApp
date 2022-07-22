import React, { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';

const Marketplace = () => {
    const navigate = useNavigate()

    async function populateMarketplace() {
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
    }, [])


    return <h1> Marketplace </h1>
}

export default Marketplace; 