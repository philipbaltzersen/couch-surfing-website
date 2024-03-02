"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var utils_1 = require("./utils");
(0, utils_1.showReviewsTotal)(data_1.reviews.length, data_1.reviews[0].name, data_1.reviews[0].loyaltyUser);
(0, utils_1.populateUser)(data_1.you.isReturning, data_1.you.userName.firstName);
(0, utils_1.addProperties)(data_1.properties);
