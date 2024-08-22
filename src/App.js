import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js";
import Courses from "./components/courses/Courses.js";
import Blog from "./components/blog/Blog.js";
import Portal from "./components/portal/Portal.js";
import LMS from "./components/lms/LMS.js";
import Whypk from "./components/whyPk/Whypk.js";
import Footer from "./components/footer/Footer.js";
import Contact from "./components/contact/Contact.js";
import Company from "./components/companies/Company.js";
import Allcourses from "./components/courses/Allcourses.js";

function MainPage() {
  return (
    <>
      <Home />
      <Courses />
      <Blog />
      <Portal />
      <LMS />
      <Whypk />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/internship" element={<Allcourses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
