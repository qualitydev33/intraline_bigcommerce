import cn from 'classnames'
import React, { FC, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { CommerceProvider } from '@framework'
import { useUI } from '@components/ui/context'
import type { Page } from '@commerce/types/page'
import { Navbar, Footer } from '@components/common'
import type { Category } from '@commerce/types/site'
import ShippingView from '@components/checkout/ShippingView'
import CartSidebarView from '@components/cart/CartSidebarView'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Sidebar, Modal, LoadingDots } from '@components/ui'
import PaymentMethodView from '@components/checkout/PaymentMethodView'
import CheckoutSidebarView from '@components/checkout/CheckoutSidebarView'


import Button from '@components/mycp/Button'

import LoginView from '@components/auth/LoginView'
import s from './Layout.module.css'
import { ChevronUp } from '@components/icons'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const SignUpView = dynamic(
  () => import('@components/auth/SignUpView'),
  dynamicProps
)

const ForgotPassword = dynamic(
  () => import('@components/auth/ForgotPassword'),
  dynamicProps
)

const FeatureBar = dynamic(
  () => import('@components/common/FeatureBar'),
  dynamicProps
)

interface Props {
  pageProps: {
    pages?: Page[]
    categories: Category[]
  }
}

const ModalView: FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'LOGIN_VIEW' && <LoginView />}
      {modalView === 'SIGNUP_VIEW' && <SignUpView />}
      {modalView === 'FORGOT_VIEW' && <ForgotPassword />}
    </Modal>
  )
}

const ModalUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI()
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null
}

const SidebarView: FC<{ sidebarView: string; closeSidebar(): any }> = ({
  sidebarView,
  closeSidebar,
}) => {
  return (
    <Sidebar onClose={closeSidebar}>
      {sidebarView === 'CART_VIEW' && <CartSidebarView />}
      {sidebarView === 'CHECKOUT_VIEW' && <CheckoutSidebarView />}
      {sidebarView === 'PAYMENT_VIEW' && <PaymentMethodView />}
      {sidebarView === 'SHIPPING_VIEW' && <ShippingView />}
    </Sidebar>
  )
}

const SidebarUI: FC = () => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI()
  return displaySidebar ? (
    <SidebarView sidebarView={sidebarView} closeSidebar={closeSidebar} />
  ) : null
}

const Layout: FC<Props> = ({
  children,
  pageProps: { categories = [], ...pageProps },
}) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { locale = 'en-US' } = useRouter()
  const navBarlinks = categories.slice(0, 2).map((c) => ({
    label: c.name,
    href: `/search/${c.slug}`,
  }))

  const [current_url, setCurrentUrl] = useState('')

  const [enableScrollUpBtn, setEnableScrollUpBtn] = useState(false)
  
  
  useEffect(() => {
    setCurrentUrl(window.location.pathname)
    let scrollHandler = () => {
      let scroll_top = window.scrollY
      if (scroll_top > 0) {
        setEnableScrollUpBtn(true)
      }else {
        setEnableScrollUpBtn(false)
      }
    }
    window.addEventListener('scroll', () => scrollHandler())
    return window.removeEventListener('scroll', scrollHandler)
  })

  return (
    <CommerceProvider locale={locale}>
      <div className={cn(s.root)}>
        {/* <Navbar links={navBarlinks} /> */}
        <Navbar c_name="bg-c_00080D"/>
        <main className="fit">{children}</main>
        <Footer pages={pageProps.pages} />
        <ModalUI />
        <SidebarUI />
        <FeatureBar
          title="Our site uses cookies for a more optimal experience. By continuing to browse the site you are agreeing to our use of cookies. You can view our cookie information here."
          hide={acceptedCookies}
          action={
            <div className="ml-auto flex items-center">
              <button className="text-c_00080D uppercase underline text-sm tracking-widest">Dismiss</button>
              <Button 
                className="ml-7_5 h-11 w-64"
                onClick={() => onAcceptCookies()}>Accept</Button>
            </div>
          }
        />
      </div>
      {enableScrollUpBtn && 
        <Button className="fixed bottom-10 right-10 h-20 w-20" variant="scrollup" onClick={() => {window.scrollTo(0, 0)}}>
          <ChevronUp />
        </Button>
      }
      
    </CommerceProvider>
  )
}

export default Layout
