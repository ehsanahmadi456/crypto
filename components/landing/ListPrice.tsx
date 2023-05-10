import { Fragment, useState } from 'react';

import { PropsHome } from "@/models"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CircularProgress } from "@mui/material";
import { VictoryChart, VictoryLine } from "victory";

const ListPrice = ({ data }: PropsHome) => {
  return (
    <>
      {data.length && data.map((item, idx) =>
        <tr key={item.id} className={`${data.length !== idx + 1 && 'border-b-[1px]'} border-b-[#2B2C3B] border-b-solid px-5`}>
          <td className="font-bold text-xl text-left firstItem">{item.name}</td>
          <td className="text-[#B982FF] font-bold text-xl text-left secondItem">{item.symbol}</td>
          <td className="text-center text-xl font-bold">${item.price && item.price.toFixed(2)}</td>
          <td
            className={`font-bold text-center text-xl ${item.priceChange1d >= 0 ? 'text-[#0DBB7C]' : 'text-[#FF8282]'}`}
          >
            {item.priceChange1d}%
          </td>
          <td className="miniChart w-[16%]">
            <svg className="w-0 h-0">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#18C8FF" />
                  <stop offset="100%" stopColor="#933FFE" />
                </linearGradient>
              </defs>
            </svg>
            <VictoryLine
              data={item.listPrice}
            />
          </td>
          <td>
            <button className="flex justify-end pr-[20%] ml-auto flex-row items-center font-semibold linkTable text-[#FFFFFF]">
              <p>Trade Now</p>
              <ArrowForwardIcon className="ml-1.5 transition-all" />
            </button>
          </td>
        </tr>
      )}
    </>
  )
}

export default ListPrice