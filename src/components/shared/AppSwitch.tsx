import React, { forwardRef, ForwardedRef, LegacyRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}


const AppSwith = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    id,
    label,
    checked,
    ...rest
  } = props;
  return (
    <div className="inline-flex items-center relative whitespace-nowrap">
      <span className="relative inline-flex items-center">
        <input type="checkbox" id={id} className="sr-only" ref={ref} aria-checked={checked} checked={checked} {...rest} />

        <label
          className={`
            w-16 h-8 block relative 
            cursor-pointer select-none 
            outline-none rounded-[40px] p-1 
            transition
            duration-500
            after:rounded-full after:bg-white
            after:transition
            after:relative after:block
            after:content-[''] after:w-6
            after:h-6
            after:duration-500
            ${checked ? 'after:translate-x-8  bg-black' : 'after:translate-x-0  bg-grey'}
          `}
          htmlFor={id}
        >
        </label>
      </span>
      {
        label ? (
          <label className="cursor-pointer ml-2">
            <span>{label}</span>
          </label>
        ) : null
      }
    </div>
  )
})

export default AppSwith;