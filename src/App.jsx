import { useState } from "react";
import Header from "./components/Header";
import { Hero } from "./components/Hero"; 
import { Features } from "./components/Features";
import { DemoPreview } from "./components/DemoPreview";
import { Pricing } from "./components/Pricing";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Features />
      <DemoPreview />
      <Pricing />
    </>
  );
}

export default App;
