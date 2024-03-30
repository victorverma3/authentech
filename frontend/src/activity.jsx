import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const backend = import.meta.env.VITE_BACKEND_URL;

const Activity = () => {
    const [organization, setOrganization] = useState("Choose");
    const [activity, setActivity] = useState("Choose");
    const [year, setYear] = useState(null);
    const [position, setPosition] = useState(null);
    const [description, setDescription] = useState("");

    const [organizations, setOrganizations] = useState(null);
    const [activities, setActivities] = useState(null);

    useEffect(() => {
        axios
            .get(`${backend}/organizations`)
            .then((response) => {
                setOrganizations(response.data.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        setActivity("Choose");
        if (organization !== "Choose") {
            axios
                .get(`${backend}/organizations/${organization}/activities`)
                .then((response) => {
                    setActivities(response.data.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [organization]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to a backend or store it locally
        const parameters = {
            organizationName: organization,
            activityName: activity,
            year: year,
            name: "Thomas Yousef",
            position: position,
        };
        console.log(parameters);
        axios
            .post(`${backend}/verify`, parameters)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Activity Section</h1>
            <form onSubmit={handleSubmit}>
                {organizations !== null && (
                    <div className="mb-3">
                        <label htmlFor="organization" className="form-label">
                            Organization
                        </label>
                        <select
                            className="organization-select"
                            value={organization || ""}
                            onChange={(e) => setOrganization(e.target.value)}
                        >
                            <option value={null}>Choose</option>
                            {organizations.map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {activities !== null && organization !== "Choose" && (
                    <div className="mb-3">
                        <label htmlFor="activity" className="form-label">
                            Activity
                        </label>
                        <select
                            className="activity-select"
                            value={activity || ""}
                            onChange={(e) => setActivity(e.target.value)}
                        >
                            <option value={null}>Choose</option>
                            {activities.map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <div className="mb-3">
                    <label htmlFor="year" className="form-label">
                        Year
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="year"
                        value={year || ""}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="position" className="form-label">
                        Position
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={position || ""}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Verify
                </button>
                <Link to="/" className="btn btn-dark ms-2">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </Link>
            </form>
        </div>
    );
};

export default Activity;
