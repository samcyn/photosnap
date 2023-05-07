import { 
  ChangeEvent, 
  DetailedHTMLProps, 
  InputHTMLAttributes, 
  LabelHTMLAttributes, 
  createContext, 
  useContext,
  ReactNode,
  Provider,
  useMemo,
} from 'react';

interface RadioButtonContextProps {
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  value: RadioButtonProps['value'];
  disabled?: boolean;
  name: string;
}

// extend normal radio button
export interface RadioButtonProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> {
  children?: ReactNode;
  label?: string
}

// interface for radio group
export interface RadioButtonGroupProps {
  name: string;
  disabled?: boolean;
  value: RadioButtonProps['value'];
  children: RadioButtonProps['children']
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  label?: string
  required?: boolean,
  ariaLabelledby?: string
}

const RadioGroupContext = createContext<RadioButtonContextProps|null>(null);

export const useRadio = <T>(
  props: RadioButtonProps,
  ref?: T
): {
  children: RadioButtonProps['children']
  radioProps: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  labelProps: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & { label: string | undefined};
  inputRef?: T;
} => {
  const groupContext = useContext(RadioGroupContext);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
    groupContext?.onChange?.(e);
  };

  const computedProps = { ...props };
  if (groupContext) {
    computedProps.name = groupContext.name;
    computedProps.onChange = onChange;
    computedProps.checked = props.value === groupContext.value;
    computedProps['aria-checked'] = props.value === groupContext.value;
    computedProps.disabled = groupContext.disabled || props.disabled;
  }

  const {
    children,
    'aria-labelledby': ariaLabelledBy,
    label,
    id,
    ...rest
  } = computedProps;

  const radioProps = {
    type: 'radio',
    'aria-labelledby': ariaLabelledBy,
    id,
    ...rest
  };

  const labelProps = {
    id: ariaLabelledBy,
    htmlFor: id,
    label
  };

  return {
    radioProps,
    labelProps,
    children,
    inputRef: ref,
  };
};

export const useRadioGroup = (
  props: RadioButtonGroupProps
): {
  labelProps: Pick<RadioButtonGroupProps, 'label'>
  Provider: Provider<RadioButtonContextProps | null>
  providerValue: Omit<RadioButtonGroupProps, 'id'|'children'|'label'|'ariaLabelledby'>
  children: ReactNode
  id?: string
} => {
  const Provider = RadioGroupContext.Provider;

  const onRadioChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(ev);
    }
  };
  const { label, ariaLabelledby, id, children, ...restProps } = props;

  const labelProps = {
    label,
    ariaLabelledby
  };

  const providerValue = useMemo(() => ({
    ...restProps,
    onChange: onRadioChange,
  }), [props.value]);

  return {
    Provider,
    labelProps,
    providerValue,
    children,
    id,
  };
};