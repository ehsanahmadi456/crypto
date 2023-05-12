import { useState } from "react";
import Head from "next/head";
import { CardsDetails } from "@/models";
import { Box, Card, InputAdornment, CardContent, IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "next/image";
import { GradientTextField, TextBold, GradientButtonLg, TextSm } from "@/mui/customize";
import EastIcon from '@mui/icons-material/East';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ListPrice from "@/components/landing/ListPrice";

function Home({ data }: any) {

  const cards: CardsDetails[] = [
    { id: 1, img: '/../public/images/create.png', title: 'Create', link: 'Get Started' },
    { id: 2, img: '/../public/images/login.png', title: 'Login', link: 'Find an ATM' },
    { id: 3, img: '/../public/images/manage.png', title: 'Manage', link: 'Download the App' },
  ]

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <title>Landing - Crypto</title>
      </Head>
      <div className="header">
        <div className="container mx-auto">
          <Header />
          {/* card */}
          <Box className="card flex flex-wrap flex-row items-center justify-center gap-5 py-28 relative">
            {cards.map((card, idx) =>
              <Card key={card.id} className="flex justify-center w-96 items-start flex-col rounded-card py-8 px-6 bg-[#1A1B23]">
                <Image className="mx-auto" alt="detail" width="80" height="80" src={card.img} />
                {
                  idx === 0 && <>
                    <Image
                      className="absolute starFour"
                      src={require('@/public/images/star4.png')} alt="star" width={54} height={49} />
                    <Image
                      className="absolute starSix"
                      src={require('@/public/images/star6.png')} alt="star" width={74} height={74} />
                  </>
                }
                <CardContent>
                  <Typography className="text-white text-center" variant="h4" fontWeight={800} color="text.secondary">
                    {card.title}
                  </Typography>
                  <TextSm className="text-center mt-4" variant="body1" fontWeight={400} color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
                    Lorem ipsum dolorLorem ipsum dolor
                  </TextSm>
                  <button className="flex justify-center w-full gap-1.5 linkCardLanding transition-all mt-8 text-[#B982FF]">
                    <span className="transition-all">{card.link}</span>
                    <ArrowForwardIcon className="transition-all" />
                  </button>
                </CardContent>
              </Card>
            )}
          </Box>
        </div>
        {/* details */}
        <div className="relative flex flex-col">
          <Image className="absolute top-0 right-0" src={require('@/public/images/bg-circle.png')} alt="bg4" width={600} height={1045} />
          <div className="flex z-10 h-3/4 flex-col w-full justify-center textCrypto">
            <Image className="absolute right-[13%] top-1/4" src={require('@/public/images/star8.png')} alt="star" width={60} height={60} />
            <div className="mx-auto text-center">
              <TextBold>A crypto mining platform that <br /> invest in you</TextBold>
              <TextSm className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempos Lorem ipsum dolor
              </TextSm>
            </div>
            <GradientButtonLg className="mt-8 mx-auto" variant="text">Get Started</GradientButtonLg>
          </div>
          <div className="flex flex-row items-center">
            <Image className="z-[-5] w-1/2" src={require('@/public/images/bg-user.png')} alt="bg3" width={580} height={420} />
            <div className="flex h-3/4 w-1/2 flex-col justify-start z-20">
              <p className="font-black text-5xl">
                24/7 access to full <br /> service customer <br /> support
              </p>
              <TextSm className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                tempos Lorem ipsum dolor sit amet, consectetur</TextSm>
              <GradientButtonLg className="mt-8 w-fit" variant="text" color="primary">Get Started</GradientButtonLg>
            </div>
          </div>
          {/* Table Price */}
          <div className="w-full text-center relative z-10">
            <Image
              className="absolute right-0 top-[-600px] z-[-5]"
              src={require('@/public/images/bg-turquoise.png')} alt="bg" width={590} height={1312} />
            <TextBold>Buy and sell with the lowest <br /> fees in the industry</TextBold>
            <TextSm>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
              tempos Lorem ipsum dolor sit amet</TextSm>
            <div className="flex flex-row items-center mt-9 justify-center linkTable text-[#B982FF]">
              <button className="flex flex-row items-center">
                <p>Learn More</p>
                <ArrowForwardIcon className="ml-1.5 transition-all" />
              </button>
            </div>
            <table className="xl:w-[1180px] w-[90%] h-[448px] z-10 mt-11 mx-auto bg-[#1A1B23] rounded-card">
              <tbody>
                <ListPrice data={data} />
              </tbody>
            </table>
          </div>
          <div className="w-full flex flex-row items-center justify-center relative py-[30vh]">
            <Image
              className="absolute left-[-13%] top-[-40vh] rotate-180 z-[-5]"
              src={require('@/public/images/bg-circle.png')} alt="bg4" width={600} height={1045}
            />
            <div className="flex flex-col justify-start items-center w-1/2">
              <div className="w-fit ml-auto">
                <TextBold className="text-left mr-auto">
                  Take your first step <br />into safe, secure <br />crypto investing
                </TextBold>
                <TextSm className="text-left mr-autom mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                  tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                  eiusmod tempos
                </TextSm>
                <GradientButtonLg className="mt-8 mx-auto mr-auto" variant="text" color="primary" >Get Started</GradientButtonLg>
              </div>
            </div>
            <div className="relative w-1/2">
              <Image src={require('@/public/images/backpack.png')} alt="backpack" />
              <Image className="absolute right-0 top-[-30%]" src={require('@/public/images/bg-gradient.png')} alt="gradient" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <TextBold>Receive transmissions</TextBold>
            <div className="flex justify-center items-center mt-2 mb-8">
              <TextSm>Unsubscribe at any time. </TextSm>
              <TextSm className="text-[#FFFFFF] font-normal ml-1"> Privacy policy↗</TextSm>
            </div>
            <GradientTextField placeholder="Email Address"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EastIcon color="secondary" />
                  </InputAdornment>
                )
              }}
              sx={{ color: 'red' }} />
          </div>
        </div>
        <div className="container mt-28 mx-auto">
          <Footer />
        </div>
      </div>
    </div >
  )
}

export async function getStaticProps() {

  const BASE_URL_PRICE = "https://api.coinstats.app/public/v1/charts?period=1y&coinId=";

  const response = await fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD");

  const responseData = await response.json();

  let coins: any = responseData.coins;

  for (let i = 0; i < responseData.coins.length; i++) {
    const req = await fetch(`${BASE_URL_PRICE}${responseData.coins[i].id}`);
    const response = await req.json();
    coins[i].listPrice = response.chart.map((price: number[]) => {
      return { x: price[0], y: price[1] }
    })
  }

  return {
    props: {
      data: coins
    }
  }
}

export default Home;