import { properties, reviews, you } from "./data";
import { addProperties, showReviewsTotal, populateUser } from "./utils";

showReviewsTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.userName.firstName)
addProperties(properties)
