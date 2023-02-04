import Head from "next/head";
import Landing from "@/components/landing/Landing";
import { CardsDetails } from "@/models";

function Home() {

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
      <Landing cards={cards} />
    </div>
  )
}

export default Home;