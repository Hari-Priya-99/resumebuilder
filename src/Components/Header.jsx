import { Box, Typography, Button, Tooltip } from '@mui/material'
import React from 'react'
import { MdOutlineFindInPage } from 'react-icons/md'
import { Link } from 'react-router-dom'

const aboutTooltip =
  "An AI rBuilder suggests job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."

const Header = () => {
  return (
    <Box
      className="flex justify-between items-center px-4 py-3 text-white"
      sx={{ backgroundColor: '#9b7856' }}
    >
      <Box
        component={Link}
        to="/"
        className="flex gap-3 items-center no-underline text-white"
        sx={{ textDecoration: 'none', color: 'inherit' }}
      >
        <MdOutlineFindInPage className="text-3xl" />
        <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
          Resume Builder
        </Typography>
      </Box>

      <Box className="flex items-center gap-1">
        <Tooltip title={aboutTooltip} placement="bottom-start">
          <Button
            component={Link}
            to="/history"
            sx={{ color: 'bisque', textTransform: 'uppercase', fontWeight: 600 }}
          >
            History
          </Button>
        </Tooltip>

        <Tooltip title={aboutTooltip} placement="bottom-start">
          <Button
            component={Link}
            to="/#about"
            sx={{ color: 'bisque', textTransform: 'uppercase', fontWeight: 600 }}
          >
            About Us
          </Button>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Header
