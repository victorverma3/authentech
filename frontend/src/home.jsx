import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
const backend = import.meta.env.VITE_BACKEND_URL;

const Home = () => {
    const name = "Thomas Yousef";
    const [activities, setActivities] = useState(null);
    const navigate = useNavigate();
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
    const deleteActivity = (id) => {
        console.log(id);
        axios
            .delete(`${backend}/activities/delete-activity/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload();
    };
    return (
        <div>
            
            <h1>Welcome Back, Thomas Yousef</h1>
            <h1>Activities</h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px",
                }}
            >
                <table className="table-auto" style={{ width: "100%" }}>
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
                                    <a>
                                        <td
                                            className="rounded-md text-center max-md:hidden"
                                            onClick={() =>
                                                deleteActivity(activities._id)
                                            }
                                        >
                                            <FaTrash />
                                        </td>
                                    </a>
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
