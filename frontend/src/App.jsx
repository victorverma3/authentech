import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// layout and home
import Layout from "./Layout";

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
                </Routes>
            </SnackbarProvider>
        </div>
    );
};

export default App;
