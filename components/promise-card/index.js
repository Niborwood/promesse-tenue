import { Typography, Paper, Collapse, Divider } from '@mui/material';
import PromiseMain from './promise-main';
import PromiseFooter from './promise-footer';
import PromiseDialog from './promise-dialog';

import { useState } from 'react';

export default function PromiseCard({ promise, promises, setPromises }) {
  // Handle dialog state & open handler
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Collapse appear in>
      <Paper sx={{ px: 3, py: 5 }} id={promise._id}>

        {/* Title */}
        <Typography variant="h5" color="initial" sx={{ mb: 4 }}>Promesse #{promise.promiseId}</Typography>

        {/* Main */}
        <PromiseMain
          status={promise.status}
          promise={promise.promise}
          date={promise.date}
        />

        {/* Context + Person */}
        <Typography variant="body2" color="initial" sx={{ mb: 1 }}>
          <strong>Contexte :</strong> {promise.context}
        </Typography>
        <Typography variant="body2" color="initial" sx={{ mb: 2 }}>
          <em>{promise.person}.</em>
        </Typography>

        <Divider variant="middle" sx={{ mb: 2 }} />

        {/* Details + validation */}
        <PromiseFooter
          status={promise.status}
          details={promise.details}
          closedDate={promise.closedDate}
          onClick={handleClickOpen}
        />
      </Paper>

      {/* Dialog */}
      <PromiseDialog
        _id={promise._id}
        open={open}
        setOpen={setOpen}
        promises={promises}
      />

    </Collapse >
  )
}
