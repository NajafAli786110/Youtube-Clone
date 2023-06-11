import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #e3e3e3",
          px: { sm: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Najaf Ali
        </Typography>
      </Box>
      <Box p={2} overflowY="auto" height="90vh" flex={2} >
        <Typography variant="h4" color="white" pl={5} fontWeight="bold" mb={2}>
          New <span style={{color: '#F31503'}}>Videos</span>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
