import { Box, TextField, Typography, Stack, Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { useRef } from 'react';

export default function AddPage() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('submit');
  }

  return (
    <Box py={4}>
      <Typography variant="h3" color="white">
        Ajouter une promesse
      </Typography>

      <Box component="form" my={4} onClick={handleSubmit}>
        <Stack direction="column" spacing={4}>
          <TextField label="Promesse" variant="standard" color="neutral" multiline rows={2} />
          <TextField label="Contexte" variant="standard" color="neutral" multiline rows={4} />
          <TextField label="Personne" variant="standard" color="neutral" />
          <Button variant="contained" color="neutral" type="submit">
            Valider la promesse
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
