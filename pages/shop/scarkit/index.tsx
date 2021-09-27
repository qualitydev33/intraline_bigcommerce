import React, {useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'

import { RatingView } from 'react-simple-star-rating'
import ChevronDown from '@components/icons/ChevronDown'
import { ChevronUp } from '@components/icons'
import ChevronRight from '@components/icons/ChevronRight'
import KeenSliderB from '@components/common/KeenSlider/KeenSliderB'
import FAQCp from '@components/mycp/FAQCp/FAQCp'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'



const RenderFAQCollapse = () => {
    var items = [
      {
        'title': 'How does it work?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'How long do the results last?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'What is the expected recovery time for my patients?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'What are some important safety tips to follow when using this product?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      },
      {
        'title': 'What are the most common side effects?',
        'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
      }
    ]
    return <FAQCp faq_li={items}/>
}

const renderPDOThreads = () => {
    var items = [0, 1, 2]
    return items.map((item, index) => {
        return <div className="flex flex-col pt-9 pb-12_5 bg-white relative hover:bg-opacity-50" 
                    key={'m' + String(index + 1) + '-product'} style={{height: 472}}>
                    <div className="ttcommon_font_bold absolute top-0 right-0 bg-c_52B5D3 text-c_00080D text-lg py-1 px-8">$100.00</div>
                    <div className="flex-1 h-0">
                        <img className="mix_blend_multi mx-auto h-full" src="/assets/img/lifting-1-1.png" alt="" />
                    </div>
                    <div className="ttcommon_font_bold mt-5 uppercase text-center text-color_1 tracking-widest text-2xl">Dimension 360</div>
                    <div className="mt-2 text-sm leading-14_26 text-center">Lorem ipsum doloris sit estimatum estiumen.</div>
                    <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                        <div className="my-auto mx-auto w-10/12">
                            <div className="flex flex-col">
                                <button className=" bg-c_00080D flex items-center justify-center h-11 text-white uppercase tracking-widest">learn more</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
    })
}


export default function ScarKit() {
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col">
            <div className="h-225 relative bg-c_C3E0DC w-full flex flex-col">
                <div className="flex my-auto w-full h-full z-10">
                    <div className="w-6/12 flex flex-col ml-172">
                        <div className="my-auto">
                            <div className="ttcommon_font_thin text-200px leading-200_160">Scar</div>
                            <div className="ttcommon_font_thin text-200px leading-200_160 font-semibold mt-7" ><span className="ttcommon_font_bold">Kit</span></div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Lorem ipsum doloris secantum.</div>
                            <div className="ttcommon_font_thin mt-2 mr-36 text-sm leading-14_26">Dimension 720 has a single premium molded cogged PDO filament. With maximum strenght and hold, ultra thin walls and w-type silicone-coated cannula for ease of insertion, the Dimension 720 PDO Threads are lorem ipsum doloris.</div>
                            <div className="ttcommon_font_bold mt-5 flex items-center">
                                <span>USD $100.00</span>
                                <span className="ml-5">Volume: 1.1ML</span>
                            </div>
                            <div className="mt-5 flex items-center h-12 text-white">
                                <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                    <button className="mx-auto bg-transparent border-none p-1">-</button>
                                    <div className="mx-auto">1</div>
                                    <button className="mx-auto bg-transparent border-none p-1">+</button>
                                </div>
                                <div className="ml-3 bg-c_00080D flex items-center justify-center w-52 h-full uppercase">Add to cart</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-1 flex-col items-end mr-15">
                        <div className="absolute h-full flex flex-col">
                            <div className="bg-white rounded-full my-auto" style={{width: 526, height: 526}}>
                                <img className="mix_blend_multi ml-auto h-full" src="/assets/img/scarkit.png" alt="" />
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 h-11 w-30 bg-c_52B5D3 text-c_00080D flex justify-center items-center">$100.00</div>
                    </div>
                </div>
            </div>


            {/* cart part */}
            <div className="bg-white w-full relative">
                <div className="absolute h-full flex flex-col" style={{left: -17 + '%'}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_F7F7F7 text-200px leading-200_160" style={{transformOrigin: 'center'}}>Scar Kit</div>
                </div>
                <div className="ml-172 mr-15 my-32">
                    <div className="w-full flex items-center">
                        <div className="w-1/2 pr-32">
                            <div className="mt-2 bg-c_CCE7EF pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">Specifics</div>
                                    <div className="ttcommon_font_thin text-sm leading-14_17 tracking-widest mt-2">SELECT A QUESTION TO LEARN MORE.</div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        <div className="ttcommon_font_bold text-4xl leading-36_48">Product Specifics.</div>
                                        <div className="ttcommon_font_thin mt-7_5 text-4xl leading-36_48">How to use the Scar Kit.</div>
                                        <div className="ttcommon_font_thin mt-7_5 text-4xl leading-36_48">Who is it for. </div>
                                        <div className="ttcommon_font_thin mt-7_5 text-4xl leading-36_48">How it works.</div>
                                        <div className="ttcommon_font_thin mt-7_5 text-4xl leading-36_48">Scar Kit FAQ's.</div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="w-1/2">
                            <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_26">Product Specifics.</div>
                            <div className="ttcommon_font_thin mt-5 text-sm leading-14_26">A specially designed single-use GTI Cannula® for precise control through higher density and fibrotic tissue, for the subcision of minor facial surface defects.
The GTI Cannula is a revolutionary new device designed by Dr. Olivier Amar in partnership with Sterimedix, which makes the treatments of small facial and body scars or surface defects safer and easier to perform. The GTI is a smooth cannula with a precision manufactured groove in the tip. The grooved tip was designed to reduce the risk of damage to nerves or important vessels which might otherwise be at risk from a sharp cutting device. The Cannula’s tip gives greater control to the practitioner as it passes through the fibrous tissue aiding the treatment of small scars or defects. The precise design of the grooved tip is to release the surface indentation and allow the lifting of the scar with Intraline Two Dermal Filler. After the subcision, the GTI Cannula can then be used to inject Intraline Two Dermal Filler into the space under the elevated skin.</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className=" bg-c_F5DBDD">
                <div className="mx-172 my-30 flex flex-col">
                    <div className="ttcommon_font_bold text-4xl leading-36_48">How the GTI Cannula works.</div>
                    <div className="mt-5 w-full">
                        <img src="/assets/img/scarkit-works.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Testimonial part */}
            <TestimonialCp
                head_line={"Testimonials."} 
                bg_color={"bg-white"} 
                quote_color={"#C3E0DC"} 
                testimonial_li={[0,1,2,3,4]}/>

            
            
            {/* Download Catalog */}
            <div className="bg-c_C6CBDD">
                <div className="py-28">
                    <div className="flex flex-col mx-auto
                                    w-full md:w-106_5 lg:w-106_5 xl:w-106_5 2xl:w-106_5">
                        <div className="ttcommon_font_bold leading-36_26 text-4xl">Download Our Catalog.</div>
                        <p className="mt-5">Discover Intraline’s Dermal Fillers and PDO Threads. Enter your email to receive our complete product catalog.</p>
                        <div className="mt-10">
                            <input className="h-11 border-none bg-white w-full pl-5 py-2" type="text" placeholder="Your Email Address"/>
                        </div>
                        <div className="mt-10">
                            <button className="ttcommon_font_thin uppercase bg-c_00090D text-white tracking-widest h-11 w-full flex items-center justify-center text-sm">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

ScarKit.Layout = Layout