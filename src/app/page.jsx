import Home from "@/pages/home/page.jsx";
import Project from "@/pages/project/page.jsx";
import Skills from "@/pages/skills/page.jsx";
import About from "@/pages/about/page.jsx";
import Contact from "@/pages/contact/page.jsx";
import Footer from "@/pages/footer/page.jsx";

export default function Page() {
  return (
    <div className="min-h-screen overflow-auto hide-scrollbar flex flex-col justify-between items-center">
      <Home />
      <div className="mt-36">
        <Project />
      </div>
      <div className="mt-36">
        <Skills />
      </div>
      <div className="mt-36">
        <About />
      </div>
      <div className="mt-36">
        <Contact />
      </div>
      <div className="mt-36">
        <Footer />
      </div>
    </div>
  );
}
