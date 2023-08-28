import Header from "../base/Header";
import InfoBar from "./components/InfoBar";
import Intro from "./components/Intro";
import Wrapper from "./components/wrapper/Wrapper";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <InfoBar />
        <Wrapper />
      </main>
    </>
  );
}
