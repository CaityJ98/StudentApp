const baseURL = 'http://localhost:5000';

//sends user data to detabase 
export async function registerUser(userData) {
        return (await fetch(`${baseURL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            
            },
            credentials: 'include',
            body: JSON.stringify(userData)
        })).json();
}

export async function loginUser(userData) {
    return (await fetch(`/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    })).json();
}

export async function getUser() {
    return await (await fetch(baseUrl + '/auth/getUser', {credentials: 'include'})).json();
}

export async function getUserCurrentListings(id) {
    return (await fetch(`${baseUrl}/products/listings/active/${id}`, {credentials: 'include'})).json();
}

export async function getUserArchivedListings() {
    return (await fetch(`${baseUrl}/products/listings/archived`, {credentials: 'include'})).json();
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
    return await (await fetch(baseUrl + `/user/getUserById/${id}`, {credentials: 'include'})).json();
}