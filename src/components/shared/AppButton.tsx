import React, { ButtonHTMLAttributes, ReactNode, useMemo } from "react";

const AppIcon = () => (<div>12</div>);

// define components models
interface Props extends ButtonHTMLAttributes<Element> {
  variant?: 'contained' | 'text' | 'outlined';
  buttonType?: 'primary' | 'secondary' | 'default';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const AppButton = ({
  variant,
  buttonType,
  children,
  className: cls,
  startIcon,
  endIcon,
  ...rest
}: Props) => {

  // compute classes base on variant type
  const classComputed = useMemo(() => {
    let className = 'rounded-none transition inline-flex gap-4 items-center font-bold text-xs text-center tracking-2px px-6 py-3 ';
    if (variant === 'contained') {
      if (buttonType === 'primary') {
        className += 'bg-black text-white hover:bg-grey hover:text-black';
      } else if (buttonType === 'secondary') {
        className += 'bg-orange text-white hover:bg-grey hover:text-black';
      } else {
        className += 'bg-grey text-black hover:bg-grey-90';
      }
    }
    if (variant === 'outlined') {
      if (buttonType === 'primary') {
        className +=
          'bg-transparent hover:bg-black ring ring-black ring-inset text-black hover:text-white';
      } else if (buttonType === 'secondary') {
        className +=
          'bg-transparent hover:bg-orange ring ring-orange ring-inset text-orange hover:text-black';
      } else {
        className +=
          'bg-transparent hover:bg-grey ring ring-grey ring-inset text-black hover:text-black';
      }
    }
    if (variant === 'text') {
      className += 'hover:underline outline-none ';
      if (buttonType === 'primary') {
        className +=
          'border-0 bg-none text-black';
      } else if (buttonType === 'secondary') {
        className +=
          'border-0 bg-none text-orange';
      } else {
        className +=
          'border-0 bg-none text-grey';
      }
    }
    return `${className} ${cls || ''}`;
  }, [variant, buttonType, cls]);

  return (
    <button className={classComputed} {...rest}>
      { startIcon ? (<span>{startIcon}</span>) : null }
      {children}
      { endIcon ? (<span>{endIcon}</span>) : null }
    </button>
  );
};

AppButton.defaultProps = {
  buttonType: 'primary',
  variant: 'contained',
  className: 'uppercase',
}

export default AppButton;


