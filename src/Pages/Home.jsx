import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import History from './History' 


const Home = () => {
  return (
    <Box id="Home-div">
      <Box className="flex justify-center items-center" sx={{ minHeight: '100vh' }}>
        <Box
          sx={{
            bgcolor: 'whitesmoke',
            maxWidth: '350px',
            padding: '30px',
            borderRadius: '20px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Make your resume
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'grey', mb: 3 }}>
            Make your ai resume today
          </Typography>

          <Button
            component={Link}
            to="/builder" 
            variant="contained"
            sx={{
              bgcolor: '#1e3ad7',
              color: '#fff8e1', 
              textTransform: 'none',
              px: 3,
              py: 1,
              borderRadius: '8px',
            }}
          >
            Make one
          </Button>
        </Box>
      </Box>
      <Box id="History-div">
      <History />
      </Box>

     
    </Box>
  )
}

export default Home