import { Box, Slide, TextField, Typography, Stack, Tooltip, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';

export default function PromiseDialog({ open, setOpen }) {

  // Handle promise actions
  const [promiseAction, setPromiseAction] = useState(false);
  function handlePromiseAction(promise) {
    setPromiseAction({
      step: 'details',
      promise,
    });
  };

  // Handle API call
  function handleSubmit(event) {
    event.preventDefault();
    setPromiseAction(prev => ({
      ...prev,
      step: 'sent',
    })
    );
    console.log('submit');
  }

  // Handle dialog close
  const handleClose = () => {
    setOpen(false);
    // Set false after 200ms to avoi flashing content
    setTimeout(() => {
      setPromiseAction(false);
    }, 150);
  };

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
            />
          </Box>
        </Slide>
      );
      break;

    case 'sent':
      dialogContent = (
        <Slide in appear direction="right">
          <Typography variant="h6" color={promiseAction.promise === 'resolved' ? 'primary' : 'error'} sx={{ my: 4 }}>
            Promesse {promiseAction.promise === 'resolved' ? 'tenue' : 'rompue'}.
          </Typography>
        </Slide>
      );
      break;

    default:
      dialogContent = (
        <Stack direction="row" justifyContent="center" mt={4} spacing={8}>
          <Tooltip title="Rejeter la promesse">
            <IconButton aria-label="validate" color="error" sx={{ fontSize: '60px' }} onClick={handlePromiseAction}>
              <HighlightOffIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Valider la promesse">
            <IconButton color="primary" aria-label="reject" sx={{ fontSize: '60px' }} onClick={handlePromiseAction}>
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
