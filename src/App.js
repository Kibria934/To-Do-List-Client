import BannerSection from "./Banner/BannerSection";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login></Login>}></Route> */}
      <Route path="/todo" element={<BannerSection></BannerSection>}></Route>
      <Route path="/" element={<BannerSection></BannerSection>}></Route>
    </Routes>
  );
}

export default App;
