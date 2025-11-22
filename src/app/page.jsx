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
      <div className="mt-8 sm:mt-12 md:mt-16">
        <Project />
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <Skills />
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <About />
      </div>
      <div className="mt-16 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36">
        <Contact />
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16">
        <Footer />
      </div>
    </div>
  );
} 
