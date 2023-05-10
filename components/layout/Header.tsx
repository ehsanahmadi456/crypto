import { GradientButtonSm, GradientButtonLg } from "@/mui/customize";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <>
      {/* navbar */}
      <div className="w-full py-5">
        <div className="flex justify-end items-center">
          <Button className="rounded-btn mr-3 py-1.5 px-5" variant="outlined" color="primary">Sign in</Button>
          <GradientButtonSm variant="contained" color="primary">Sign up</GradientButtonSm>
        </div>
      </div>
      {/* header */}
      <div className="w-full flex justify-center items-start flex-col text-center min-h-lg">
        <p className="font-black text-[85px] mx-auto">We make crypto <br /> clear and simple</p>
        <GradientButtonLg className="mt-8 mx-auto" variant="contained" color="primary" >Get Started</GradientButtonLg>
      </div>
    </>
  )
}

export default Header