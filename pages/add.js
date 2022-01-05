import { Box, TextField, Typography, Stack, Button, Fade } from '@mui/material';
import { useRef } from 'react';
import PageTitle from '../components/ui/page-title';

export default function AddPage() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('submit');
  }

  return (
    <Box py={4}>
      <PageTitle title="Ajouter une promesse" />

      <Fade in appear>
        <Box component="form" my={4} onClick={handleSubmit}>
          <Stack direction="column" spacing={4}>
            <TextField label="Promesse" variant="standard" color="neutral" multiline rows={2} />
            <TextField label="Contexte" variant="standard" color="neutral" multiline rows={4} />
            <TextField label="Personne" variant="standard" color="neutral" />
            <Button variant="contained" color="neutral" type="submit" size="large">
              Valider la promesse
            </Button>
          </Stack>
        </Box>
      </Fade>

    </Box>
  )
}
