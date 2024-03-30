import express from "express";

import { userActivity } from "../models/userActivityModel.js";

const router = express.Router();

// get all student activities
router.post("/", async (request, response) => {
    const { name } = request.body;
    try {
        const userActivities = await userActivity.find({ name: name });
        return response.status(200).json({
            count: userActivities.length,
            data: userActivities,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// create new student activity
router.post("/add-activity", async (request, response) => {
    console.log(request.body);
    try {
        const newActivity = new userActivity({
            name: request.body.name,
            organization: request.body.organization,
            activity: request.body.activity,
            year: request.body.year,
            position: request.body.position,
        });
        console.log(newActivity);
        await newActivity.save();
        return response
            .status(200)
            .send({ message: "Added activity successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// delete student activity
router.delete("/delete-activity/:id", async (request, response) => {
    console.log(request.params.id);
    try {
        const deletedActivity = await userActivity.findByIdAndDelete(
            request.params.id
        );
        if (!deletedActivity) {
            return response.status(404).send({ message: "Activity not found" });
        }
        return response
            .status(200)
            .send({ message: "Deleted activity successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
