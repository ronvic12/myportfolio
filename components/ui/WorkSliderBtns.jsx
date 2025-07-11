"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold,PiCaretRightBold } from "react-icons/pi";
const WorkSliderBtns = ({containerstyles,btnstyles,iconStyles}) => {

  const swiper = useSwiper();

  return (
    <div className={containerstyles}>
        <button className={btnstyles} onClick={()=>swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyles}/>
        </button>
        <button className={btnstyles} onClick={()=>swiper.slideNext()}>
            <PiCaretRightBold className={iconStyles}/>
        </button>
    </div>
  )
}

export default WorkSliderBtns