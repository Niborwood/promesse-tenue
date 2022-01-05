import { Typography, Slide } from '@mui/material';
import propTypes from 'prop-types';

export default function PageTitle({ title, variant }) {
  return (
    <Slide in appear direction="right">
      <Typography variant={variant} color="white">
        {title}
      </Typography>
    </Slide>
  )
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
  variant: propTypes.string,
}

PageTitle.defaultProps = {
  variant: 'h3',
}