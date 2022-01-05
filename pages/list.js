import { Box, Stack } from '@mui/material';
import PageTitle from '../components/ui/page-title';
import PromiseCard from '../components/promise-card';

import { getDocuments } from '../helpers/db';

export default function ListPage({ promises }) {
  return (
    <Box py={4}>
      <PageTitle title="Promesses" />
      <Stack spacing={2} sx={{ mt: 4 }}>
        {promises.map(promise => (
          <PromiseCard promise={promise} key={promise._id} />
        ))}
      </Stack>
    </Box>
  )
}

export async function getStaticProps() {
  const promises = await getDocuments('promises');
  return {
    props: {
      promises
    },
  }
}
