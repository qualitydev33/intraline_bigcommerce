const CartSvg = ({ ...props }) => {
    return (
        <svg 
            width="22" 
            height="27" 
            viewBox="0 0 22 27" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path 
                d="M0.5 8C0.5 6.61929 1.61929 5.5 3 5.5H14C15.3807 5.5 16.5 6.61929 16.5 8V19C16.5 20.3807 15.3807 21.5 14 21.5H3C1.61929 21.5 0.5 20.3807 0.5 19V8Z" 
                stroke="white"/>
            <circle 
                cx="14.5" 
                cy="19.5" 
                r="7.5" 
                fill="#52B5D3"/>
            <path 
                d="M15.3047 22H14.0977V18.6953L14.1094 18.1523L14.1289 17.5586C13.9284 17.7591 13.7891 17.8906 13.7109 17.9531L13.0547 18.4805L12.4727 17.7539L14.3125 16.2891H15.3047V22Z" 
                fill="white"/>
            <path 
                d="M3.5 8.5C3.5 8.77614 3.72386 9 4 9C4.27614 9 4.5 8.77614 4.5 8.5H3.5ZM12.5 8.5C12.5 8.77614 12.7239 9 13 9C13.2761 9 13.5 8.77614 13.5 8.5H12.5ZM4.5 8.5V5.5H3.5V8.5H4.5ZM12.5 5.5V8.5H13.5V5.5H12.5ZM8.5 1.5C10.7091 1.5 12.5 3.29086 12.5 5.5H13.5C13.5 2.73858 11.2614 0.5 8.5 0.5V1.5ZM8.5 0.5C5.73858 0.5 3.5 2.73858 3.5 5.5H4.5C4.5 3.29086 6.29086 1.5 8.5 1.5V0.5Z" 
                fill="white"/>
        </svg>
    )
  }
  
  export default CartSvg
  