import About from "./pages/About"
import GetInTouch from "./pages/GetInTouch";
import GetScouted from "./pages/GetScouted";
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models from "./pages/Models";
import ModelDetails from "./pages/ModelDetails";
import Photographers from "./pages/photographers";
import HairMakeup from "./pages/HairMakeup";
import Director from "./pages/Director";
import Film from "./pages/Film";

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getintouch" element={<GetInTouch></GetInTouch>} />
        <Route path="/getscouted" element={<GetScouted></GetScouted>} />
        <Route path="/models" element={<Models></Models>} />
         <Route path="/model/:name" element={<ModelDetails></ModelDetails>} />
         <Route path="/artists/photographer" element={<Photographers />} />
         <Route path="/artists/makeup" element={<HairMakeup></HairMakeup>} />
         <Route path="/artists/creative" element={<Director />} />
         <Route path="/artists/film" element={<Film />} />
      </Routes>
    </Router>
  )
}

export default App
