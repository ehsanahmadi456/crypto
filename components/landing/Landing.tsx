import { ListPropsLanding } from "@/models";
import { Button, Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "next/image";

const Landing = ({ cards }: ListPropsLanding) => {
  return (
    <div className="header">
      <div className="container mx-auto">
        {/* navbar */}
        <div className="w-full py-5">
          <div className="flex justify-end items-center">
            <Button className="rounded-btn mr-3 py-1.5 px-5" variant="outlined" color="primary">Sign in</Button>
            <Button
              className="rounded-btn py-1.5 px-5 bg-gradient-to-tr from-[#933FFE] to-[#18C8FF]" variant="contained" color="primary"
            >Sign up</Button>
          </div>
        </div>
        {/* header */}
        <div className="w-full flex justify-center items-start flex-col text-center min-h-lg">
          <p className="font-black text-[85px] mx-auto">We make crypto <br /> clear and simple</p>
          <Button
            className="rounded-btn py-3 px-6 bg-gradient-to-tr mt-8 from-[#933FFE] to-[#18C8FF] mx-auto"
            variant="contained" color="primary"
          >Get Started</Button>
        </div>
        {/* card */}
        <Box className="card flex flex-row items-center justify-center gap-5 py-28">
          {cards.map(card =>
            <Card className="flex justify-center items-start flex-col rounded-card py-8 px-6 bg-[#1A1B23]">
              <Image className="mx-auto" alt="card" width="80" height="80" src={card.img} />
              <CardContent>
                <Typography className="text-white text-center" variant="h4" fontWeight={800} color="text.secondary">
                  {card.title}
                </Typography>
                <Typography className="text-[#898CA9] text-center mt-4" variant="body1" fontWeight={400} color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
                  Lorem ipsum dolorLorem ipsum dolor
                </Typography>
                <button className="flex justify-center w-full gap-1.5 linkCardLanding transition-all mt-8 text-[#B982FF]">
                  <span className="transition-all">{card.link}</span>
                  <ArrowForwardIcon className="transition-all" />
                </button>
              </CardContent>
            </Card>
          )}
        </Box>
      </div>
    </div>
  )
}

export default Landing