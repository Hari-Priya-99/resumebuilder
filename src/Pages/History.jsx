import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const History = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{ my: 5, fontWeight: 'bold' }}
      >
        What's AI rBuilder
      </Typography>

     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
      
        <div className="lg:col-span-5 lg:col-start-2 flex flex-col gap-4">
          <Typography color="text.secondary">
            An AI rBuilder is a web application that helps users create professional
            resumes quickly and efficiently using artificial intelligence. Traditional
            resume creation can be time-consuming and difficult, especially for freshers
            who may not know the correct format or keywords required for modern recruitment systems.
          </Typography>

          <Typography color="text.secondary">
            The system can suggest job-specific keywords, professional summaries, and
            skill recommendations to make the resume more effective and ATS
            (Applicant Tracking System) friendly.
          </Typography>

          <Typography color="text.secondary">
            The main goal of the AI rBuilder is to simplify the resume creation
            process and help job seekers build professional, well-structured resumes
            in a few minutes. Users can edit content, preview their resume, and
            download it in formats such as PDF.
          </Typography>

          <Typography color="text.secondary">
            This type of system is especially useful for students &amp; fresh
            graduates, who want to create high-quality resumes that increase their
            chances of getting shortlisted for job interviews.
          </Typography>
        </div>

       
        <div className="lg:col-span-5 lg:col-start-8">
          <Box
            component="img"
            src="/resume.png"
            alt="resume"
            sx={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
              borderRadius: '12px',
            }}
          />
        </div>

      </div>
    </Container>
  )
}

export default History