
import { useState } from "react";
import OrganizerView from "./OrganizerView";

const CreateOrganization = () => {

    const [orgname, setOrgName] = useState("");
    const [activities, setActivities] = useState({})
    const [newActName, setNewActName] = useState("")

    const addActivity = (event, name) => {
        setNewActName(name);
        if(event.key == 'Enter'){
            let data = activities;
            data[name] = {};
            setActivities(data);
            event.target.value = '';
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            org: orgname,
            activity: activities
        })
    };


    return (
        <div>
            <h1>Create Organization</h1>
            <form onSubmit={handleSubmit}>
                <h5>Organization Name: </h5>
                <input
                    name='Organization Name'
                    placeholder='Org. Name'
                    value={orgname}
                    onChange={event => setOrgName(event.target.value)}
                />

                <h5>Activities: </h5>
                {Object.entries(activities).map(([key, value]) => {
                    return (
                        <div className="block">
                            <input
                                name='New Activity'
                                placeholder='activity name'
                                value={key}
                            />
                        </div>
                    )
                })}

                <input
                    id="new-act"
                    name='New Activity'
                    placeholder='activity name'
                    onKeyDown={(e) => addActivity(e, e.target.value)}
                >
                </input>

                <button type="submit" className="btn btn-primary">
                    Verify
                </button>
            </form>
        </div>
    );
};

export default CreateOrganization;