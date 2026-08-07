import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'




const Footer = () => {
  return (
   <Box id='Footer-div' className="bg-[#9A7356] text-white p-10 ">
    
      <Box className="flex flex-row justify-between ">
        
        
        <Box className="max-w-md">
          <Typography variant="h5" component="h5" className=" text-2xl mb-4">
            AI rBuilder
          </Typography>
          <Typography component="p" className="text-sm leading-relaxed text-gray-100">
            An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.
          </Typography>
        </Box>

      
        <Box className="flex flex-col gap-6">
          
          <Box>
            <Typography variant="h5" component="h5" className="font-bold text-xl mb-3">
              Contact Us
            </Typography>
            <Typography component="p" className="flex items-center gap-2 text-sm mb-2">
              <FaEnvelope className="text-base" /> resumebuilder@gmail.com
            </Typography>
            <Typography component="p" className="flex items-center gap-2 text-sm">
              <FaPhoneAlt className="text-base" /> 9087654321
            </Typography>
          </Box>

         
          <Box>
            <Typography variant="h5" component="h5" className=" text-xl mb-3">
              Connect With Us
            </Typography>
            <Box className="flex items-center gap-4 text-xl">
              <a href="#" ><FaInstagram /></a>
              <a href="#" ><FaFacebookF /></a>
              <a href="#" ><FaWhatsapp /></a>
            </Box>
          </Box>
        </Box>

      </Box>

     
      <Typography component="p" className="text-center text-sm">
        Designed & built with ❤️ using React
      </Typography>
    </Box>
  )
}

export default Footer
