import { Stack } from '@mui/material';
import PromiseCard from '../promise-card';

import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

export default function Promises() {
  const { data: promises } = useSWR('/api/promises', fetcher);

  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      {promises.map(promise => (
        <PromiseCard promises={promises} promise={promise} key={promise._id} />
      ))}
    </Stack>
  )
}