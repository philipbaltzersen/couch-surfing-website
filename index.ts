const returningUserDisplay = document.querySelector("#returning-user")
const userNameDisplay = document.querySelector("#user")
const reviewTotalDisplay = document.querySelector("#reviews")

const reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: true,
        date: "01-04-2021"
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: false,
        date: "28-03-2021"
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: true,
        date: "27-03-2021"
    },
]


const you = {
    userName: {
        firstName: "Philip",
        lastName: "Holm"
    },
    isReturning: true
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
