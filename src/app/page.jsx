import Home from "@/components/Home"
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Page() {
  return (
    <PageTransition>
      <div className="min-h-screen overflow-x-hidden overflow-y-auto hide-scrollbar flex flex-col items-stretch">
      <Home />
      <div>
        <Project />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
      </div>
    </PageTransition>
  );
}
