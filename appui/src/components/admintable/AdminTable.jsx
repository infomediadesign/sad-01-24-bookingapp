import "./admintable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
        "id": 7856231,
        "bookings": "Hotel",
        "customer": "Elena Martinez",
        "date": "5 March",
        "amount": 785,
        "method": "Cash on Delivery",
        "status": "Approved"
    },
    {
        "id": 9021345,
        "bookings": "Apartment",
        "customer": "David Brown",
        "date": "8 March",
        "amount": 900,
        "method": "Online Payment",
        "status": "Pending"
    },
    {
        "id": 3524609,
        "bookings": "Villa",
        "customer": "Elena Martinez",
        "date": "3 March",
        "amount": 35,
        "method": "Cash on Delivery",
        "status": "Pending"
    },
    {
        "id": 1235487,
        "bookings": "Hotel",
        "customer": "Olivia Johnson",
        "date": "6 March",
        "amount": 920,
        "method": "Online",
        "status": "Approved"
    },
    {
        "id": 6578923,
        "bookings": "Villa",
        "customer": "Brandon Clark",
        "date": "4 March",
        "amount": 2000,
        "method": "Online",
        "status": "Pending"
    }
];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Bookings</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                 
                  {row.bookings}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
