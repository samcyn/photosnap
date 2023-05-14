import React, { useState } from 'react';

import AppPricingCard from "./AppPricingCard";
import { useRadioGroup, RadioButtonGroupProps } from '../../hooks/useRadio';
import AppSwith from '../shared/AppSwitch';
import { Plan } from './pricing-types';

type Props = { plans: Plan[] };

interface RadioButtonsGroupProps extends RadioButtonGroupProps {
  plans: Plan[]
  isMonthly: boolean
}

const RadioButtonsGroup = (props: RadioButtonsGroupProps) => {
  const {
    plans,
    isMonthly,
    ...rest
  } = props;

  const {
    Provider,
    providerValue,
  } = useRadioGroup({
    ...rest,
  });

  return (
    <Provider value={providerValue}>
      <div className="flex flex-wrap -my-3 lg:my-0 lg:-mx-15px lg:items-center">
        {
          plans.map(plan => (
            <div key={plan.slug} className="py-3 basis-full lg:py-0 lg:px-15px lg:basis-1/3">
              <AppPricingCard
                name="pricing"
                label={plan.type}
                value={plan.value}
                description={plan.description}
                amount={isMonthly ? plan.monthly_fee : plan.yearly_fee}
                period={isMonthly ? 'per month' : 'per year'}
              />
            </div>
          ))
        }
      </div>
    </Provider>
  );
}

const AppPricingCardGroup = (props: Props) => {
  // form
  const [form, setForm] = useState({
    pricing: 'pro',
    period: 'monthly'
  });

  const onChange: RadioButtonGroupProps['onChange'] = (ev) => {
    if (ev.target.name === 'period') {
      if (form.period === 'monthly') {
        return setForm(prev => ({
          ...prev,
          period: 'yearly',
        }));
      }
      return setForm(prev => ({
        ...prev,
        period: 'monthly',
      }));
    }
    setForm(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  }
  const isMonthly = form.period === 'monthly';

  return (
    <div className="pb-16 md:pb-28 lg:pb-40">
      <div className="flex items-center justify-center gap-8 mb-10 lg:mb-12">
        <p className={`font-bold text-18px leading-25px ${isMonthly ? 'text-black' : 'text-black/25'}`}>Monthly</p>
        <AppSwith
          id='period'
          value="monthly"
          name="period"
          checked={!isMonthly}
          onChange={onChange}
        />
        <p className={`font-bold text-18px leading-25px ${!isMonthly ? 'text-black' : 'text-black/25'}`}>Yearly</p>
      </div>
      <RadioButtonsGroup
        name="pricing"
        value={form.pricing}
        plans={props.plans}
        isMonthly={isMonthly}
        onChange={onChange}
      />
    </div>
  );
}

export default AppPricingCardGroup;

