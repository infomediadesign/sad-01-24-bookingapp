import AdminSidebar from "../../components/adminsidebar/AdminSidebar";
import AdminNavbar from "../../components/adminavbar/AdminNavbar";
import "./adminhome.scss";

const Home = () => {
  return (
    <div className="home">
      <AdminSidebar />
      <div className="homeContainer">
        <AdminNavbar />
      </div>
    </div>
  );
};

export default Home;