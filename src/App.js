import { Route, Routes } from "react-router-dom";
import FishPosts from "./screens/FishPosts/FishPosts";
import Gallery from "./screens/Gallery/Gallery";
import "./App.css";
import Layout from "./screens/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<FishPosts />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
