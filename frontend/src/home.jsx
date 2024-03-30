import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
const backend = import.meta.env.VITE_BACKEND_URL;

const Home = () => {
    const name = "Thomas Yousef";
    const [activities, setActivities] = useState(null);
    useEffect(() => {
        const parameters = { name: name };
        axios
            .post(`${backend}/activities`, parameters)
            .then((response) => {
                console.log(response.data);
                setActivities(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [name]);
    return (
        <div>
            <h1>Activities</h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px",
                }}
            >
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="border border-slate-700 rounded-md text-center">
                                Index
                            </th>
                            <th className="border border-slate-700 rounded-md text-center">
                                Organization
                            </th>
                            <th className="border border-slate-700 rounded-md text-center max-md:hidden">
                                Activity
                            </th>
                            <th className="border border-slate-700 rounded-md text-center max-md:hidden">
                                Position
                            </th>
                            <th className="border border-slate-700 rounded-md text-center max-md:hidden">
                                Year
                            </th>
                            <th className="border border-slate-700 rounded-md text-center max-md:hidden">
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities &&
                            activities.map((activities, index) => (
                                <tr key={activities._id} className="h-8">
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        {activities.organization}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                        {activities.activity}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                        {activities.position}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                        {activities.year}
                                    </td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                        {activities.name}
                                    </td>
                                    <td className="rounded-md text-center max-md:hidden">
                                        <FaTrash />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

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
