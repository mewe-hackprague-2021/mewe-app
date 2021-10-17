import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const FancySlider = styled(Slider)(({ theme }) => ({
  color: '#A20092'
}));

const FancyButton = styled(Button)(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: '#A20092',
    boxShadow: 'none',
    fontFamily: 'Roboto Slab',
    textTransform: 'none',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#7A006E',
    },
}));

const FancySecondaryButton = styled(Button)(({ theme }) => ({
    color: '#212529',
    backgroundColor: '#E8EDF1',
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#E8EDF1',
    },
}));

export { FancyButton, FancySecondaryButton, FancySlider };
