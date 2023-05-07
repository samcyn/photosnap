import React, { useContext, forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import MetaFormItem from "@components/MetaFormItem";

const RadioGroupContext = React.createContext(null);


const MetaRadio = forwardRef((props, ref) => {
  const groupContext = useContext(RadioGroupContext);

  const onChange = (e) => {
    props.onChange?.(e);
    groupContext?.onChange?.(e);
  };

  const { children, hasError, ...restProps } = props;

  const radioProps = { ...restProps };
  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === groupContext.value;
    radioProps.disabled = groupContext.disabled || props.disabled;
    radioProps.inverted = groupContext.inverted || props.inverted;
    radioProps.theme = groupContext.theme || props.theme;
    radioProps.direction = groupContext.direction || props.direction;
  }

  const { theme, inverted, direction, checked, disabled } = radioProps;
  let textColor = '';
  let borderColor = '';
  let backgroundColor = '';
  switch (theme) {
    case "blue-bg":
      textColor = 'text-white';
      borderColor = inverted ? 'border-mgreen' : 'border-white';
      backgroundColor = inverted ? 'bg-mgreen' : 'bg-white';
      break
    case "white-bg":
      textColor = "text-dblue";
      borderColor = inverted ? 'border-mgreen' : 'border-dblue';
      backgroundColor = inverted ? 'bg-mgreen' : 'bg-dblue';
      break
    default:
      textColor = "text-dblue";
      borderColor = inverted ? 'border-mgreen' : 'border-dblue';
      backgroundColor = inverted ? 'bg-mgreen' : 'bg-dblue';
  }

  const borderCheckedClass = checked ? borderColor : 'border-[#AAAAAA]';
  const ballCheckedBackgroundClass = checked ? backgroundColor : 'bg-transparent';
  const directionClass = direction === 'column' ? 'mb-6 last-of-type:mb-0' : 'mr-7.5 last-of-type:mr-0';
  const disabledClass = disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer';
  return (
    <label
      className={`inline-flex flex-wrap relative items-center ${disabledClass} text-sm ${textColor} transition-all ease-linear duration-75 ${directionClass}`}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <input
        type="radio"
        className={`invisible opacity-0 absolute ${disabledClass}`}
        ref={ref}
        {...radioProps}
      />
      <span className={`inline-flex w-5 h-5 border-2 ${borderCheckedClass} border-solid rounded-full items-center justify-center ${disabledClass}`}>
        <span
          className={`inline-block w-2.5 h-2.5 rounded-full ${ballCheckedBackgroundClass}`}
        >
        </span>
      </span>
      {children !== undefined ? <span className="ml-3">{children}</span> : null}
    </label>
  );
});

const MetaRadioGroup = forwardRef((props, ref) => {

  const onRadioChange = (ev) => {
    if (props.onChange) {
      props.onChange(ev);
    }
  };

  const renderGroup = () => {
    const {
      options,
      disabled,
      children,
      id,
      onMouseEnter,
      onMouseLeave,
    } = props;
    let childrenToRender = children;

    if (options && options.length > 0) {
      childrenToRender = options.map(option => {
        if (typeof option === 'string' || typeof option === 'number') {
          return (
            <MetaRadio
              key={option.toString()}
              disabled={disabled}
              value={option}
              checked={props.value === option}
            >
              {option}
            </MetaRadio>
          );
        }
        return (
          <MetaRadio
            key={`radio-group-value-options-${option.value}`}
            disabled={option.disabled || disabled}
            value={option.value}
            checked={props.value === option.value}
          >
            {option.label}
          </MetaRadio>
        );
      });
    }


    return (
      <div
        className={`flex pt-2.5 ${props.direction === 'column' ? 'flex-col' : 'flex-row'}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        id={id}
        ref={ref}
      >
        {childrenToRender}
      </div>
    );
  };

  return (
    <RadioGroupContext.Provider
      value={{
        onChange: onRadioChange,
        value: props.value,
        disabled: props.disabled,
        name: props.name,
        theme: props.theme,
        direction: props.direction,
        inverted: props.inverted,
        optionType: props.optionType,
      }}
    >
      <MetaFormItem {...props}>
        {renderGroup()}
      </MetaFormItem>
    </RadioGroupContext.Provider>
  );
});

MetaRadioGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  value: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column']),
  theme: PropTypes.oneOf(['blue-bg', 'white-bg', 'gray-bg']),
  message: PropTypes.string,
};

MetaRadio.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  value: PropTypes.string,
  theme: PropTypes.oneOf(['blue-bg', 'white-bg', 'gray-bg']),
};

MetaRadio.defaultProps = {
  hasError: false,
  checked: false,
  theme: 'blue-bg',
};

MetaRadio.Group = memo(MetaRadioGroup);

export default MetaRadio;