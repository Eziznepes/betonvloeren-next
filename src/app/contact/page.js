"use client";
import Footer from "../base/Footer";
import Header from "../base/Header";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContactIntro from "./ContactIntro";
import ContactWrapper from "./ContactWrapper";
import ColorModal from "../base/Modals/ColorModal";

export default function Index() {
  const [colorModal, setColorModal] = useState(false);
  const [colorData, setColorData] = useState(null);
  useEffect(() => {
    if (colorModal) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [colorModal]);

  return (
    <>
      <Header type="second" link={"Contact"} />
      <main>
        <div className="contact">
          <ContactIntro />
          <ContactWrapper
            setColorData={setColorData}
            setColorModal={setColorModal}
          />
        </div>
      </main>
      <Footer />
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
