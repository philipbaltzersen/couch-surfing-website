"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProperties = exports.populateUser = exports.showReviewsTotal = void 0;
var reviewTotalDisplay = document.querySelector("#reviews");
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
var propertiesDisplay = document.querySelector(".properties");
function showReviewsTotal(value, user, loyaltyUser) {
    var iconDisplay = loyaltyUser ? "⭐️" : "";
    reviewTotalDisplay.innerHTML = "Review total: " + value.toString() + " | last reviewed by " + user + " " + iconDisplay;
}
exports.showReviewsTotal = showReviewsTotal;
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
function addProperties(properties) {
    for (var i = 0; i < properties.length; i++) {
        var card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = properties[i].title;
        var image = document.createElement("img");
        image.setAttribute("src", properties[i].image);
        card.appendChild(image);
        propertiesDisplay.appendChild(card);
    }
}
exports.addProperties = addProperties;
