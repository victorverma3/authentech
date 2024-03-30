import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./home.jsx";
import Activity from "./activity.jsx";
import Layout from "./Layout";
import OrganizerView from "./OrganizerView.jsx";
import CreateOrganization from "./CreateOrganization.jsx";

// main app
import "./App.css";

// creates routings of app --> used for sending pages when requested
const App = () => {
    return (
        <div>
            <SnackbarProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                    <Route path="/add-activity" element={<Layout />}>
                        <Route index element={<Activity />} />
                    </Route>
                    <Route path="/organizer" element={<Layout />}>
                        <Route index element={<OrganizerView/>} />
                        <Route path="/organizer/create-org/" element={<CreateOrganization/>} />
                    </Route>
                </Routes>
            </SnackbarProvider>
        </div>
    );
};

export default App;
