import Home from "@/components/Home"
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen overflow-auto hide-scrollbar flex flex-col justify-between items-center">
      <Home />
      <div className="mt-12">
        <Project />
      </div>
      <div className="mt-12">
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
