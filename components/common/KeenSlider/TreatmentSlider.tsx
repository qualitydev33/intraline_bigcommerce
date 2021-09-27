
import { FC, useState } from "react";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

interface ArrowProps{
    disabled: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


const ArrowNavLeft:FC<ArrowProps> = ({disabled, onClick}) => {
    const disabeld = disabled ? " arrow--disabled" : ""
    return (
        <button onClick={onClick} className={"rounded-full bg-c_00080D w-8 h-8 flex justify-center items-center" + (disabled ? ' bg-opacity-50' : '')}>
          <svg
              className={"arrow arrow--left w-2 h-2"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
          >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </button>
    )
}
  
const ArrowNavRight:FC<ArrowProps> = ({disabled, onClick}) => {
    const disabeld = disabled ? " arrow--disabled" : ""
    return (
        <button onClick={onClick} className={"rounded-full bg-c_00080D w-8 h-8 flex justify-center items-center" + (disabled ? ' bg-opacity-75' : '')} >
        <svg
            className={"arrow arrow--right w-2 h-2"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
        </button>
    )
}

type TreatmentArray = Array<{
    title: string,
    detail: string,
    img: string
}>
interface TreatmentSliderProps {
    treatment_item_li: TreatmentArray,
    leftside_bg: string,
    rightside_bg: string,
    headline: string,
    sub_headline: string
}

const TreatmentSlider:FC<TreatmentSliderProps> = ({treatment_item_li, leftside_bg, rightside_bg, headline, sub_headline}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    
    
    const render_ele_detail = treatment_item_li.map((item, index) => {
        return <div key={`face_${index}`} className="keen-slider__slide">
                    <div className="ttcommon_font_bold text-2xl leading-24_29">0{index + 1}</div>
                    <div className="ttcommon_font_bold text-2xl leading-24_29">{item.title}</div>
                    <div className="ttcommon_font_thin mt-5 text-sm leading-14_26 max-w-xs">{item.detail}</div>
                </div>
    })
    const render_ele_img = treatment_item_li.map((item, index) => {
        return <div key={`face_img_${index}`} className="keen-slider__slide h-full">
                    <img className="w-full h-full" src={item.img} alt="" />
                </div>
    })
    const [facial_img_ref, slider1] = useKeenSlider<HTMLDivElement>({
        slidesPerView: 3,
        spacing: 20,
        loop: true,
        controls: false,
        slideChanged(s) {
            console.log("profile img slide changed")
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    const [facial_detail_ref, slider2] = useKeenSlider<HTMLDivElement>({
        slidesPerView: 1,
        spacing: 20,
        loop: true,
        controls: false,
        slideChanged(s) {
            console.log("facial detail slide changed")
            setCurrentSlide(s.details().relativeSlide)
        }
    })
    
    return <div className="flex h-225 w-full">
                <div className={`w-1/3 flex flex-col px-15 ${leftside_bg}`}>
                    <div className="my-auto">
                        <div className="ttcommon_font_bold text-4xl leading-36_48">{headline}</div>
                        <div className="ttcommon_font_thin text-sm leading-14_26 mt-2">{sub_headline}</div>
                        <div className="mt-24">
                            <div className="relative">
                                <div ref={facial_detail_ref} className="keen-slider flex items-center">
                                    {render_ele_detail}
                                </div>
                            </div>
                        </div>
                        {slider1 && slider2 && (
                            <div className={`flex items-center mt-7`}>
                                <div className="">
                                    <ArrowNavLeft
                                        onClick={(e:any) => {e.stopPropagation(); slider1.prev(); slider2.prev()}}
                                        disabled={currentSlide === 0}
                                    />
                                </div>
                                <div className="ml-7_5">
                                    <ArrowNavRight
                                        onClick={(e:any) => {e.stopPropagation(); slider1.next(); slider2.next()}}
                                        disabled={currentSlide === slider1.details().size - 1}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={`w-2/3 flex flex-col ${rightside_bg}`}>
                    <div className="relative my-auto flex flex-col" style={{height: 568}}>
                        <div ref={facial_img_ref} className="keen-slider h-full">
                            {render_ele_img}
                        </div>
                        {slider1 && slider2 && (
                        <div className="dots mx-auto mt-11">
                            {[...Array(slider1.details().size).keys()].map((idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                        slider1.moveToSlideRelative(idx);
                                        slider2.moveToSlideRelative(idx);
                                        }}
                                        className={"dot" + (currentSlide === idx ? " active" : "") + " w-2_5 h-2_5"}
                                    ></button>
                                )
                            })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

}


export default TreatmentSlider