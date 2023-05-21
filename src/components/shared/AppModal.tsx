
import React, { ReactNode } from "react";
import { createPortal } from 'react-dom';

interface Props {
  visible?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  defaultValue?: boolean;
  children?: ReactNode
  onClose?: () => void
}

const AppModal = ({
  visible,
  onClose,
  children
}: Props) => {

  const handleClose: React.MouseEventHandler<HTMLDivElement> | undefined = (event) => {
    // click outside logic...
    const nonActive = (event.target as HTMLElement).dataset.nonActive;
    if (nonActive && onClose) {
      onClose();
    }
  };

  if (!visible) {
    return null;
  }
  return createPortal(
    <div
      role="presentation"
      aria-labelledby="ariaLabelledby"
      aria-describedby="ariaDescribedby"
      className="fixed z-[1000] inset-0"
      onClick={handleClose}
    >
      <div
        aria-hidden="true"
        className="fixed inset-0 flex justify-center items-center bg-black/50 transition-opacity"
        data-non-active="true"
      ></div>
      <div
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container absolute opacity-100"
        data-non-active="true"
        tabIndex={-1}
      >
        {children}
      </div >
    </div >
    , document.body)
}

export default AppModal;