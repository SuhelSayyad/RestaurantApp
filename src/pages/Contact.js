import Layout from "../components/Layout/Layout"
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Contact() {
  return (
    <>
      <Layout>
        <Box sx={{ my: 10, p:5, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4 " sx={{fontWeight:"bold",fontSize:20}} > Contact Us</Typography>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </Box>
        <Box sx={{m:3}}>
          <TableContainer component={Paper}>
            <Table aria-aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{backgroundColor:"black", color:"white"}}>
                    Contact Details
                  </TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon  sx={{color:'red',pt:1}}/>1800-12-3456(Toll-Free Number)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <AttachEmailIcon  sx={{color:'blue',pt:1}}/>xyz@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <LocalPhoneIcon  sx={{color:'green',pt:1}}/>1234567890
                  </TableCell>
                </TableRow>
              </TableBody>

            </Table>
          </TableContainer>
        </Box>


      </Layout>
    </>
  )
}

export default Contact
