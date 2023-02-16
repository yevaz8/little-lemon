import { HStack, Box } from "@chakra-ui/layout";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

export default function ConfirmedBooking() {
  return (
    <>
      <Box>
        <HStack>
          <Box>
            <CheckCircleOutlineIcon />
          </Box>
          <Box>
            <p className="subtitle">You have successfully Booked a table.</p>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
