import Paper from "@mui/material/Paper";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Pagination } from "../components";

function createData(
   name: string,
   calories: number,
   fat: number,
   carbs: number,
   protein: number
) {
   return { name, calories, fat, carbs, protein };
}

const rows = [
   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
   createData("Eclair", 262, 16.0, 24, 6.0),
   createData("Cupcake", 305, 3.7, 67, 4.3),
   createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Table = () => {
   return (
      <div>
         <TableContainer component={Paper}>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead className="border-1">
                  <TableRow className="bg-gray-100 ">
                     <TableCell className="">Dessert (100g serving)</TableCell>
                     <TableCell align="right">Calories</TableCell>
                     <TableCell align="right">Fat&nbsp;(g)</TableCell>
                     <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                     <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody className="border-1">
                  {rows.map((row) => (
                     <TableRow
                        key={row.name}
                        sx={{
                           "&:last-child td, &:last-child th": { border: 0 },
                        }}
                     >
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </MuiTable>
         </TableContainer>
         <div className="flex justify-center my-3">
            <Pagination />
         </div>
      </div>
   );
};

export default Table;
