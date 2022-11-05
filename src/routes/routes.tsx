import { Routes, Route } from "react-router-dom"
import { About } from "../pages/about"
import { Contact } from "../pages/contact"
import { Home } from "../pages/home"
import { Projects } from "../pages/projects"

export const RoutesGlobal = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
)