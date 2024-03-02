import { showReviewsTotal, populateUser } from "./utils";

type Review = {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: Date;
}

type User = {
    userName: {
        firstName: string;
        lastName: string;
    },
    isReturning: boolean;
    stayedAt: string[];
}

type Property = {
    image: string;
    title: string;
    pricePerNight: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    email: string;
    isAvailable: boolean;
}

const reviews: Review[] = [
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

const you: User = {
    userName: {
        firstName: "Philip",
        lastName: "Holm"
    },
    isReturning: true,
    stayedAt: ["home", "eirik-flat", "espen-bungalow"]
}

const properties: Property[] = [
    {
        image: "",
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
        image: "",
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
        image: "",
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

showReviewsTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.userName.firstName)
