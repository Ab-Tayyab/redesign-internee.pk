import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js";
import Courses from "./components/courses/Courses.js";
import Blog from "./components/blog/Blog.js";
import Portal from "./components/portal/Portal.js";
import LMS from "./components/lms/LMS.js";
import Whypk from "./components/whyPk/Whypk.js";
import Footer from "./components/footer/Footer.js";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Courses />
      <Blog />
      <Portal />
      <LMS />
      <Whypk />
      <Footer />
    </>
  );
}

export default App;
