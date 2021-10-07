import React, {FC, useState} from 'react'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'


interface ArrowProps{
    disabled: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
const ArrowLeft:FC<ArrowProps> = ({disabled, onClick}) => {
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
  
const ArrowRight:FC<ArrowProps> = ({disabled, onClick}) => {
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
interface KeenSliderBProps{
    render_ele: JSX.Element[],
    slidesPerView: Array<number>,
    prevNavCss: string,
    nextNavCss: string,
    enableDot: boolean,
    dotCss: string
}
const KeenSliderB: FC<KeenSliderBProps> = ({render_ele, slidesPerView, prevNavCss, nextNavCss, enableDot, dotCss}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [ele_ref, slider] = useKeenSlider<HTMLDivElement>({
      // slidesPerView: slidesPerView,
      spacing: 20,
      loop: true,
      mode: 'snap',
      resetSlide: true,
      breakpoints: {
        '(max-width: 600px)': {
          slidesPerView: slidesPerView[0]
        },
        '(min-width: 600px) and (max-width: 960px)': {
          slidesPerView: slidesPerView[1]
        },
        '(min-width: 960px) and (max-width: 1264px)': {
          slidesPerView: slidesPerView[2]
        },
        '(min-width: 1264px) and (max-width: 1904px)': {
          slidesPerView: slidesPerView[3]
        },
        '(min-width: 1904px)': {
          slidesPerView: slidesPerView[4]
        },
      },
      slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide)
      }
    })
      return <>
              <div className="relative z-10">
                <div ref={ele_ref} className="keen-slider">
                  {render_ele}
                </div>
                {slider && (
                  <div className={``}>
                    <div className={`absolute bottom-0 left-0 flex flex-col h-full`}>
                      <div className={`${prevNavCss}`}>
                        <ArrowLeft
                          onClick={(e:any) => e.stopPropagation() || slider.prev()}
                          disabled={currentSlide === 0}
                        />
                      </div>
                    </div>
                    <div className={`absolute top-0 right-0 flex flex-col h-full`}>
                      <div className={`${nextNavCss}`}>
                        <ArrowRight
                          onClick={(e:any) => e.stopPropagation() || slider.next()}
                          disabled={currentSlide === slider.details().size - 1}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {slider && enableDot && (
                    <div className={`dots mx-auto ${dotCss}`}>
                    {[...Array(slider.details().size).keys()].map((idx) => {
                        return (
                        <button
                            key={idx}
                            onClick={() => {
                            slider.moveToSlideRelative(idx)
                            }}
                            className={"dot" + (currentSlide === idx ? " active" : "") + " w-2_5 h-2_5"}
                        ></button>
                        )
                    })}
                    </div>
                )}
              </div>
            </>
  }

export default KeenSliderB