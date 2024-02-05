import AdminSidebar from "../../components/adminsidebar/AdminSidebar";
import AdminNavbar from "../../components/adminavbar/AdminNavbar";
import "./adminhome.scss";
import AdminWidget from "../../components/adminwidget/AdminWidget";
import AdminFeatured from "../../components/adminfeatured/AdminFeatured";
import AdminChart from "../../components/adminchart/AdminChart";
import AdminTable from "../../components/admintable/AdminTable";

const Home = () => {
  return (
    <div className="home">
      <AdminSidebar />
      <div className="homeContainer">
      <AdminNavbar />
      <div className="widgets">
          <AdminWidget type="user" />
          <AdminWidget type="order" />
          <AdminWidget type="earning" />
          <AdminWidget type="balance" />
      </div>
      <div className="charts">
          <AdminFeatured />
          <AdminChart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <AdminTable />
          </div>
      </div>
     </div>
  );
};

export default Home;