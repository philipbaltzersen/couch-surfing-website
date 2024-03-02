import { Property, Review, User } from "./types";

export const reviews: Review[] = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: true,
        date: new Date(2021, 4, 1)
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: false,
        date: new Date(2021, 3, 28)
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: true,
        date: new Date(2021, 3, 27)
    },
]

export const you: User = {
    userName: {
        firstName: "Philip",
        lastName: "Holm"
    },
    isReturning: true,
    stayedAt: ["home", "eirik-flat", "espen-bungalow"]
}

export const properties: Property[] = [
    {
        image: "images/colombia-property.jpg",
        title: "Colombian Shack",
        pricePerNight: 45,
        location: {
            firstLine: "Shack 37",
            city: "Botoga",
            code: 41231,
            country: "Colombia"
        },
        email: "shack@email.com",
        isAvailable: true
    },
    {
        image: "images/poland-property.jpg",
        title: "Polish Cottage",
        pricePerNight: 34,
        location: {
            firstLine: "no 23",
            city: "Gdansk",
            code: 343903,
            country: "Poland"
        },
        email: "garydavis@hotmail.com",
        isAvailable: false 
    },
    {
        image: "images/london-property.jpg",
        title: "London Flat",
        pricePerNight: 23,
        location: {
            firstLine: "flat 15",
            city: "London",
            code: 35433,
            country: "United Kingdom",
        },
        email: "andyluger@aol.com",
        isAvailable: true
    }
]