import { Box, Button,  } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Box>
      
        <Button variant="contained">
          <Link to="/company">COMPANIES NAMES</Link>
        </Button>
        <Button variant="contained">
          <Link to="/employee">EMPLOYEES NSAMES</Link>
        </Button>
    
    </Box>
  );
};
