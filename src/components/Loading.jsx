import { useEffect, useRef, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress((prevProgress) => prevProgress + diff);
        setBuffer((prevBuffer) => prevBuffer + diff + diff2);
      }
    };
  }, [progress]);

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 200);

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
      <LinearProgress
        variant="indeterminate"
        value={progress}
        valueBuffer={buffer}
      />
    </Box>
  );
}
