import { Box, Typography, Paper, Stack, Collapse } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

export default function PromiseCard({ promise }) {
  return (
    <Collapse appear in>
      <Paper sx={{ px: 3, py: 5 }}>
        <Typography variant="h5" color="initial" sx={{ mb: 4 }}>Promesse #1</Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Box>
            <DoneIcon fontSize="large" color="secondary" />
          </Box>
          <Typography variant="body1" color="initial">
            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
          </Typography>
        </Stack>
        <Typography variant="body2" color="initial" sx={{ mb: 1 }}>
          Contexte : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography variant="body2" color="initial">
          <em>Robin Souriau.</em>
        </Typography>
      </Paper>
    </Collapse>
  )
}
