import * as React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Rating
} from "@mui/material";
import "./DaycareSchedules.scss"
import DaycareProfile from "../components/DaycareProfile";
import {useSearchParams, useNavigate }  from "react-router-dom";
import axios from "axios";









function createData(daycare_id, city, rating, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec) {
  return { daycare_id, city, rating, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec };
}

const testRows = [
  createData(1, 2, 5, 10, 5, 5, "Full", "Full", "Full", "Full", 10, 10, 5, 5),
  createData(2, 3.5, 3, "Full", "Full", 10, 5, 5, "Full", 10, "Full", 10, 5, 5),
  createData(3, 5, 1, 5, "Full", "Full", 10, 5, "Full", 10, 5, "Full", 10, 5),
];
console.log(testRows);

export default function DaycareSchedules() {

  const [daycares, setDaycares] = React.useState (testRows);
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate();
  React.useEffect (()=> {
    const city = searchParams.get("city")
     axios.post('/api/users/search', {"city": city})
     .then(result => {

      setDaycares(result.data);
      console.log("correct city", result.data);
     })
  },
  [])

  return (
    <div className="daycare-table">
      <TableContainer className="table" component={Paper} elevation={24}>
        <div className="table2">
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <h2 id="title">Daycare Availability: </h2>
                <sub>Search through our various Daycares and see the available openings per month. Each Daycare</sub>
              </TableRow>
              <TableRow>
                <TableCell><h4>Daycares</h4></TableCell>
                <TableCell><h4>Rating</h4></TableCell>
                <TableCell align="right">JAN</TableCell>
                <TableCell align="right">FEB</TableCell>
                <TableCell align="right">MAR</TableCell>
                <TableCell align="right">APR</TableCell>
                <TableCell align="right">MAY</TableCell>
                <TableCell align="right">JUN</TableCell>
                <TableCell align="right">JUL</TableCell>
                <TableCell align="right">AUG</TableCell>
                <TableCell align="right">SEP</TableCell>
                <TableCell align="right">OCT</TableCell>
                <TableCell align="right">NOV</TableCell>
                <TableCell align="right">DEC</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testRows.map((row) => (
                <TableRow
                  key={row.daycare_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <DaycareProfile key={row.daycare_id} daycare={row.daycare_id} />
                  </TableCell>
                  <TableCell>
                    <Rating name="read-only" value={row.rating} readOnly />
                  </TableCell>
                  <TableCell align="right">{row.jan}</TableCell>
                  <TableCell align="right">{row.feb}</TableCell>
                  <TableCell align="right">{row.mar}</TableCell>
                  <TableCell align="right">{row.apr}</TableCell>
                  <TableCell align="right">{row.may}</TableCell>
                  <TableCell align="right">{row.jun}</TableCell>
                  <TableCell align="right">{row.jul}</TableCell>
                  <TableCell align="right">{row.aug}</TableCell>
                  <TableCell align="right">{row.sep}</TableCell>
                  <TableCell align="right">{row.oct}</TableCell>
                  <TableCell align="right">{row.nov}</TableCell>
                  <TableCell align="right">{row.sep}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
};
