import { styled } from '@mui/material/styles';
import { Button, TextField, Typography } from '@mui/material';

const GradientTextField = styled(TextField)({
  width: 304,
  '& .MuiInputBase-input': {
    color: '#565976'
  },
  '& label.Mui-focused': {
    color: '#933FFE',
    borderRadius: '10px'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#933FFE',
    borderWidth: '1px',
    borderRadius: '10px'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#933FFE',
      borderWidth: '1px',
      borderRadius: '10px'
    },
    '&:hover fieldset': {
      borderColor: '#933FFE',
      borderWidth: '1px',
      borderRadius: '10px'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#933FFE',
      borderWidth: '1px',
      borderRadius: '10px'
    },
  },
});

const TextBold = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 900,
  fontSize: 48,
  lineHeight: 1.375,
})

const TextSm = styled(Typography)({
  color: '#898CA9',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.375,
})

const GradientButtonLg = styled(Button)({
  background: 'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%) !important',
  borderRadius: 10,
  paddingTop: 12,
  paddingRight: 24,
  paddingBottom: 12,
  paddingLeft: 24,
  textTransform: 'capitalize',
})

const GradientButtonSm = styled(Button)({
  background: 'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%) !important',
  borderRadius: 10,
  paddingTop: 6,
  paddingRight: 20,
  paddingBottom: 6,
  paddingLeft: 20,
  textTransform: 'capitalize',
})

export { GradientTextField, TextBold, TextSm, GradientButtonLg, GradientButtonSm };