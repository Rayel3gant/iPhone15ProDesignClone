import Highlights from "./components/Highlights";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import * as Sentry from "@sentry/react"
import Features from "./components/Features";
import Chip from "./components/Chip";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App bg-black">
      <Navbar/>
      <HeroSection/>
      <Highlights/>
      <Model/>
      <Features/>
      <Chip/>
      <Footer/>
    </div>
  );
}

export default Sentry.withProfiler(App)
