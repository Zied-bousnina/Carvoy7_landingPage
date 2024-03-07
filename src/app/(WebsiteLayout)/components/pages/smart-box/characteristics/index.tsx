import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper  from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function SmartBoxCharacteristics() {
  return (
    <Box
      overflow="hidden"
      borderRadius="0"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        paddingRight:{lg:24,xs:4},
        paddingLeft:{lg:24,xs:4},
      }}
      mt={-4}
    >
      
        
          <Typography
            variant="h2"
            fontWeight={700}
            textAlign="center"
            sx={{
              fontSize: {
                lg: "36px",
                xs: "25px",
              },
              lineHeight: {
                lg: "43px",
                xs: "30px",
              },
            }}
            mb={4}
            mx={24}
          >
            Characteristics
          </Typography>
      
      <TableContainer component={Paper} >
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>SIZE OPTIONS</StyledTableCell>
              <StyledTableCell>POWER OPTIONS</StyledTableCell>
              <StyledTableCell>CONNECTIVITY AND SENSORS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography fontWeight={700}>140 LITERS</Typography>
                <Typography>750 X 900 X 1400 MM</Typography>
              </StyledTableCell>
              <StyledTableCell>
                {" "}
                <Typography fontWeight={700}>SOLAR</Typography>
                <Typography>
                  SOLAR PANEL AND BUILT-IN BATTERY FOR OUTDOOR USE
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                {" "}
                <Typography fontWeight={700}>CONNECTIVITY</Typography>
                <Typography>
                  CONNECTIVITY TO THE CLOUD NETWORK BY 4G, WIFI, BLUETOOTH
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography fontWeight={700}>240 LITERS</Typography>
                <Typography>900 x 1000 x 1500 mm</Typography>
              </StyledTableCell>
              <StyledTableCell>
                {" "}
                <Typography fontWeight={700}>Electric</Typography>
                <Typography>MAINS POWERED INDOOR</Typography>
              </StyledTableCell>
              <StyledTableCell>
                {" "}
                <Typography fontWeight={700}>Disinfection</Typography>
                <Typography>AUTOMATIC SPRAYING, UV STERILIZATION</Typography>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <Typography fontWeight={700}>360 LITERS</Typography>
                <Typography>1050 x 1050 x 1500 MM</Typography>
              </StyledTableCell>
              <StyledTableCell>
                {" "}
                <Typography fontWeight={700}>Hybrid</Typography>
                <Typography>SOLAR POWER? BATTERY AND MAINS POWER</Typography>
              </StyledTableCell>
              <StyledTableCell>
                {" "}
                <Typography fontWeight={700}>Sensors</Typography>
                <Typography>POSITION, LEVEL, SMOKE, HUMIDITY, SHOCK</Typography>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
