'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import Chat from "@/views/chat";
import { Box } from "@mui/material";

const ChatPage = () => {
  return <Box sx={{
    position: 'relative',
    bgcolor: 'background.default',
  }}>
    <Header />
    <Chat />
    <Footer />
  </Box>
};

export default ChatPage;
