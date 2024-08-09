import Bulb from "./components/bulb.jsx";
import Nav from "./layout/nav.jsx";
import Hero from "./layout/hero.jsx";
import Projects from "./layout/projects.jsx";
import Wave from "./components/wave.jsx";

export default function App() {
    return (
        <>
            <Bulb />
            <Nav />
            <Hero />
            <Wave />
            <Projects />
        </>
    );
}
