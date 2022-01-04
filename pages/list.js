import { Box, Typography, Slide, Stack } from '@mui/material';
import PromiseCard from '../components/promise-card';

export default function ListPage() {
  return (
    <Box py={4}>
      <Slide in direction='right'>
        <Typography variant="h3" color="white">
          Consulter les promesses
        </Typography>
      </Slide>
      <Stack spacing={2} sx={{ my: 4 }}>
        <PromiseCard />
        <PromiseCard />
        <PromiseCard />
      </Stack>
    </Box>
  )
}
