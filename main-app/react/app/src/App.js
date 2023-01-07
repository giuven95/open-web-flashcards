import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GoogleFontLoader from "react-google-font";
import AnkiDeckSearch from "./pages/AnkiDeckSearch";
import ContactMe from "./pages/ContactMe";
import About from "./pages/About";
import Ideas from "./pages/Ideas";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, "400i"],
          },
          {
            font: "Roboto Mono",
            weights: [400, 700],
          },
          {
            font: "Merriweather",
            weights: [400, 700],
          },
        ]}
      />
      <BrowserRouter>
        <Header />
        <div id="App" className="App">
          <Routes>
            <Route path="/" element={<AnkiDeckSearch />} />
            <Route path="" element={<AnkiDeckSearch />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="*" element={<AnkiDeckSearch />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
