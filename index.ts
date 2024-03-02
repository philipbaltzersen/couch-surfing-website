import { showReviewsTotal, populateUser } from "./utils";

type Review = {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: Date;
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


type User = {
    userName: {
        firstName: string;
        lastName: string;
    },
    isReturning: boolean;
    stayedAt: string[];
}

const you: User = {
    userName: {
        firstName: "Philip",
        lastName: "Holm"
    },
    isReturning: true,
    stayedAt: ["home", "eirik-flat", "espen-bungalow"]
}

showReviewsTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.userName.firstName)
