import {BrowserRouter} from "react-router-dom";
import {Contact, Hero, Navbar, Works, Gift} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Works />
        <div className="relative z-0">
          <Contact />
          <Gift />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
