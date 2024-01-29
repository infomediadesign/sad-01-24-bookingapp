import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List"
<<<<<<< Updated upstream
import Hotel from "./pages/hotel/Hotel";
=======
import Login from "./pages/login/LoginSignup";
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/hotels" element={<List/>}></Route>
<<<<<<< Updated upstream
        <Route path ="/hotelsearch" element={<Hotel/>}></Route>
=======
        <Route path ="/login" element={<Login/>}></Route>
>>>>>>> Stashed changes
        </Routes>   
    </BrowserRouter>
  );
}

export default App;
