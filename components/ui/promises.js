import { Stack } from '@mui/material';
import PromiseCard from '../promise-card';

import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { useEffect } from 'react';

export default function Promises({ promises, setPromises, setAllPromises }) {
  const { data } = useSWR('/api/promises', fetcher);

  useEffect(() => {
    if (data) {
      setPromises(data);
      setAllPromises(data);
    }
  }, [data, setPromises, setAllPromises]);

  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      {promises.map(promise => (
        <PromiseCard promises={promises} promise={promise} key={promise._id} />
      ))}
    </Stack>
  )
}