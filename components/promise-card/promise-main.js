import { Stack, Box, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import { keyframes } from "@emotion/react";


export default function PromiseMain({ status, promise, date }) {
  // Display readable date from promise.date
  const readableDate = new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Display icon regarding status
  const rotateAnimation = keyframes`
    from {
      transform: rotate(0deg);
      }
    to {
        transform: rotate(360deg);
    }`;
  let icon;
  let textColor;
  switch (status) {
    case 'resolved':
      icon = <TaskAltIcon fontSize="large" color="primary" />;
      textColor = 'primary';
      break;

    case 'rejected':
      icon = <HighlightOffIcon fontSize="large" color="error" />;
      textColor = 'error';
      break;

    default:
      // Make a reloading animation 
      icon = <AutorenewIcon fontSize="large" color="secondary" sx={{
        animation: `${rotateAnimation} 3s ease-in-out infinite`,
      }} />;
      textColor = 'secondary';
      break;
  }

  return (
    <Stack direction="row" spacing={2} sx={{
      mb: 4, background: 'url(quote.png) no-repeat top right',
      backgroundSize: 'contain'
    }}>
      <Box>
        {icon}
      </Box>
      <Box>
        <Typography variant="body1" color={textColor}>
          <strong>{promise}</strong>
        </Typography>
        <Typography variant="subtitle1" color="initial">
          Le {readableDate}
        </Typography>
      </Box>
    </Stack>
  )
}
