import { Box, Typography } from '@mui/material';
import React from 'react'
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from 'react-router-dom';
import History from '../Pages/History';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Header = () => {
  return (
    <Box className='bg-[#12283d] p-3 text-white flex justify-between' >
    <Box className='flex gap-4 items-center'>
        <MdOutlineFindInPage className='text-3xl' />
        <Typography variant='h5' component={'h5'}>Resume Builder</Typography>
    </Box>
    <Box>
       <Tooltip title="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF." placement="bottom-start">
           
          <Button style={{color:"bisque"}}>HISTORY</Button>
        
        </Tooltip>
        
          <Tooltip title="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF." placement="bottom-start">
           
          <Button style={{color:"bisque"}}>ABOUT</Button>
        
        </Tooltip>
    </Box>
  
    </Box>
    
  )
}

export default Header
