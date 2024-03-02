const reviewTotalDisplay = document.querySelector("#reviews")
const returningUserDisplay = document.querySelector("#returning-user")
const userNameDisplay = document.querySelector("#user")

export function showReviewsTotal(value: number, user: string, loyaltyUser: boolean) {
    const iconDisplay = loyaltyUser ? "⭐️" : ""
    reviewTotalDisplay.innerHTML = "Review total: " + value.toString() + " | last reviewed by " + user + " " + iconDisplay
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back"
    }
    userNameDisplay.innerHTML = userName
}
