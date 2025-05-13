import { useEffect, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const updateProgress = () => {
    setProgress((prevProgress) => {
      const diff = Math.random() * 10;
      return prevProgress + diff > 100 ? 0 : prevProgress + diff;
    });

    setBuffer((prevBuffer) => {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      return prevBuffer + diff + diff2;
    });
  };

  useEffect(() => {
    const timer = setInterval(updateProgress, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ p: 50, width: "100%" }}>
      <Typography
        variant="body1"
        sx={{
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        Loading...
      </Typography>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
  );
}
