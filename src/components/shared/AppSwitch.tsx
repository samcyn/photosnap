import React, { forwardRef, ForwardedRef, LegacyRef } from "react";
import { useRadio, RadioButtonProps } from "../../hooks/useRadio";

const AppSwith = forwardRef<React.LegacyRef<HTMLInputElement>, RadioButtonProps>((props, ref) => {
  const {
    radioProps,
    labelProps,
    inputRef,
  } = useRadio<ForwardedRef<LegacyRef<HTMLInputElement>> | undefined>(props, ref);
console.log(radioProps, 444)
  const { label, ...params } = labelProps;
  return (
    <div className="inline-flex items-center relative whitespace-nowrap">
      <span className="relative inline-flex items-center">
        <input {...radioProps} className="sr-only" ref={inputRef as LegacyRef<HTMLInputElement> | undefined} />

        <label
          {...params}
          className={`
            w-16 h-8 block relative 
            cursor-pointer select-none 
            outline-none rounded-[40px] p-1 
            transition
            after:rounded-full after:bg-white
            after:transition
            after:relative after:block
            after:content-[''] after:w-6
            after:h-6
            ${radioProps.checked ? 'after:left-8  bg-black' : 'after:left-0  bg-grey'}
          `}
        >
        </label>
      </span>
      {
        label ? (
          <label className="cursor-pointer ml-2">
            <span>{labelProps.label}</span>
          </label>
        ) : null
      }
    </div>
  )
})

export default AppSwith;