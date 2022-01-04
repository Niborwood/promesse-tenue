import { Typography, Stack, Container, Box, Button, ButtonGroup, Fade, Zoom } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ background: 'linear-gradient(#14b8a6, #06b6d4)' }}>
      <Stack spacing={2} justifyContent="center" sx={{ minHeight: '100vh' }}>
        <Zoom in>
          <Typography component="h1" variant="h2" color="white">
            promesse tenue.
          </Typography>
        </Zoom>
        <Fade in>
          <Box>
            <ButtonGroup variant="contained" color="neutral" aria-label="site actions" size="large" disableElevation>
              <Button>Ajouter</Button>
              <Button>Consulter</Button>
            </ButtonGroup>
          </Box>
        </Fade>
      </Stack>
    </Container>
  )
}
