"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var reviews = [
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
];
var you = {
    userName: {
        firstName: "Philip",
        lastName: "Holm"
    },
    isReturning: true,
    stayedAt: ["home", "eirik-flat", "espen-bungalow"]
};
(0, utils_1.showReviewsTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.userName.firstName);
