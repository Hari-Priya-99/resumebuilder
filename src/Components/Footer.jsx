import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box
      id="Footer-div"
      className="text-white p-8 md:p-12"
      sx={{ backgroundColor: '#9b7856', minHeight: 280 }}
    >
      <Box className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">
        <Box className="max-w-md">
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            AI rBuilder
          </Typography>
          <Typography component="p" className="text-sm leading-relaxed text-gray-100">
            An AI Powered Resume Builder is a web application that helps users create
            professional resumes quickly and efficiently using artificial intelligence.
            Traditional resume creation can be time-consuming and difficult, especially
            for freshers who may not know the correct format or keywords required for
            modern recruitment systems.
          </Typography>
        </Box>

        <Box className="flex flex-col gap-6">
          <Box>
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
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
            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Connect With Us
            </Typography>
            <Box className="flex items-center gap-4 text-xl">
              <a href="#" aria-label="Instagram" className="text-white">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="text-white">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="WhatsApp" className="text-white">
                <FaWhatsapp />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

      <Typography component="p" className="text-center text-sm mt-10">
        Designed & built with ❤️ using React
      </Typography>
    </Box>
  )
}

export default Footer
