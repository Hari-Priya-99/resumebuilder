import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import resumeImg from '../assets/resume.png'
import resumeSide from '../assets/resume1.png'
import aboutBg from '../assets/homeBG2.jpg'

const Home = () => {
  return (
    <Box>
      {/* Hero */}
      <Box
        id="Home-div"
        className="flex items-center"
        sx={{
          minHeight: '90vh',
          backgroundImage: `linear-gradient(rgba(51,152,143,0.7), rgba(51,152,143,0.7)), url(${resumeImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box className="container mx-auto px-6 py-16">
          <Box className="max-w-xl">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.35,
                textShadow: '0 1px 2px rgba(0,0,0,0.25)',
              }}
            >
              Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.
            </Typography>
            <Button
              component={Link}
              to="/steps"
              variant="contained"
              sx={{
                bgcolor: '#9b7856',
                color: '#fff',
                textTransform: 'none',
                px: 3,
                py: 1.2,
                fontWeight: 600,
                borderRadius: '6px',
                '&:hover': { bgcolor: '#866648' },
              }}
            >
              Make Your RESUME with AI
            </Button>
          </Box>
        </Box>
      </Box>

      {/* About — full-width background image */}
      <Box
        id="about"
        sx={{
          minHeight: '100vh',
          backgroundImage: `linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          py: 6,
        }}
      >
        <Box className="container mx-auto px-4 max-w-6xl">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ my: 5, fontWeight: 'bold' }}
          >
            What&apos;s AI rBuilder
          </Typography>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 lg:col-start-2 flex flex-col gap-4">
              <Typography color="text.secondary">
                An AI rBuilder is a web application that helps users create professional
                resumes quickly and efficiently using artificial intelligence. Traditional
                resume creation can be time-consuming and difficult, especially for freshers
                who may not know the correct format or keywords required for modern
                recruitment systems.
              </Typography>

              <Typography color="text.secondary">
                The system can suggest job-specific keywords, professional summaries, and
                skill recommendations to make the resume more effective and ATS (Applicant
                Tracking System) friendly.
              </Typography>

              <Typography color="text.secondary">
                The main goal of the AI rBuilder is to simplify the resume creation process
                and help job seekers build professional, well-structured resumes in a few
                minutes. Users can edit content, preview their resume, and download it in
                formats such as PDF.
              </Typography>

              <Typography color="text.secondary">
                This type of system is especially useful for students &amp; fresh graduates,
                who want to create high-quality resumes that increase their chances of
                getting shortlisted for job interviews.
              </Typography>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Box
                component="img"
                src={resumeSide}
                alt="AI resume example"
                sx={{
                  width: '100%',
                  height: { xs: 320, md: 500 },
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: 3,
                }}
              />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
