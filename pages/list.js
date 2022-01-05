import { Box, ButtonGroup, Button, Typography } from '@mui/material';
import PageTitle from '../components/ui/page-title';
import Promises from '../components/ui/promises';

import { getDocuments } from '../helpers/db';
import { SWRConfig } from 'swr';

export default function ListPage({ fallback }) {


  return (
    <Box py={4}>

      <PageTitle title="Promesses" />

      <Box my={2}>
        <Typography variant="h6" color="white" sx={{ mb: 0 }}>
          Filtrer
        </Typography>
        <ButtonGroup variant="contained" color="neutral" aria-label="filter promises" size="small">
          <Button>Pending</Button>
          <Button>Résolues</Button>
          <Button>Rompues</Button>
        </ButtonGroup>
      </Box>

      <SWRConfig value={{ fallback }}>
        <Promises />
      </SWRConfig>

    </Box>
  )
}

export async function getStaticProps() {
  const promises = await getDocuments('promises');
  return {
    props: {
      fallback: {
        '/api/promises': promises
      }
    },
    revalidate: 36000,
  }
}
