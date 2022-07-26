import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col, Spinner, Alert } from 'react-bootstrap';


function App() {
  const navigate= useNavigate()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch ('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        
      }),
    })
    const data = await response.json()
   
    if(data.status === 'ok'){
      navigate('/login')
    }
  }

  return (
    <div>
        <h1> Register </h1>
            <form onSubmit={registerUser}> 
              <input 
              value ={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
               placeholder="Name" />
               <br />
              <input 
              value ={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
               placeholder="Email" />
               <br />
              <input 
              value ={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
               placeholder="Password" /> 
               <Form.Group className="col-lg-6">
                            <Form.Label>Repeat Password *</Form.Label>
                            <Form.Control type="password" name="repeatPassword" placeholder="Repeat password" oonChange={(e) => setPassword(e.target.value)}required />
                        </Form.Group>
               <input type="submit" value="Sign Up" /> 
              </form>
    </div>
  );
}

export default App;
