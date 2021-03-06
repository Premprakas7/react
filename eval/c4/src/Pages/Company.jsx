import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { CompanyInput } from "../Components/CompanyData/CompanyInput";
import { CompanyList } from "../Components/CompanyData/CompanyList";

export const Company = () => {
  return (
    <Box width="20rem" margin="auto">
      <Typography variant="h5" backgroundColor="red">
        COMPANY LIST
      </Typography>
      <Stack>
        <CompanyList />
      </Stack>
      <Box mt={"5rem"}>
        <CompanyInput />
      </Box>
    </Box>
  );
};
