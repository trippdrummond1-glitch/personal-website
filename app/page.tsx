import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import About from "./components/About";
import Journey from "./components/Journey";
import Videos from "./components/Videos";
import Learnings from "./components/Learnings";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col flex-1 w-full">
        <Hero />
        <Manifesto />
        <About />
        <Journey />
        <Videos />
        <Learnings />
      </main>
      <Footer />
    </>
  );
}
