import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, total, onChange }) => {
  let pages = new Array(total).fill(0).map((a, i) => {
    return (
      <Button key={i} disabled={page === i + 1} onClick={() => onChange(i + 1)}>
        {i + 1}
      </Button>
    );
  });
  return (
    <Box>
      <span style={{ fontSize: "20px", marginRight: "10px" }}>Page:</span>{" "}
      {pages}
    </Box>
  );
};

export default Pagination;
