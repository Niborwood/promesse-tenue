import { Typography, Stack, Box, Button, ButtonGroup, Fade, Slide } from '@mui/material';

import Link from 'next/link';

export default function HomePage() {
  return (
    
      <Stack spacing={2} justifyContent="center" sx={{ minHeight: '100vh' }}>
        <Slide in appear direction="right">
          <Typography component="h1" variant="h2" color="white">
            promesse tenue.
          </Typography>
        </Slide>
        <Fade in>
          <Box>
            <ButtonGroup variant="contained" color="neutral" aria-label="site actions" size="large" disableElevation>
              <Button><Link href="/add">Ajouter</Link></Button>
              <Button><Link href="/list">Consulter</Link></Button>
            </ButtonGroup>
          </Box>
        </Fade>
      </Stack>
  )
}
