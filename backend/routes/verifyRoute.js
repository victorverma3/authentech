import express from "express";

import { org } from "../models/orgModel.js";

const router = express.Router();

// process a verification request
router.post("/", async (request, response) => {
    const { organizationName, activityName, year, name, position } =
        request.body;
    console.log("verification request", request.body);
    try {
        const entry = await org
            .findOne({
                organization: organizationName,
                [`activities.${activityName}.${year}`]: { $exists: true },
            })
            .lean();
        if (!entry) {
            return response.status(200).json(0);
        }
        const members = entry.activities[activityName][year];
        if (!members) {
            return response.status(200).json(0);
        }
        for (const member of members) {
            if (member.name === name && member.position === position) {
                return response.status(200).json(1);
            }
        }
        return response.status(200).json(0);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
