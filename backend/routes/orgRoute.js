import express from "express";

import { org } from "../models/orgModel.js";

const router = express.Router();

// get all organizations
router.get("/", async (request, response) => {
    try {
        const orgElements = await org.find({}).lean();
        const orgValues = orgElements.map((element) => element.organization);
        return response.status(200).json({
            count: orgValues.length,
            data: orgValues,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// create an organization
router.post("/create-organization", async (request, response) => {
    console.log(request.body);
    try {
        const newOrg = new org({
            organization: request.body.organization,
            activities: request.body.activities,
        });
        console.log(newOrg);
        await newOrg.save();
        return response
            .status(200)
            .send({ message: "Added organization successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// delete organization
router.delete(
    "/delete-organization/:organization",
    async (request, response) => {
        try {
            const deletedOrganization = await org.deleteMany({
                organization: request.params.organization,
            });
            if (deletedOrganization) {
                return response
                    .status(200)
                    .send({ message: "Deleted organization successfully" });
            }
        } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
        }
    }
);

// get all activities for an organization
router.get("/:organization/activities", async (request, response) => {
    const organizationName = request.params.organization;
    try {
        const organization = await org
            .find({
                organization: organizationName,
            })
            .lean();
        if (!organization) {
            return response
                .status(404)
                .json({ message: "Organization not found" });
        }
        const activities = organization
            .map((org) => Object.keys(org.activities))
            .flat();
        return response.status(200).json({
            count: activities.length,
            data: activities,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
