import {Navigate,Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import DemoHeader from "./components/Demo/DemoHeader";
import HomeHeader from "./components/Home/HomeHeader";
import {Blog}  from "./Context/Context";

function App() {
  const {currUser} =Blog();
  return (
    <>
    {currUser ? <HomeHeader/> : <DemoHeader/>}
      <Routes>
       {currUser && <Route path="/" element={<Home/>} />}
        {!currUser && <Route path="/demo" element={<Demo/>} />}
        <Route 
          path="*"
          element={<Navigate to={!currUser ? "/demo": "/"} />}
        />
 
      </Routes>
    </>
  )
}

export default App
