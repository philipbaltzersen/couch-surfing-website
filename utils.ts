import { Property } from "./types";

const reviewTotalDisplay = document.querySelector("#reviews")
const returningUserDisplay = document.querySelector("#returning-user")
const userNameDisplay = document.querySelector("#user")
const propertiesDisplay = document.querySelector(".properties")

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

export function addProperties(properties: Property[]) {
    for (let i = 0; i < properties.length; i++) {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = properties[i].title
        const image = document.createElement("img")
        image.setAttribute("src", properties[i].image)
        card.appendChild(image)
        propertiesDisplay.appendChild(card)
    }
}