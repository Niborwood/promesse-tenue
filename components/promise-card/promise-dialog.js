import { Box, Slide, TextField, Typography, Stack, Tooltip, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Divider } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useState } from 'react';
import { useSWRConfig } from 'swr';
import patchPromise from '../../helpers/mutaters/patch-promise';

export default function PromiseDialog({ _id, open, setOpen, promises }) {
  const { mutate } = useSWRConfig();

  // Handle promise actions
  const initialPromiseActionState = { _id, details: '' };
  const [promiseAction, setPromiseAction] = useState(initialPromiseActionState);
  function handlePromiseAction(promise) {
    setPromiseAction(prev => ({
      ...prev,
      step: 'details',
      promise,
    })
    );
  };

  // Handle dialog close
  const handleClose = () => {
    setOpen(false);
    // Set false after 200ms to avoi flashing content
    setTimeout(() => {
      setPromiseAction(initialPromiseActionState);
    }, 150);
  };

  // Handle API call
  async function handleSubmit(event) {
    event.preventDefault();

    // Patch data on API and mutate
    await mutate('/api/promises', patchPromise({
      status: promiseAction.promise,
      details: promiseAction.details,
    }, _id, promises));

    setPromiseAction(prev => ({
      ...prev,
      step: 'sent',
    })
    );
  }

  // Display dialog content
  let dialogContent;
  switch (promiseAction.step) {
    case 'details':
      dialogContent = (
        <Slide in direction="right">
          <Box my={4}>

            <TextField
              autoFocus
              variant="standard"
              margin="dense"
              id="reason"
              color="primary"
              label="Détails"
              type="text"
              fullWidth
              multiline
              rows={3}
              value={promiseAction.details}
              onChange={event => setPromiseAction(prev => ({
                ...prev,
                details: event.target.value,
              }))}
            />
          </Box>
        </Slide>
      );
      break;

    case 'sent':
      dialogContent = (
        <Slide in appear direction="right">

          <Typography variant="h6" color={promiseAction.promise === 'resolved' ? 'primary' : 'error'} sx={{ my: 1 }}>
            Promesse {promiseAction.promise === 'resolved' ? 'tenue' : 'rompue'}.
          </Typography>
        </Slide>
      );
      break;

    default:
      dialogContent = (
        <Stack direction="row" justifyContent="center" mt={4} spacing={8}>
          <Tooltip title="Rejeter la promesse">
            <IconButton aria-label="validate" color="error" sx={{ fontSize: '60px' }} onClick={
              () => { handlePromiseAction('rejected') }
            }>
              <HighlightOffIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Valider la promesse">
            <IconButton color="primary" aria-label="reject" sx={{ fontSize: '60px' }} onClick={
              () => { handlePromiseAction('resolved') }
            }>
              <TaskAltIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Stack>
      );
      break;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Résoudre la promesse
      </DialogTitle>

      <Divider />

      <DialogContent>

        <DialogContentText id="alert-dialog-description" variant="body2">
          {promiseAction.step === 'sent' ? 'Modification confirmée.' : 'Une fois la promesse tenue ou rompue, elle ne peut plus être modifiée.'}

        </DialogContentText>
        {dialogContent}

      </DialogContent >
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose}>
          {promiseAction.step === 'sent' ? 'Fermer' : 'Annuler'}
        </Button>

        {promiseAction.step === 'details' && (
          <Slide in={promiseAction.step === 'details'} direction="left">
            <Button
              onClick={handleSubmit}
              color="primary"
              variant="contained"
              autoFocus
              disableElevation
            >
              Valider
            </Button>
          </Slide>
        )}

      </DialogActions>
    </Dialog >
  )
}
