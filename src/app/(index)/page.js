import Header from "../base/Header";
import Contact from "./components/Contact";
import InfoBar from "./components/InfoBar";
import Interested from "./components/Interested";
import Intro from "./components/Intro";
import Review from "./components/Review";
import Wrapper from "./components/wrapper/Wrapper";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <InfoBar />
        <Wrapper />
        <Interested />
        <Review />
        <Contact />
      </main>
    </>
  );
}
