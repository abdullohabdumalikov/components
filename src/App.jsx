import { useState } from "react";
import "./App.css";
import Header from "../src/components/header/Header.jsx";
import Section1 from "../src/components/main/section1/Section1.jsx";
import Section2 from "../src/components/main/section2/Section2.jsx";
import Section3 from "../src/components/main/section3/Section3.jsx";
import Section4 from "../src/components/main/section4/Section4.jsx";
import Section5 from "../src/components/main/section5/Section5.jsx";
import Section6 from "../src/components/main/section6/Section6.jsx";
import Footer from "../src/components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section1 />
        <Section2 />

        <Section3 />

        <Section4 />

        <Section5 />
        <Section6 />
      </main>

      <Footer />
    </>
  );
}

export default App;
