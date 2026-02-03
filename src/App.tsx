import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import History from "./components/History";
import Nature from "./components/Nature";
import Culture from "./components/Culture";
import Gastronomy from "./components/Gastronomy";
import PlanVisit from "./components/PlanVisit";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="overflow-x-hidden scroll-smooth">
            <Navbar />
            <Hero />
            <About />
            <History />
            <Nature />
            <Culture />
            <Gastronomy />
            <PlanVisit />
            <Footer />
        </div>
    );
}

export default App;
