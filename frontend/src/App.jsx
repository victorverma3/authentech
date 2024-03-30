<<<<<<< Updated upstream
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
=======
import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from './home.jsx'
// layout and home
import Layout from "./Layout";

// main app
>>>>>>> Stashed changes
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>authentech</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    );
}

export default App;
