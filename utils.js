"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateUser = exports.showReviewsTotal = void 0;
var reviewTotalDisplay = document.querySelector("#reviews");
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
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
