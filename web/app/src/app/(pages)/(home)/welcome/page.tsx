'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import Home from "@/views/home";
import { Box } from "@mui/material";

const HomePage = () => {
  return <Box sx={{
    position: 'relative',
    bgcolor: 'background.default',
  }}>
    <Header />
    <Home />
    <Footer />
  </Box>
};

export default HomePage;
