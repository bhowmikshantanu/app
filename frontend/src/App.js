import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-center"
                theme="dark"
                toastOptions={{
                    style: {
                        background: "#141B2D",
                        border: "1px solid rgba(212,175,55,0.35)",
                        color: "#F8F9FA",
                    },
                }}
            />
        </div>
    );
}

export default App;
