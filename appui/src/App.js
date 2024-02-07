import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Hotel from "./pages/hotel/Hotel";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/hotels" element={<List/>}></Route>
        <Route path ="/hotelsearch" element={<Hotel/>}></Route>
        <Route path ="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
        </Routes>   
    </BrowserRouter>
  );
}

export default App;
