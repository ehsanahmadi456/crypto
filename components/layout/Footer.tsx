import React from 'react'
import { GradientTextField, TextSm } from '@/mui/customize'
import EastIcon from '@mui/icons-material/East';
import { InputAdornment } from '@mui/material';

const listPage = ['Company', 'About', 'Careers', 'press', 'News', 'Merch']
const listDetails = [
  'Privacy Policy and Terms of Service',
  'Privacy Policy and Terms of Service',
  'CoinFlip Biometrics Privacy Policy',
  'CoinFlip Financial Privacy Notice',
  'CoinFlip Terms of Service',
  'CoinFlip Trade Desk Terms of Service',
]

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between py-24">
      <div className="flex flex-col justify-center items-center">
        <TextSm className='text-sm mr-auto'>
          CoinFlip, the world’s leading bitcoin ATM operator, makes<br />
          it so flippin’ easy to buy and sell bitcoin via cash, card,<br />
          or bank transfer.
        </TextSm>
        <TextSm className='text-sm mr-auto mt-3'>
          Sign up to get the latest in CoinFlip news, discounts,<br /> and more.
        </TextSm>
        <GradientTextField
          className="mt-8 mb-6 mr-auto !border-[red]"
          placeholder="Email Address"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EastIcon color="secondary" />
              </InputAdornment>
            )
          }}
          sx={{ color: 'red' }} />
        <TextSm className='text-sm mr-auto'>© 2021 GPD Holdings, LLC FinCEN MSB</TextSm>
      </div>
      <ul>
        {
          listPage.map(item =>
            <li key={item}><TextSm>{item}</TextSm></li>
          )
        }
      </ul>
      <ul>
        {
          listDetails.map(item =>
            <li key={item}><TextSm>{item}</TextSm></li>
          )
        }
      </ul>
    </div>
  )
}

export default Footer