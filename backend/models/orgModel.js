import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
});

const orgSchema = mongoose.Schema({
    organization: {
        type: String,
        required: true,
    },
    activities: {
        type: Map,
        of: {
            type: Map,
            of: [memberSchema],
        },
    },
});

export const org = mongoose.model(
    "Organization",
    orgSchema,
    "organization-collection"
);
