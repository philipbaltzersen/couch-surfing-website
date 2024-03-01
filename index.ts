const reviewTotalDisplay = document.querySelector("#reviews")
const recentReviewer = document.querySelector("#user")

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


function showReviewsTotal(value: number) {
    reviewTotalDisplay.innerHTML = value.toString() 
}

function showLastUser(user: string) {
    recentReviewer.innerHTML = user
}

showReviewsTotal(reviews.length)

showLastUser(reviews[2]["name"])
