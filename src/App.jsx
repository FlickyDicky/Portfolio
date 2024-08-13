import Nav from "./layout/nav.jsx";
import Hero from "./layout/hero.jsx";
import Projects from "./layout/projects.jsx";
import Wave from "./components/wave.jsx";
import LangButton from "./components/lang-button.jsx";

export default function App() {
    return (
        <>
            <Nav />
            <LangButton />
            <Hero />
            <Wave />
            <Projects />
        </>
    );
}
