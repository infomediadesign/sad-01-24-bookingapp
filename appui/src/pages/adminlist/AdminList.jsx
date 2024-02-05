import "./adminlist.scss"
import AdminSidebar from "../../components/adminsidebar/AdminSidebar"
import AdminNavbar from "../../components/adminavbar/AdminNavbar"
import AdminDatatable from "../../components/admindatatable/AdminDatatable"

const List = () => {
  return (
    <div className="list">
      <AdminSidebar />
      <AdminNavbar />
      <div className="listContainer">
     
        <AdminDatatable />
      </div>
    </div>
  )
}

export default List