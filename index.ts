const returningUserDisplay = document.querySelector("#returning-user")
const userNameDisplay = document.querySelector("#user")
const reviewTotalDisplay = document.querySelector("#reviews")

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

function showReviewsTotal(value: number, user: string, loyaltyUser: boolean) {
    const iconDisplay = loyaltyUser ? "⭐️" : ""
    reviewTotalDisplay.innerHTML = "Review total: " + value.toString() + " | last reviewed by " + user + " " + iconDisplay
}

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back"
    }
    userNameDisplay.innerHTML = userName
}


showReviewsTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.userName.firstName)
