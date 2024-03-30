import { Int32 } from "mongodb";
import mongoose from "mongoose";

const userActivitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    },
    activity: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
});

export const userActivity = mongoose.model(
    "UserActivity",
    userActivitySchema,
    "user-activity-collection"
);
