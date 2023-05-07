import React, { useState } from 'react';

import AppPricingCard from "./AppPricingCard";
import { useRadioGroup, RadioButtonGroupProps } from '../../hooks/useRadio';


const RadioButtonsGroup = (props: RadioButtonGroupProps) => {
  const {
    Provider,
    providerValue,
  } = useRadioGroup(props);

  return (
    <Provider value={providerValue}>
      <div className="flex flex-wrap -my-3">
        <div className="py-3 basis-full">
          <AppPricingCard
            name="pricing"
            label="Basic"
            value="basic"
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            amount={19.00}
          />
        </div>
        <div className="py-3 basis-full">
          <AppPricingCard
            name="pricing"
            label="Pro"
            value="pro"
            description="More advanced features available. Recommended for photography veterans and professionals."
            amount={32.00}
          />
        </div>
        <div className="py-3 basis-full">
          <AppPricingCard
            name="pricing"
            label="Business"
            value="business"
            description="Additional features available such as more detailed metrics. Recommended for business owners."
            amount={99.00}
          />
        </div>
      </div>
    </Provider>
  );
}
const AppPricingCardGroup = () => {
  const [value, setValue] = useState('pro');

  const onChange: RadioButtonGroupProps['onChange'] = (ev) => {
    const newValue = ev.target.value;
    setValue(newValue);
  }
  return (
    <div className="pt-10 pb-16">
      <RadioButtonsGroup
        name="pricing"
        value={value}
        children={null}
        onChange={onChange}
      />
    </div>
  );
}

export default AppPricingCardGroup;

