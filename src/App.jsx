import { useState } from "react";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { DemoPreview } from "./components/DemoPreview";
import { Pricing } from "./components/Pricing";
import { Reviews } from "./components/Reviews";
import { Booking } from "./components/Booking";
import { InnerPagePreview } from "./components/InnerPagePreview";
import { Ending } from "./components/Ending";
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <DemoPreview />
      <Pricing />
      <Reviews />
      {/* <Booking /> */}
      <InnerPagePreview />
      <Ending />
      <BackToTop />
    </>
  );
}

export default App;
