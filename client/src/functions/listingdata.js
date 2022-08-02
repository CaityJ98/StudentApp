const baseUrl = 'http://localhost:3000';

export async function getAll(page, category, query) {
    if (query !== "" && query !== undefined) {
        return (await fetch(`${baseUrl}/listings?page=${page}&search=${query}`, { credentials: 'include' })).json();
    } else if (category && category !== 'all') {
        return (await fetch(`${baseUrl}/listings/${category}?page=${page}`, { credentials: 'include' })).json();
    } else {
        return (await fetch(`${baseUrl}/listings?page=${page}`, { credentials: 'include' })).json();
    }
}

export async function getSpecific(id) {
    return (await fetch(`${baseUrl}/listings/specific/${id}`, { credentials: 'include' })).json();
}

export async function createListing(listing) {
    return (await fetch(`${baseUrl}/listing/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(listing)
    })).json();
}

export async function editListing(id, listing) {
    return (await fetch(`${baseUrl}/listings/edit/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(listing)
    })).json();
}


export async function activateSell(id) {
    return (await fetch(`/listings/enable/${id}`)).json()
}

export async function archiveSell(id) {
    return (await fetch(`/listings/archive/${id}`)).json()
}







