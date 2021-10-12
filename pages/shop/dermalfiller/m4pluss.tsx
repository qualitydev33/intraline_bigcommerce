import React, {useEffect, useState} from 'react'

import { Layout } from '@components/common'
import { Navbar } from '@components/common'

import QuoteSvg from '@components/icons/QuoteSvg'

import { RatingView } from 'react-simple-star-rating'
import ChevronDown from '@components/icons/ChevronDown'
import { ChevronUp } from '@components/icons'
import ChevronRight from '@components/icons/ChevronRight'
import KeenSliderB from '@components/mycp/KeenSlider/KeenSliderB'
import FAQCp from '@components/mycp/FAQCp/FAQCp'
import TestimonialCp from '@components/mycp/TestimonialCp/TestimonialCp'
import Button from '@components/mycp/Button'
import { getCookie } from '@utils/cookie'
import Link from '@components/ui/Link'
import SideReview from '@components/mycp/SideReview'

import {useAppDispatch, useAppSelector} from 'utils/redux/hooks'
import {openSideCart, closeSideCart, addProductToCart} from 'utils/redux/slices/cartSlice'
import {openSideReview, closeSideReview} from 'utils/redux/slices/reviewSlice'
import { AddToCartByDom } from '@utils/addToCartByDom'
import router from 'next/router'
import KeenSliderA from '@components/mycp/KeenSlider/KeenSliderA'



export default function M4Plus() {
    let testimonial_li = [
        {
            title: 'DR SIMON ZOKAIE BSC MBCHB MRCP COSMETIC DERMATOLOGIST MEDICAL DIRECTOR - LINIA SKIN CLINIC Intraline KOL',
            detail: 'Intraline one is a great hyaluronic acid filler for tear troughs. It’s versatile enough to be used in the tear trough and has a fantastic longevity. Results are instantaneous and natural.'
        },
        {
            title: 'Claire NewmanIntraline KOL & Brand AmbassadorSOFT TOUCHES AESTHETICS',
            detail: 'I use Intraline one as product of choice for tear troughs in my clinic.  Not all dermal fillers are the same and I find Intraline one a lovely soft product which makes it easy to inject. It gives a lovely natural and refreshed look. Clients are pleased with the results and the longevity of the product.'
        },
        {
            title: "Marissa Freeman (patient)",
            detail: "I've always loved Intraline®️ because they are a luxury quality brand and environmentally friendly. Their products are never animal derived which is hugely important to me. I am all about natural and ethical; and I care about the quality of product I put into my body. Only the best will do and this goes for food, cosmetics and men"
        },
        {
            title: 'Cole Harrison (patient)',
            detail: 'Love the product. Have had my lips done 4 times now using Intraline and once using another product, however prefer Intraline as it’s smoother, no lumps and lasts around 6 months in comparison to other brands only lasting 3 months or so. Love Intraline!'
        },
        {
            title: 'Mica Amos Aesthetics by Mica',
            detail: 'Beautiful product giving just perfect results.'
        },
        {
            title: 'Dr. TuğbaYalçın Director Lumière Aesthetics',
            detail: 'Since 2015 I use Intraline HA fillers in my medical clinic and I am very satisfied with these products. Intraline HA fillers gives very natural results and also long-lasting effects. Intraline is also a very good company with their services for medical doctors. They offer several trainings and I love their professional and accessible contact from abroad.'
        },
        {
            title: 'Dr. Mark Homes KOL INTRALINE MEDICAL AESTHETICS',
            detail: 'I was amazed by the extra lift and tightening they generated compared to the already impressive cutting cog of the Intraline Dimension 360 thread. The patient who was previously treated with 19G Dimension 360 threads 18 months ago could not belevie the dramatic improvement in the result compared to last time. I am excited about using these in my practice!'
        },
    ]
    let mseries_li = [
        {id: 'product_0000-000000-0001', title: 'M2 Plus', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/m2plus.png', detail: "M2 Plus is about modern simplicity and living with intention. Minimally enhance your features so you can create more time and freedom to do the things you love.", link: '/shop/dermalfiller/m2plus'},
        {id: 'product_0000-000000-0002', title: 'M3 Plus', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/m3plus.png', detail: "M3 Plus style embraces a minimal aesthetic, with maximum impact of all the important things. It’s all about minimally enhancing your features for maximum impact.", link: '/shop/dermalfiller/m3plus'},
        {id: 'product_0000-000000-0003', title: 'M4 Plus', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/m4plus.png', detail: "M4 Plus is a style that encourages utilizing your features in the boldest way possible. It welcomes diverse aesthetics. Maximalism is big, bold, and brave.", link: '/shop/dermalfiller/m4plus'},
    ]
    let faq_items = [
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
    let m3plus_info = {id: 'product_0000-000000-0003', title: 'M4 Plus', price: 100, amount: 10, quantity: 0, img: '/assets/img/products/m4plus.png', detail: "M4 Plus is a style that encourages utilizing your features in the boldest way possible. It welcomes diverse aesthetics. Maximalism is big, bold, and brave.", link: '/shop/dermalfiller/m4plus'}
    const [enableSideReview, setEnableSideReview] = useState(false)
    const [logined, setLogined] = useState(false)
    const [numM3Plus, setNumM3Plus] = useState(1)
    
    const dispatch = useAppDispatch()
    const addToBagHandler = () => {
        let product_detail = mseries_li[1]
        product_detail.quantity = numM3Plus
        dispatch(addProductToCart(product_detail))
    }
    const decreaseNumHandler = () => {
        if (numM3Plus > 1) {
            setNumM3Plus(numM3Plus - 1)
        }else {
            setNumM3Plus(1)
        }
    }
    const increaseNumHandler = () => {
        setNumM3Plus(numM3Plus + 1)
    }
    useEffect(() => {
        if (getCookie('jwt', '') != null) {
            setLogined(true)
        }
    }, [])

    const addToCartByDom = new AddToCartByDom(mseries_li)
    const addToBagMseriesHandler = (event:React.MouseEvent<HTMLButtonElement>, index: number) => {
        addToCartByDom.addToBagHandler(event, index)
    }
    const decreaseNumMseriesHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.decreaseNumHandler(event, true, -1)
    
    }
    const increaseNumMseriesHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        addToCartByDom.increaseNumHandler(event, true, -1)
    }

    const loginToPurchaseHandler = () => {
        router.push('/account/login')
    }

    const RenderFAQCollapse = () => {
        return <FAQCp faq_li={faq_items}/>
    }
    

    const RenderMseries = () => {
        return mseries_li.map((item, index) => {
            return <div className="flex flex-col pb-5 bg-white relative hover:bg-opacity-50" 
                        key={`mseires_${index}`}>
                        {logined && <Button className="ttcommon_font_bold h-9 w-30 absolute top-0 right-0 text-lg" variant="primary">${item.price}</Button>}
                        <div className="flex">
                            <img className="mx-auto " src={item.img} alt="" />
                        </div>
                        <div className="mt-5 ttcommon_font_bold uppercase text-center text-color_1 tracking-widest text-2xl">{item.title}</div>
                        <div className="mt-2 px-3 text-base leading-14_26 text-center">{item.detail}</div>
                        <div className="absolute top-0 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                            <div className="my-auto mx-auto w-10/12">
                                <div className="flex flex-col">
                                    <Link href={item.link}>
                                        <Button className="h-11 w-full text-sm">learn more</Button>
                                    </Link>
                                    
                                    {logined && <div className="mt-2 flex items-center h-11 text-white">
                                        <div className="bg-c_00080D flex items-center justify-center w-24 h-full">
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {decreaseNumMseriesHandler(event)}}>-</button>
                                            <div className="mx-auto">1</div>
                                            <button className="mx-auto bg-transparent border-none p-1" onClick={(event) => {increaseNumMseriesHandler(event)}}>+</button>
                                        </div>
                                        <Button className="ml-3 flex-1 h-full text-sm" onClick={(event) => {addToBagMseriesHandler(event, index)}}>Add to bag</Button>
                                    </div>}

                                    {!logined && 
                                        <div className="mt-2 flex items-center h-11 text-white">
                                            <Button className="h-full w-full text-sm" onClick={(event) => {loginToPurchaseHandler()}}>Login in to purchase</Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
        })
    }

    const RenderMseriesSwiper = () => {
        var render_ele = mseries_li.map((item, index) => {
            return <div className="keen-slider__slide relative" key={`category_${index}`}>
                        <div className="flex flex-col bg-white
                                        h-74 md:h-118
                                        pt-2.5 md:pt-5
                                        px-2.5 md:px-5
                                        pb-5 md:pb-12">
                            <div className="flex-1 h-0">
                                <img className="h-full object-contain mx-auto" src={item.img} alt="" />
                            </div>
                            <div className="ttcommon_font_bold uppercase text-center text-color_1 tracking-widest mt-5
                                             h-12 flex items-center justify-center
                                             text-sm md:text-2xl
                                             leading-14_17 md:leading-none">{item.title}</div>
                        </div>
                        <div className="absolute top-0 left-0 bg-c_CCE7EF bg-opacity-70 w-full h-full flex flex-col opacity-0 hover:opacity-100">
                            <div className="my-auto flex flex-col">
                                <Link href={item.link}>
                                    <Button className="my-auto mx-auto h-11 w-10/12 text-sm">Learn more</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
        })
        return <KeenSliderA render_ele={render_ele} slidesPerView={[1.5,1.5,2.5,3.5,3.5]} navCss={"mt-10"}/>
    }

    const ShowEnableSideReview = (bool_var: boolean) => {
        (document.querySelector('body') as HTMLBodyElement).style.overflow = "hidden"
        setEnableSideReview(bool_var)
    }
    const CloseSideReview = (bool_bar:boolean) => {
        setEnableSideReview(bool_bar);
        (document.querySelector('body') as HTMLBodyElement).style.overflow = "auto"
    }
    return(
        <div className="ttcommon_font_thin text-c_00080D flex flex-col
                        mt-16 md:mt-0">
            <div className="h-15 w-full bg-transparent"></div>
            <div className="relative bg-c_CCE7EF w-full flex flex-col pb-15">
                <div className="mt-12_5 items-center uppercase text-sm leading-14_17 tracking-widest
                                hidden md:flex">
                    <div className="flex items-center flex-wrap cursor-pointer
                                    pl-5 md:pl-10 lg:pl-15 xl:pl-15 2xl:pl-15
                                    md:w-100 lg:w-full">
                        <span className="ttcommon_font"><Link href="/">Home</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4" /></span>
                        <span className="ml-1 ttcommon_font">Shop</span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ml-1 ttcommon_font"><Link href="/shop/dermalfiller">MONOPHASIC DERMAL FILLERS</Link></span>
                        <span className="ml-1"><ChevronRight className="w-4"/></span>
                        <span className="ttcommon_font_bold ml-1">M4 Plus</span>
                    </div>
                </div>
                <div className="h-full z-10 flex flex-col">
                    {/* responsive part */}
                    <div className="w-full h-full relative
                                    block md:hidden">
                        <div className="flex flex-col items-end h-full">
                            <div className="mb-auto h-full bg-c_CCE7EF relative flex flex-col w-full">
                                <img className="mix_blend_multi ml-auto h-full" src="/assets/img/SmokeM2.png" alt="" />
                                <div className="w-full h-full flex absolute items-center justify-center">
                                    <div className="relative">
                                        <img className="m-auto" src="/assets/img/m4plus.png" alt="" />
                                        {logined && <Button className="absolute top-2 -right-10 h-9 w-30 ttcommon_font_bold text-lg z-10" variant="primary">$100.00</Button>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-12 left-5 flex items-center uppercase text-sm leading-14_17 tracking-widest">
                            <div className="flex items-center flex-wrap cursor-pointer
                                            w-100">
                                <span className="ttcommon_font"><Link href="/">Home</Link></span>
                                <span className="ml-1"><ChevronRight className="w-4" /></span>
                                <span className="ml-1 ttcommon_font">Shop</span>
                                <span className="ml-1"><ChevronRight className="w-4"/></span>
                                <span className="ml-1 ttcommon_font"><Link href="/shop/dermalfiller">MONOPHASIC DERMAL FILLERS</Link></span>
                                <span className="ml-1"><ChevronRight className="w-4"/></span>
                                <span className="ttcommon_font_bold ml-1">M4 Plus</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex flex-col
                                        w-full md:w-6/12
                                        pr-5 md:pr-0
                                        pl-5 md:pl-10 lg:pl-15 xl:pl-15 2xl:pl-15">
                            <div className="mt-0 md:mt-28">
                                <div className="ttcommon_font_bold text-4xl leading-36_48">The minimalist.</div>
                                <div className="ttcommon_font_thin leading-200_160 font-semibold mt-7
                                                text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-200px" ><span className="ttcommon_font_bold">M4</span> Plus</div>
                                <div className="ttcommon_font mt-5 leading-36_48
                                                text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">Enhancing more of what you love.</div>
                                <div className="ttcommon_font_thin mt-2 text-base leading-14_26
                                                md:mr-5 lg:mr-36">Minimalism is about modern simplicity and living with intention. Minimally enhance your features so you can create more time and freedom to do the things you love. This style sets out to expose the true essence, essentials or identity of individuals.</div>
                                {logined && <div className="ttcommon_font_bold mt-5 flex items-center">
                                    <span>USD $100.00</span>
                                    <span className="ml-5">Volume: 1.1ML</span>
                                </div>}
                                {logined && <div className="mt-5 items-center h-12 text-white
                                                            block md:flex">
                                    <div className="bg-c_00080D flex items-center justify-center h-full
                                                    w-full md:w-24">
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {decreaseNumHandler()}}>-</button>
                                        <div className="mx-auto">{numM3Plus}</div>
                                        <button className="mx-auto bg-transparent border-none p-1" onClick={() => {increaseNumHandler()}}>+</button>
                                    </div>
                                    <Button className="h-full text-sm
                                                    w-full md:w-52
                                                    ml-0 md:ml-3
                                                    mt-2.5 md:mt-0" onClick={() => {addToBagHandler()}}>Add to bag</Button>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-full h-full
                                hidden md:block">
                    <div className="w-6/12 flex flex-col items-end ml-auto h-full">
                        <div className="mb-auto h-full bg-c_CCE7EF relative flex flex-col">
                            <img className="mix_blend_multi ml-auto h-full" src="/assets/img/SmokeM2.png" alt="" />
                            <div className="w-full h-full flex absolute items-center justify-center">
                                <div className="relative">
                                    <img className="m-auto" src="/assets/img/m4plus.png" alt="" />
                                    {logined && <Button className="absolute top-2 -right-10 h-9 w-30 ttcommon_font_bold text-lg z-10" variant="primary">$100.00</Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="bg-c_CCE7EF w-full flex flex-col pb-15">
                <div className="flex items-center justify-center
                                hidden md:block">
                    <span className="ttcommon_font uppercase text-sm tracking-widest">Scroll for more details</span>
                    <ChevronDown className="w-4 ml-4" />
                </div>
            </div>
            

            {/* Indications */}
            <div className="bg-white">
                <div className="flex flex-col mx-auto py-28
                                w-full md:w-162_5
                                px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
                    <div className="ttcommon_font_bold text-center
                                    text-2xl md:text-4xl
                                    leading-none md:leading-36_26">Indications</div>
                    <p className="leading-36_48 mt-6 ttcommon_font_thin text-center
                                text-2xl md:text-4xl">M4 Plus with lidocaine is best suited for treatment of fine to medium wrinkles in the frown lines, cupid’s bow, labial commissure, neck folds and lip definition.</p>
                    <div className="mt-8">
                        <Button className="mx-auto h-11 w-64 text-sm">download indication chart</Button>
                    </div>
                </div>
            </div>

            {/* cart part */}
            <div className="bg-c_C6CBDD w-full relative
                            hidden lg:block">
                <div className="absolute h-full flex flex-col" style={{left: -211}}>
                    <div className="my-auto ttcommon_font_bold transform -rotate-90 text-c_8D97BC text-200px leading-200_160" style={{transformOrigin: 'center'}}>Specs.</div>
                </div>
                <div className="ml-172 mr-15 my-32 relative z-10">
                    <div className="w-full flex items-center">
                        <div className="w-1/2
                                        pr-10 xl:pr-32">
                            <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                                <div className="pb-5">
                                    <div className="ttcommon_font_bold text-6xl leading-64_76">M4 Plus.</div>
                                    <div className="flex items-center" onClick={() => {ShowEnableSideReview(true)}}>
                                        <RatingView ratingValue={3} size={30} className="foo" fillColor="#000" emptyColor="rgba(0, 8, 13, 0.3)" />
                                        <div className="text-sm ">(22)</div>
                                    </div>
                                </div>
                                <div className="pt-7">
                                    <div className="flex flex-col">
                                        <div className="flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Type</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">Monophasic dermal filler.</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">TOTAL HA CONCENTRATION</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">24 MG/ML</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Average gel particle size</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">Small</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Cross linking</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">BODE(1UG/ML)</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Level of injection</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">Upper dermis.</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">PACKAGING</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">1 Syringe & 2 Sterile Needles.</div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex items-start w-full">
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Volume</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">11ML</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="uppercase text-sm leading-14_17">Lidocaine</div>
                                                <div className="ttcommon_font_thin text-sm leading-14_26">3MG/ML</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex items-center h-11 text-white">
                                        <Button className="h-full flex-1 text-sm">Buy m4 plus now</Button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="w-1/2">
                            <div className="ttcommon_font_thin text-4xl leading-36_48">Monophasic dermal filler with lidocaine.For fine to medium wrinkles.Each unit comes with two different needles .</div>
                            <div className="ttcommon_font_bold mt-12_5 text-4xl leading-36_26">Rheology.</div>
                            <div className="ttcommon_font_thin mt-5 text-4xl leading-36_48">Low viscosity.<br />Low complex modulus.<br />Low phase angle.</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* cart part responsive */}
            <div className="bg-c_C6CBDD w-full relative px-5 pb-15
                            block lg:hidden">
                <div className="flex flex-col">
                    <div className="my-auto ttcommon_font_bold text-c_8D97BC text-7xl leading-24_29">Specs.</div>
                </div>
                <div className="">
                    <div className="mt-2 bg-white pt-8 pb-10 px-7 divide-y divide-c_00080D">
                        <div className="pb-5">
                            <div className="ttcommon_font_bold text-6xl leading-64_76">M4 Plus.</div>
                            <div className="flex items-center" onClick={() => {ShowEnableSideReview(true)}}>
                                <RatingView ratingValue={3} size={30} className="foo" fillColor="#000" emptyColor="rgba(0, 8, 13, 0.3)" />
                                <div className="text-sm ">(22)</div>
                            </div>
                        </div>
                        <div className="pt-7">
                            <div className="flex flex-col">
                                <div className="flex items-start w-full">
                                    <div className="w-1/2">
                                        <div className="uppercase text-sm leading-14_17">Type</div>
                                        <div className="ttcommon_font_thin text-sm leading-14_26">Monophasic dermal filler.</div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="uppercase text-sm leading-14_17">TOTAL HA CONCENTRATION</div>
                                        <div className="ttcommon_font_thin text-sm leading-14_26">24 MG/ML</div>
                                    </div>
                                </div>
                                <div className="mt-7 flex items-start w-full">
                                    <div className="w-1/2">
                                        <div className="uppercase text-sm leading-14_17">Average gel particle size</div>
                                        <div className="ttcommon_font_thin text-sm leading-14_26">Small</div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="uppercase text-sm leading-14_17">Cross linking</div>
                                        <div className="ttcommon_font_thin text-sm leading-14_26">BODE(1UG/ML)</div>
                                    </div>
                                </div>
                                <div className="mt-7 flex items-start w-full">
                                    <div className="w-1/2">
                                        <div className="uppercase text-sm leading-14_17">Level of injection</div>
                                        <div className="ttcommon_font_thin text-sm leading-14_26">Upper dermis.</div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="uppercase text-sm leading-14_17">PACKAGING</div>
                                        <div className="ttcommon_font_thin text-sm leading-14_26">1 Syringe & 2 Sterile Needles.</div>
                                    </div>
                                </div>
                                <div className="mt-7 flex items-start w-full">
                                    <div className="w-1/2">
                                        <div className="uppercase text-sm leading-14_17">Volume</div>
                                        <div className="ttcommon_font_thin text-sm leading-14_26">11ML</div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="uppercase text-sm leading-14_17">Lidocaine</div>
                                        <div className="ttcommon_font_thin text-sm leading-14_26">3MG/ML</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex items-center h-11 text-white">
                                <Button className="h-full flex-1 text-sm">Buy m4 plus now</Button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="w-full text-2xl text-center mt-10">
                    <div className="ttcommon_font_thin leading-36_48">Monophasic dermal filler with lidocaine.For fine to medium wrinkles.Each unit comes with two different needles .</div>
                    <div className="ttcommon_font_bold mt-7_5 leading-36_26">Rheology.</div>
                    <div className="ttcommon_font_thin mt-2.5 leading-36_48">Low viscosity.<br />Low complex modulus.<br />Low phase angle.</div>
                </div>
            </div>
            
            
            {/* Reviews part */}
            <TestimonialCp 
                head_line={"Reviews."} 
                bg_color={"bg-white"} 
                quote_color={"#CCE7EF"} 
                testimonial_li={testimonial_li}/>
            
            
            {/* FAQ part */}
            <div className="bg-c_C3E0DC">
                <div className="py-15 sm:py-24
                                mx-5 md:mx-15 lg:mx-172 xl:mx-172 2xl:mx-172">
                    <div className="flex text-c_00080D mb-2">
                        <div className="ttcommon_font_bold text-2xl
                                        block sm:hidden
                                        leading-none sm:leading-36_26 lg:leading-36_26 xl:leading-36_26 2xl:leading-36_26">FAQs.</div>
                        <div className="ttcommon_font_bold text-4xl
                                        hidden sm:block
                                         leading-none sm:leading-36_26 lg:leading-36_26 xl:leading-36_26 2xl:leading-36_26">Frequently Asked Questions.</div>
                        <div className="flex items-center ml-auto">
                            <Link href="/faq">
                                <div className="flex items-center">
                                    <div className="ttcommon_font_bold ml-auto
                                                    text-xs sm:text-lg">Read More</div>
                                    <div className="ml-2">
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {RenderFAQCollapse()}
                </div>
            </div>

            {/* MSeries */}
            <div className="bg-c_F5DBDD">
                <div className="py-24
                                mx-5 md:mx-15 lg:mx-172">
                    <div className="flex text-c_00080D mb-2 items-center">
                        <div className="ttcommon_font_bold
                                        text-2xl md:text-4xl
                                        leading-none md:leading-36_26">The M Series.</div>
                        <div className="flex items-center ml-auto">
                            <div className="ttcommon_font_bold
                                            text-base md:text-lg"><Link href="/shop/dermalfiller/mseries">Learn More</Link></div>
                            <div className="ml-2">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 gap-5 grid-cols-3
                                    hidden md:grid">
                        {RenderMseries()}
                    </div>
                    <div className="block md:hidden">
                        {RenderMseriesSwiper()}
                    </div>
                </div>
            </div>

            {enableSideReview && <SideReview closeSideReview={CloseSideReview} />}
        </div>
    )
}

M4Plus.Layout = Layout