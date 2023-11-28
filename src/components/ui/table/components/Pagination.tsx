import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Pagination = () => {
   return (
      <Stack spacing={2}>
         {/* <span className=""></span> */}
         <MuiPagination
            classes={{
               ul: "",
               root: "",
            }}
            count={10}
            showFirstButton
            showLastButton
            shape="rounded"
            variant="outlined"
            // slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            sx={{
               "& button.MuiPaginationItem-root": {
                  borderRadius: "8px",
                  fontWeight: 600,
                  borderColor: "#E8E8E8"
               },
               "& button.Mui-selected": {
                  backgroundColor: "#5E5FF5", // Set your background color for the active page
                  color: "#fff", // Set your text color for the active page
               },
            }}
         />
      </Stack>
   );
};
export default Pagination;
