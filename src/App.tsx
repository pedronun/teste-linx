import "./styles/global.scss";

import Header from "./components/Header";
import Filter from "./components/Filter";
import Tasks from "./components/Tasks";
import NewsLetter from "./components/NewsLetter";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Tasks />
      <NewsLetter />
      <About />
      <Footer />
    </>
  );
}

export default App;
