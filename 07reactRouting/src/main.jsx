import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { SignIn } from "./components/Sigin.jsx";
import { SignUp } from "./components/Signup.jsx";
import User from "./components/User.jsx";
import Github, { githubInfo } from "./components/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//       { path: "signin", element: <SignIn /> },
//       { path: "signup", element: <SignUp /> },
//     ],
//   },
// ]);

//* Another syntax

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/user/:userid" element={<User />} />
      <Route
        loader={githubInfo}
        path="/github"
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
