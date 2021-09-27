import { Layout } from "@components/common";
import TreatmentSlider from "@components/common/KeenSlider/TreatmentSlider";
import TestimonialCp from "@components/mycp/TestimonialCp/TestimonialCp";



export default function Treatments() {
    const facial_treatment_li = [
        {
            title: 'Lips.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_1.png',
        },
        {
            title: 'Lips.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_2.png',
        },
        {
            title: 'Lips.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_3.png',
        },
        {
            title: 'Lips.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_1.png',
        },
        {
            title: 'Lips.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_face_2.png',
        }
    ]
    const body_treatment_li = [
        {
            title: 'ARMS & ELBOWS.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_1.png',
        },
        {
            title: 'ARMS & ELBOWS.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_2.png',
        },
        {
            title: 'ARMS & ELBOWS.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_3.png',
        },
        {
            title: 'ARMS & ELBOWS.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_1.png',
        },
        {
            title: 'ARMS & ELBOWS.',
            detail: 'Your practitioner can utilize a variety of techniques with Intraline One, M3 Plus or M4 Plus Dermal Filler in order to achieve your desired outcome.',
            img: '/assets/img/treatment_body_2.png',
        }
    ]
    const render_ele = facial_treatment_li.map((item, index) => {
        return <div key={`face_${index}`} className="keen-slider__slide">
                    <div className="ttcommon_font_bold text-4xl leading-36_48">0{index + 1}</div>
                    <div className="ttcommon_font_bold text-4xl leading-36_48">{item.title}</div>
                    <div className="ttcommon_font_thin mt-5 text-sm leading-14_26 max-w-xs">{item.detail}</div>
                </div>
    })
    return <div className="ttcommon_font flex flex-col">
                <TreatmentSlider 
                    headline={"Facial Treatments."}
                    sub_headline={"The choice is yours. Find the perfect treatment for you."}
                    treatment_item_li={facial_treatment_li}
                    leftside_bg={"bg-c_F5DBDD"}
                    rightside_bg={"bg-white"}/>
                <TreatmentSlider 
                    headline={"Body Treatments."}
                    sub_headline={"The choice is yours. Find the perfect treatment for you."}
                    treatment_item_li={body_treatment_li}
                    leftside_bg={"bg-c_white"}
                    rightside_bg={"bg-c_CCE7EF"}/>
                {/* Reviews part */}
                <TestimonialCp 
                    head_line={"Testimonials."} 
                    bg_color={"bg-c_C3E0DC"} 
                    quote_color={"#87C1B9"} 
                    testimonial_li={[0,1,2,3,4]}/>
            </div>
}

Treatments.Layout = Layout