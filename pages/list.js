import { Box, ButtonGroup, Button, Typography, TextField, Divider } from '@mui/material';
import PageTitle from '../components/ui/page-title';
import Promises from '../components/ui/promises';

import { getDocuments } from '../helpers/db';
import { SWRConfig } from 'swr';
import { useState } from 'react';

export default function ListPage({ fallback }) {
  // Handle filter
  const [promises, setPromises] = useState([]);
  const [allPromises, setAllPromises] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');

  function handleFilter(filter) {
    if (filter === selectedFilter) {
      setSelectedFilter('');
      setPromises(allPromises);
      return;
    }

    setSelectedFilter(filter);
    const filteredPromises = allPromises.filter(promise => promise.status === filter);
    setPromises(filteredPromises);
  }

  // Handle search
  const [search, setSearch] = useState('');
  function handleSearch(value) {
    setSearch(value);
    const filteredPromises = allPromises.filter(promise => promise.person.toLowerCase().includes(value.toLowerCase()));
    setPromises(filteredPromises);
  }

  return (
    <Box py={4}>

      <PageTitle title="Promesses" />

      <Divider sx={{ my: 2 }} />


      {/* Filter */}
      <Box my={2}>
        <Typography variant="h6" color="white" sx={{ mb: 0 }}>
          Filtrer
        </Typography>
        <ButtonGroup variant="contained" color="neutral" aria-label="filter promises" size="small">
          <Button
            onClick={() => { handleFilter('pending') }}
            color={selectedFilter === 'pending' ? 'primary' : 'inherit'}
          >En cours</Button>
          <Button
            onClick={() => { handleFilter('resolved') }}
            color={selectedFilter === 'resolved' ? 'primary' : 'inherit'}
          >Résolues</Button>
          <Button
            onClick={() => { handleFilter('rejected') }}
            color={selectedFilter === 'rejected' ? 'primary' : 'inherit'}
          >Rompues</Button>
        </ButtonGroup>
      </Box>

      {/* Search */}
      <Box>
        <Typography variant="h6" color="white" sx={{ mb: 0 }}>
          Rechercher par concerné.e
        </Typography>
        <TextField
          id="search"
          variant="standard"
          color="neutral"
          size="small"
          value={search}
          InputProps={{
            style: {
              color: '#fff'
            }
          }}
          InputLabelProps={{
            style: {
              color: '#fff'
            }
          }}
          onChange={
            (event) => { handleSearch(event.target.value) }

          }

        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <SWRConfig value={{ fallback }}>
        <Promises
          promises={promises}
          setPromises={setPromises}
          setAllPromises={setAllPromises}
        />
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
