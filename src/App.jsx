import { Route, Routes } from "react-router-dom";
import Article_main from "./Components/Article_main/Article_main";
import Article_page from "./Pages/Article_page/Article_page";
import Home from "./Pages/Home/Home";
import About_Us from "./Pages/About_Us/About_Us";

export default function App() {
  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/About" element={<About_Us/>}/>
      <Route path="/blog/:id" element={<Article_page/>}/>
    </Routes>
  )
}
