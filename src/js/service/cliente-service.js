const customerList = async () => {
    const response = await fetch(`http://localhost:3000/profile`)
    if (response.ok) {
        return response.json()
    }
    throw new Error('Não foi possível mostrar a lista.')
}

const createCustomer = async (name, date, price, description) => {
    await fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            date: date,
            price: price,
            description: description
        })
    })
    .then(response => {
        if (response.ok) {
            return response.body
        }
        throw new Error('Não foi possível criar a lista.')
    })
}

const removeCustomer = async (id) => {
    const response = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    if (!response.ok) {
        throw new Error('Não foi possível remover a lista.')
    }
}

const editCustomer = async (id) => {
    const response = await fetch(`http://localhost:3000/profile/${id}`)
    if (response.ok) {
        return response.json()
    }
    throw new Error('Não foi possível editar a lista.')
}

const updateCustomer = async (id, name, date, price, description) => {
    await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            date: date,
            price: price,
            description: description
        })
    })
}

let customerService = {}

export default customerService = {
    customerList,
    createCustomer,
    removeCustomer,
    editCustomer,
    updateCustomer
}