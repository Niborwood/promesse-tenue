import { Box, TextField, Stack, Snackbar, Alert, Fade, Typography, Switch, FormGroup, FormControlLabel, Grow } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { useState } from 'react';
import PageTitle from '../components/ui/page-title';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '../components/ui/link';


export default function AddPage() {
  // State for values form
  const [values, setValues] = useState({
    promise: '',
    context: '',
    person: '',
    date: new Date(),
  });
  const [dateOpen, setDateOpen] = useState(false);
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

            {/* Promesse */}
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

            {/* Contexte */}
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

            {/* Personne */}
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

            {/* Antidate */}
            <FormGroup>
              <FormControlLabel
                sx={{ color: "neutral.main" }}
                control={
                  <Switch
                    color="neutral"
                    checked={dateOpen}
                    onChange={() => setDateOpen(!dateOpen)}
                  />
                }
                label="Antidater" />
            </FormGroup>
            {dateOpen && (
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                  disableFuture
                  label="Date"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={values.date}
                  onChange={(newValue) => {
                    setValues(prev => {
                      return { ...prev, date: newValue };
                    });
                  }}
                  renderInput={(params) => <TextField
                    variant="filled" {...params}
                    color="neutral"
                    InputLabelProps={{
                      style: {
                        color: '#fff'
                      }
                    }}
                  />}
                />
              </LocalizationProvider>
            )}

            {/* Loading Button */}
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
          {errorMessage ? 'Certains champs sont invalides ou un problème serveur est survenue.' : (
            <Typography variant="body2">
              Promesse ajoutée avec succès ! <br /> <Link color="secondary" href="/list">Voir les promesses</Link>
            </Typography>
          )}
        </Alert>
      </Snackbar>

    </Box >
  )
}
