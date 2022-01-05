import { Button, Typography, Box } from '@mui/material';

export default function PromiseFooter({ status, details, closedDate, onClick }) {
  const humanReadableDate = new Date(closedDate).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <Box sx={{ mr: 10 }}>

      {status === 'pending' ?
        (
          <Button
            variant="contained"
            sx={{ width: 'fit-content', ml: 2 }}
            disableElevation
            onClick={onClick}
          >
            Résoudre la promesse
          </Button>
        )
        :
        (
          <Box >
            <Typography variant="subtitle1" color={status === 'resolved' ? 'primary' : 'error'}>
              Promesse {status === 'resolved' ? 'tenue' : 'rompue'} le {humanReadableDate}.
            </Typography>
            <Typography variant="subtitle1">
              <strong>Détails :</strong> {details || 'N/A'}
            </Typography>
          </Box>
        )}

    </Box>
  )
}
