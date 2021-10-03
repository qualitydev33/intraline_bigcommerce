import Link from '@components/ui/Link'
import { FC, useState, useEffect } from 'react'
import Button from '@components/mycp/Button'
import { Cross } from '@components/icons'

import {useAppDispatch, useAppSelector} from '../../../utils/redux/hooks'
import {openSideCart, closeSideCart} from '../../../utils/redux/slices/cartSlice'

interface SideCartProps {
}
type Product = {
    title: string,
    price: number,
    amount: number,
    img: string
}

const SideCart: FC<SideCartProps> = () => {
    const dispatch = useAppDispatch()
    const cart_product_li = useAppSelector(state => state.cart.products) as Array<Product>
    const total_price = useAppSelector(state => state.cart.totalPrice)
    const total_amount = useAppSelector(state => state.cart.totalAmount)
    
    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen bg-c_00080D bg-opacity-40 z-20"></div>
            <div className="ttcommon_font_thin flex flex-col bg-white w-96 fixed right-0 max-h-screen z-20" style={{height: 'calc(100% - 60px)', boxShadow: '0px -10px 40px rgba(0, 0, 0, 0.05)'}}>
                <div className="relative h-full flex flex-col py-12">
                    <div className="px-7 flex flex-col flex-1 h-0">
                        <div className="text-4xl leading-36_26"><span className="ttcommon_font_bold">Shopping Bag</span> ({total_amount})</div>
                        <div className="mt-10 mb-3 flex-1 h-0">
                            <div className="h-full overflow-y-auto">
                                {cart_product_li.map((item, index) => {
                                    return <div className="flex items-center mb-3" key={`cart_item_${index}`}>
                                                <div className="w-24 h-32 px-7 py-5 bg-c_F5DBDD flex flex-col">
                                                    <img className="w-full my-auto" src={item.img} alt="" />
                                                </div>
                                                <div className="flex-1 ml-5">
                                                    <div>Intraline's</div>
                                                    <div className="ttcommon_font_bold">{item.title}</div>
                                                    <div>{item.amount} X <span className="ttcommon_font_bold tracking-widest">${item.price}</span></div>
                                                </div>
                                            </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="h-px w-full bg-gray-500 mt-auto"></div>
                    <div className="px-7 tracking-widest">
                        <div className="mt-7 flex items-center text-sm leading-14_17">
                            <div className="ttcommon_font uppercase">Subtotal:</div>
                            <div className="ttcommon_font_bold ml-auto">${total_price}</div>
                        </div>
                        <div className="mt-7">
                            <Link href="/shop/shoppingbag">
                                <Button className="h-11 w-full text-sm" onClick={() => {dispatch(closeSideCart())}}>View Bag</Button>
                            </Link>
                            <Link href="/shop/checkout">
                                <Button className="mt-2 h-11 w-full text-sm" onClick={() => {dispatch(closeSideCart())}}>Checkout</Button>
                            </Link>
                            
                            {/* <Link href="/shop/shoppingbag">
                                <Button className="mt-2 h-11 w-full text-sm">Edit Bag</Button>
                            </Link> */}
                        </div>
                    </div>
                    <button className="absolute top-6 right-4" onClick={() => {dispatch(closeSideCart())}}>
                        <Cross />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideCart;