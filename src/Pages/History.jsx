import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

const History = () => {
  return (
    <Box className="container mx-auto px-4 py-10 max-w-6xl min-h-[70vh]">
      <Box className="flex flex-col sm:flex-row my-6 justify-between items-start sm:items-center gap-3">
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Downloaded Resume History
        </Typography>
        <Button
          component={Link}
          to="/"
          startIcon={<MdArrowBack />}
          sx={{ color: '#9b7856', textTransform: 'none', fontWeight: 600 }}
        >
          Back
        </Button>
      </Box>

      <Box className="text-center my-16">
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: 700, color: 'text.secondary' }}
        >
          No Resumes are downloaded yet!!!....
        </Typography>
      </Box>
    </Box>
  )
}

export default History
