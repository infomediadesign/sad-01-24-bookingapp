import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Hotel from "./pages/hotel/Hotel";
import Signup from "./pages/signup/Signup";
import AdminHome from "./pages/adminhome/AdminHome";
import Login from "./pages/login/Login";
import AdminList from "./pages/adminlist/AdminList";
import AdminSingle from "./pages/adminsingle/AdminSingle";
import AdminNew from "./pages/adminnew/AdminNew";
import { productInputs, userInputs } from "./formSource";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/hotels" element={<List/>}></Route>
        <Route path ="/hotelsearch" element={<Hotel/>}></Route>
        <Route path ="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path ="/adminhome" element={<AdminHome/>}></Route>
        <Route path="users">
              <Route index element={<AdminList />} />
              <Route path=":userId" element={<AdminSingle />} />
              <Route
                path="new"
                element={<AdminNew inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<AdminList />} />
              <Route path=":productId" element={<AdminSingle />} />
              <Route
                path="new"
                element={<AdminNew inputs={productInputs} title="Add New Product" />}
              />
            </Route>
        </Routes>   
    </BrowserRouter>
  );
}

export default App;
