import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDescription, MdFileDownload } from 'react-icons/md'

const Steps = () => {
  return (
    <Box className="container mx-auto px-4 py-12 min-h-[70vh] max-w-5xl">
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ fontWeight: 700, mb: 6 }}
      >
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        <Box
          className="rounded p-8 text-center shadow-md"
          sx={{ bgcolor: 'background.paper' }}
        >
          <MdOutlineDescription className="text-5xl text-blue-600 mb-3 mx-auto" />
          <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
            Add Your Details
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Our AI will generate Skills &amp; Summary
          </Typography>
          <Typography variant="h6" component="p" sx={{ fontWeight: 700 }}>
            Step 1
          </Typography>
        </Box>

        <Box
          className="rounded p-8 text-center shadow-md"
          sx={{ bgcolor: 'background.paper' }}
        >
          <MdFileDownload className="text-5xl text-red-500 mb-3 mx-auto" />
          <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
            Download your Resume
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Download PDF and start applying
          </Typography>
          <Typography variant="h6" component="p" sx={{ fontWeight: 700 }}>
            Step 2
          </Typography>
        </Box>
      </div>

      <Box className="text-center mt-12">
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            bgcolor: '#9b7856',
            color: '#fff',
            textTransform: 'uppercase',
            px: 4,
            py: 1.2,
            fontWeight: 600,
            borderRadius: '6px',
            '&:hover': { bgcolor: '#866648' },
          }}
        >
          Let&apos;s Start
        </Button>
      </Box>
    </Box>
  )
}

export default Steps
