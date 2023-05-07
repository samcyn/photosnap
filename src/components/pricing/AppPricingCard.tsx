import React, { ReactNode, forwardRef } from "react";

import { useRadio, RadioButtonProps } from "../../hooks/useRadio"

type Props = RadioButtonProps & {
  description: string;
  amount: number;
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
       px-5 relative flex items-center justify-center transition 
      ${radioParams.checked ? "py-12 bg-black text-white" : "pt-14 pb-10 bg-grey text-black"}`}
    >
      {/* show indicator when active */}
      {
        radioParams.checked && (<div className="absolute top-0 w-full left-0 right-0 h-6px" style={indicatorStyles} />)
      }
      <div className="w-full">
        <h6 className="text-inherit text-center mb-[18px] text-[24px] leading-[25px] font-bold">{label}</h6>
        <p className="font-normal text-15px leading-25px text-center text-inherit mix-blend-normal opacity-60 mb-10">
          {description}
        </p>
        <div className="text-center mb-10">
          <p className="font-bold text-40px leading-12 tracking-fourths uppercase text-inherit mb-0">${amount}</p>
          <small className="font-normal text-15px leading-25px text-inherit mix-blend-normal opacity-60">per month</small>
        </div>
        <div className="text-center px-4">
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
  )
});

export default AppPricingCard;