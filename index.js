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
var properties = [
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
];
(0, utils_1.showReviewsTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.userName.firstName);
