const baseUrl = 'http://localhost:5000';


export async function registerUser(userData) {
 
   const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
            
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    });
    console.log(response)
    
   return response.json();
}


export async function loginUser(userData = {} ) {
    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    });
    return response.json()
    // .then((response) => response.text())
    // .then((userData) => {
    //     console.log('Success:', userData);
    // })
    // .catch((error) => {
    //     console.log('Error:', error);
    // }
  
    // .then((userData) => {
    //     console.log(userData); // JSON data parsed by `data.json()` call
    //   });
}

export async function getUser() {
    return (await fetch('http://localhost:5000/auth/getUser', {credentials: 'include'})).json();
}

export async function getUserCurrentListings(id) {
    return (await fetch(`${baseUrl}/listings/sells/active/${id}`, {credentials: 'include'}))
}

export async function getUserArchivedListings() {
    return (await fetch(`${baseUrl}/listings/sells/archived`, {credentials: 'include'})).json();
}


export async function editUserProfile(id, data) {
    return (await fetch(`/user/edit-profile/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })).json();
}

export async function getUserById(id) {
    return await (await fetch(baseUrl + `/user/getUserById/${id}`, {credentials: 'include'})).json()
}