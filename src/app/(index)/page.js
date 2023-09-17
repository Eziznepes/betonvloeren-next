"use client";
import { AnimatePresence } from "framer-motion";
import Footer from "../base/Footer";
import Header from "../base/Header";
import InfoBar from "./components/InfoBar";
import Interested from "./components/Interested";
import Intro from "./components/Intro";
import Review from "./components/Review";
import Wrapper from "./components/wrapper/Wrapper";
import { useEffect, useState } from "react";
import Cookie from "../base/Modals/Cookie";
import Leave from "../base/Modals/Leave";
import ColorModal from "../base/Modals/ColorModal";
import Difference from "./components/Difference";



export default function Page() {
  const [cookie, setCookie] = useState(true);
  const [leave, setLeave] = useState(true);
  const [colorModal, setColorModal] = useState(false);
  const [colorData, setColorData] = useState(null);
  useEffect(() => {
    if (cookie || colorModal || leave) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [cookie, leave, colorModal]);
  return (
    <>
      <Header />
      <main>
        <Intro setColorData={setColorData} setColorModal={setColorModal} />
        <InfoBar />
        <Wrapper setColorData={setColorData} setColorModal={setColorModal} />
        <Interested />
        <Review />
        <Difference />
      </main>
      <Footer />
      <AnimatePresence>
        {cookie && <Cookie setCookie={setCookie} />}
      </AnimatePresence>
      <AnimatePresence>
        {leave && <Leave setLeave={setLeave} />}
      </AnimatePresence>
      <AnimatePresence>
        {colorModal && (
          <ColorModal
            colorData={colorData}
            setColorData={setColorData}
            setColorModal={setColorModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}
