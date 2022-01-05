import { Box, TextField, Stack, Snackbar, Alert, Fade } from '@mui/material';
import { useState } from 'react';
import PageTitle from '../components/ui/page-title';
import LoadingButton from '@mui/lab/LoadingButton';


export default function AddPage() {
  // State for values form
  const [values, setValues] = useState({
    promise: '',
    context: '',
    person: '',
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // State for loading state
  const [loading, setLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorMessage(false);
    setSuccessMessage(false);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    // Send the data through the API
    try {
      const response = await fetch('/api/promises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error;
      }

      // Reset form
      setValues({
        promise: '',
        context: '',
        person: '',
      });
      setSuccessMessage(true);

    } catch (err) {
      console.log(err);
      setErrorMessage(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box py={4}>
      <PageTitle title="Ajouter une promesse" />

      <Fade in appear>
        <Box component="form" my={4} onSubmit={handleSubmit}>
          <Stack direction="column" spacing={4}>

            <TextField
              label="Promesse"
              variant="filled"
              color="neutral"
              multiline
              rows={2}
              value={values.promise}
              onChange={(event) => {
                setValues(prev => {
                  return { ...prev, promise: event.target.value };
                });
              }}
              InputProps={{
                style: {
                  color: '#fff',
                  borderColor: '#fff',
                }
              }}
              InputLabelProps={{
                style: {
                  color: '#fff'
                }
              }}
              required
            />

            <TextField
              label="Contexte"
              variant="filled"
              color="neutral"
              multiline
              rows={4}
              value={values.context}
              onChange={(event) => {
                setValues(prev => {
                  return { ...prev, context: event.target.value };
                });
              }}
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
              required
            />

            <TextField
              label="Personne"
              variant="filled"
              color="neutral"
              value={values.person}
              onChange={(event) => {
                setValues(prev => {
                  return { ...prev, person: event.target.value };
                });
              }}
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

      <Snackbar open={successMessage || errorMessage} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={errorMessage ? 'error' : 'success'} sx={{ width: '100%' }}>
          {errorMessage ? 'Certains champs sont invalides.' : 'Promesse ajoutée.'}
        </Alert>
      </Snackbar>

    </Box >
  )
}
