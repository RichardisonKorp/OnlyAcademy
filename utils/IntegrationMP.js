import OpenBrowserAsync from 'expo-web-browser';
import { ACCESS_TOKEN } from '../config.json'

export const handleIntegrationMP = async (type) => {
    var value = type == 'second' ? 10 : 100
    const preference = {
        "items": [
            {
                "title": "Dummy title",
                "description": "Dummy desc",
                "picture_url": "Dummy title",
                "category_id": "Conta",
                "quantity": 1,
                "currency_id": "R$",
                "unit_price": value,
            },
        ],
        "auto_return": "all"
    }
    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preference)
        })
        const data = await response.json()
        return data.init_point
    } catch (error) {
        console.log(error)
    }
};