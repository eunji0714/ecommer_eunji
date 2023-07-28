import React from 'react';
import LogIn from "./pages/LogIn";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    );
};

export default App;