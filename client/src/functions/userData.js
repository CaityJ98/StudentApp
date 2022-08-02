const baseUrl = 'http://localhost:5000';

export async function registerUser(userData) {
    return (await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
       
    })
    .then((response) => response.json())
//Then with the data from the response in JSON...
.then((userData) => {
  console.log('Success:', userData);
})
  
    )
}

export async function loginUser(userData) {
    return (await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    })
  
    )
}

export async function getUser() {
    return await (await fetch(baseUrl + '/auth/getUser', {credentials: 'include'}))
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