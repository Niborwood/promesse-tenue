import { Box, TextField, Stack, Button, Fade } from '@mui/material';
import { useState } from 'react';
import PageTitle from '../components/ui/page-title';
import LoadingButton from '@mui/lab/LoadingButton';


export default function AddPage() {
  // Prepare data for mutation

  // State for values form
  const [values, setValues] = useState({
    promise: '',
    context: '',
    person: '',
  });

  // State for loading state
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    // Send the data through the API
    try {
      await fetch('/api/promises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

    } catch (err) {
      console.log(err);
    }

    // Re-init and success message
    setLoading(false);
  }

  return (
    <Box py={4}>
      <PageTitle title="Ajouter une promesse" />

      <Fade in appear>
        <Box component="form" my={4} onSubmit={handleSubmit}>
          <Stack direction="column" spacing={4}>

            <TextField
              label="Promesse"
              variant="standard"
              color="neutral"
              multiline
              rows={2}
              value={values.promise}
              onChange={(event) => {
                setValues(prev => {
                  return { ...prev, promise: event.target.value };
                });
              }}
              required
            />

            <TextField
              label="Contexte"
              variant="standard"
              color="neutral"
              multiline
              rows={4}
              value={values.context}
              onChange={(event) => {
                setValues(prev => {
                  return { ...prev, context: event.target.value };
                });
              }}
              required
            />

            <TextField
              label="Personne"
              variant="standard"
              color="neutral"
              value={values.person}
              onChange={(event) => {
                setValues(prev => {
                  return { ...prev, person: event.target.value };
                });
              }}
              required
            />

            <LoadingButton
              loading={loading}
              variant="contained"
              color="neutral"
              size="large"
              type="submit"
              onClick={handleSubmit}
            >
              Ajouter une promesse
            </LoadingButton>

          </Stack>
        </Box>
      </Fade>

    </Box>
  )
}
