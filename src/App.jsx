import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutGame from "./components/AboutGame.jsx";
import Advantages from "./components/Advantages.jsx";
import Gallery from "./components/Gallery.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {


    return (
        <>
            <Navbar />
            <section id="home"><Hero /></section>
            <section id="about"><AboutGame /></section>
            <section id="advantages"><Advantages /></section>
            <section id="gallery"><Gallery /></section>
            <section id="pricing"><Pricing /></section>
            <section id="faq"><FAQ /></section>
            <section id="contact"><Contact /></section>
            <Footer/>

        </>
    )
}

export default App
