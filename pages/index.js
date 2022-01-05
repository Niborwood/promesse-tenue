import { Stack, Box, Button, ButtonGroup, Fade } from '@mui/material';

import Link from '../components/ui/link';
import PageTitle from '../components/ui/page-title';

export default function HomePage() {
  return (

    <Stack spacing={2} justifyContent="center" sx={{ minHeight: '100vh' }}>
      <PageTitle title="Promesse tenue." component="h2" />
      <Fade in>
        <Box>
          <ButtonGroup variant="contained" color="neutral" aria-label="site actions" size="large" disableElevation>
            <Button><Link color="secondary" href="/add">Ajouter</Link></Button>
            <Button><Link color="secondary" href="/list">Consulter</Link></Button>
          </ButtonGroup>
        </Box>
      </Fade>
    </Stack>
  )
}
