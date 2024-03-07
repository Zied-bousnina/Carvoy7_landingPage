import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { IconDotsVertical } from "@tabler/icons-react";
import BlankCard from "../../../(UserDashboardLayout)/components/shared/BlankCard";
import CustomTextField from "../../../(UserDashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "../../../(UserDashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import { Button, TablePagination } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SkeletonTable from "../loaders/skeletons/skeletonTable";

//*about this component
//headers is an array of strings that represent the table headers
// rows is an array of objects that represent the table rows that matches the headers titles
// data is an object that contains the table data as it is from db
//actionButtons is an array of JSX.Element that represent the action buttons to be displayed on top of the table to manage the table glabaly
//actionMenuItems is an array of functions that return JSX.Element that represent the action menu items to be displayed on top of the table to manage each element of the table
//! important: the rows data order must the same order of header example if header contains 5 elements the single row object must contain 5 elements
//*example
// const headers = ["name", "age", "gender"];
// const rows = [{ name: "John", age: 20, gender: "male" }]
//?info: in rows object naming is not important you can name the as you like

interface propsTypes {
  rows: any;
  data: any;
  isLoading: boolean;
  headers: string[];
  actionButtons?: ((key:any)=>JSX.Element)[];
  actionMenuItems?: ((func: () => void, data: any, key: any) => JSX.Element)[];
  isCSV?: boolean;
}

const CustomTable = ({
  rows,
  data,
  isLoading,
  headers,
  actionButtons = [],
  actionMenuItems = [],
  isCSV = false,
}: propsTypes) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [searchTerm, setSearchTerm] = React.useState(""); // State to hold the search term
  const open = Boolean(anchorEl);

  //table pagination state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //menu element handler functions
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Filter rows based on search term
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  //table pagination handler functions
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when changing rows per page
  };

  const currentPageRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  //download csv
  const downloadCSV = () => {
    // Convert table data to CSV format
    const csvRows = [
      headers.join(","), // CSV header row
      ...rows.map((row) =>
        headers
          .map((fieldName) => {
            let cell = row[fieldName]; // Accessing the property of row using fieldName
            if (typeof cell === "object" && cell !== null) {
              cell = cell.name ? `"${cell.name}"` : "N/A"; // Handle objects, wrap in quotes to manage commas
            } else {
              cell = `"${cell}"`; // Convert all data to string and wrap in quotes
            }
            return cell;
          })
          .join(",")
      ),
    ].join("\n");

    // Create a Blob with the CSV content
    const blob = new Blob([csvRows], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "table-data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BlankCard>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div className="w-auto sm:w-[350px]">
          <CustomFormLabel>Search</CustomFormLabel>
          <CustomTextField
            fullWidth
            placeholder="search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {actionButtons?.map((btn, index) => {
            return <div key={index}>{btn(index)}</div>;
          })}
          {isCSV && (
            <Button
              variant="contained"
              startIcon={<FileDownloadIcon />}
              onClick={downloadCSV}
            >
              download CSV
            </Button>
          )}
        </div>
      </div>
      {isLoading ? (
        <SkeletonTable rowCount={5} columnsCount={3} />
      ) : (
        <>
          <TableContainer>
            <Table aria-label="simple table" sx={{ borderRadius: "25px" }}>
              <TableHead sx={{ backgroundColor: "#e5e7eb" }}>
                <TableRow>
                  {headers.map((item, index) => (
                    <TableCell
                      key={index}
                      sx={index === 0 ? { borderRadius: " 15px 0 0 0" } : {}}
                    >
                      <Typography variant="h6">{item}</Typography>
                    </TableCell>
                  ))}
                  <TableCell sx={{ borderRadius: " 0 15px 0 0" }}></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {currentPageRows.map((row: any, index: number) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {Object.values(row).map((cell: any, i: number) => (
                        <TableCell scope="row" key={i}>
                          {typeof cell === "object" && cell !== null ? (
                            // Assuming you want to display the 'name' property of the object
                            // Adjust this logic based on how you want to display the object
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              {cell.name ? cell.name : "N/A"}{" "}
                              {/* Display 'N/A' if name is not available */}
                            </Typography>
                          ) : (
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              {cell}
                            </Typography>
                          )}
                        </TableCell>
                      ))}
                      <TableCell>
                        {actionMenuItems.length > 0 && (
                          <>
                            <IconButton
                              id="basic-button"
                              aria-controls={open ? "basic-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                              onClick={handleClick}
                            >
                              <IconDotsVertical width={18} />
                            </IconButton>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              {actionMenuItems?.map((menu, index) => (
                                <div key={index}>
                                  {menu(handleClose, data[index], index)}
                                </div>
                              ))}
                            </Menu>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            {filteredRows.length === 0 && !isLoading && (
              <Typography textAlign="center" fontSize={16} py={12}>
                No item found
              </Typography>
            )}
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </BlankCard>
  );
};

export default CustomTable;
