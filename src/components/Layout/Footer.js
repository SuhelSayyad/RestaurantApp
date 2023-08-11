import React from "react"
import { Box, Typography} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
   <>
    <Box sx={{textAlign:'center', bgcolor:'black',color:"white",p:3}}>
    <Box sx={{my:3,
    "& svg":{
        fontSize:"50px",
        cursor:"pointer",
        mr:2,
    },
    "& svg:hover":{
        color:"red",
        transform:"translateX(5px)",
        transition:"all 400ms",
        
    },
    
    }}>
    <InstagramIcon/>
    <YouTubeIcon/>
    <FacebookIcon/>

    </Box>

        <Typography variant="h5"
        sx={{
            "@media (max-width:600px)":{
                fontSize:"1rem",
            }
        }}>
            All Rights Reserved &copy; Suhel Sayyad .
        </Typography>
    </Box>
   </>
  )
}

export default Footer
