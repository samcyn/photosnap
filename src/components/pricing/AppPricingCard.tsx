import React, { ReactNode, forwardRef } from "react";

import { useRadio, RadioButtonProps } from "../../hooks/useRadio"

type Props = RadioButtonProps & {
  description: string;
  amount: number | string;
}

const indicatorStyles = {
  background: 'linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)'
}

const AppPricingCard = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    description,
    amount,
    ...rest
  } = props;

  const {
    radioProps,
    labelProps,
    inputRef,
  } = useRadio({ ...rest }, ref);

  const { label, ...params } = labelProps;

  const {
    value,
    onChange,
    ...radioParams
  } = radioProps;


  return (
    <div className={`
       px-5 md:px-10 relative flex items-center justify-center transition 
      ${radioParams.checked ?
        "py-12 md:py-10 lg:pt-[88px] lg:pb-18 bg-black text-white"
        : "pt-14 pb-10 md:py-10 lg:pt-14 bg-grey-light text-black"}`}
    >
      {/* show indicator when active */}
      {
        radioParams.checked && (
          <div 
            className="absolute w-full md:w-6px lg:w-full h-6px md:h-full 
              lg:h-6px top-0 left-0 right-0 md:right-auto lg:right-0 md:bottom-0 lg:bottom-auto" 
            style={indicatorStyles} 
          />
          )
      }
      <div className="w-full">
        <div className="flex flex-col flex-wrap md:flex-row md:items-start">
          <div className="basis-full md:basis-1/2 lg:basis-full text-center md:text-left lg:text-center">
            <h6 className="text-inherit mb-[18px] text-[24px] leading-[25px] font-bold">{label}</h6>
            <p className="font-normal text-15px leading-25px text-inherit mix-blend-normal opacity-60 mb-10 md:mb-8 lg:mb-10">
              {description}
            </p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-full text-center md:text-right lg:text-center mb-10 md:mb-8 lg:mb-10">
            <p className="font-bold text-40px leading-12 tracking-fourths uppercase text-inherit mb-0">${amount}</p>
            <small className="font-normal text-15px leading-25px text-inherit mix-blend-normal opacity-60">per month</small>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-full text-center px-4 md:px-0">
            <label
              className={`
              block rounded-none transition items-center 
              font-bold text-xs tracking-2px px-6 py-3
              w-full text-center uppercase ${radioParams.checked ? 'bg-white text-black' : 'bg-black text-white'}
              `}
              {...params}
            >
              Pick Plan
              <input
                className="sr-only"
                value={value}
                onChange={onChange}
                {...radioParams}
                ref={inputRef}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
});

export default AppPricingCard;