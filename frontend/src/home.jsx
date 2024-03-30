import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const backend = import.meta.env.VITE_BACKEND_URL;

const Home = () => {
    const [name, setName] = useState("Thomas Yousef");
    const [activities, setActivities] = useState(null);
    useEffect(() => {
        const parameters = { name: name };
        axios
            .post(`${backend}/activities`, parameters)
            .then((response) => {
                setActivities(response.data.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [name]);
    return (
        <div>
            <h1>Activities</h1>

            <Link to="/add-activity">
                <button
                    style={{
                        borderRadius: "8px",
                        border: "1px solid transparent",
                        padding: "0.6em 1.2em",
                        fontSize: "1em",
                        fontWeight: 500,
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        cursor: "pointer",
                        transition: "border-color 0.25s",
                        textDecoration: "none",
                    }}
                >
                    Add Activity
                </button>
            </Link>
        </div>
    );
};

export default Home;
