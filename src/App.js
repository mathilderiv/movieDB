import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import TV from "./pages/TV";
import TvDetails from "./pages/TvDetails";
import NavBar from "./components/NavBar";
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path="/person" element={<People />} />
        <Route path="/person/:id" element={<PeopleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
