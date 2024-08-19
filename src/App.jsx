import Hero from "./layout/hero.jsx";
import Projects from "./layout/projects.jsx";
import Contact from "./layout/contact.jsx";
import Wave from "./components/wave.jsx";
import Wave1 from "./components/wave-1.jsx";
import LangButton from "./components/lang-button.jsx";

export default function App() {
    return (
        <>
            <LangButton />
            <Hero />
            <Wave />
            <Projects />
            <Wave1 />
            <Contact />
        </>
    );
}
