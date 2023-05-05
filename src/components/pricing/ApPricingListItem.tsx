import React from 'react';

import AppIcon from '../shared/AppIcon';
import { Metric } from './types';

type Props = {
  metric?: Metric
  listHeader?: boolean
  className?: string
};

const AppPricingListItem = ({
  metric,
  listHeader,
  className
}: Props) => {
  return (
    <li
      className={`flex flex-col md:flex-row justify-between pb-6 md:pl-6 gap-4 border-b [&:not(:last-of-type)]:mb-6 ${className}`}
    >

      {
        listHeader ?
          (
            <>
              <div className="font-bold text-xs tracking-2px shrink grow text-black max-w-[240px]">The Features</div>
              <ul className="p-0 m-0 hidden list-none md:flex shrink grow gap-[70px] md:gap-0">
                <li className="font-bold text-xs tracking-2px text-black text-center basis-0 md:basis-1/3">Basic</li>
                <li className="font-bold text-xs tracking-2px text-black text-center basis-0 md:basis-1/3">Pro</li>
                <li className="font-bold text-xs tracking-2px text-black text-center basis-0 md:basis-1/3">Business</li>
              </ul>
            </>
          )
          :
          (
            <>
              <div className="font-bold text-xs tracking-2px shrink grow text-black  max-w-[240px]">
                {metric?.type}
              </div>
              <ul className="p-0 m-0 list-none flex items-start gap-[70px] shrink grow md:gap-0">
                <li className="font-bold text-[10px] leading-[13px] tracking-[1.6667px] text-black/30 flex flex-col md:flex-row gap-2 justify-center text-center basis-0 md:basis-1/3">
                  <span className="md:hidden">Basic</span>
                  {metric?.basic && <AppIcon icon="check" width="18px" height="15" />}
                </li>
                <li className="font-bold text-[10px] leading-[13px] tracking-[1.6667px] text-black/30 flex flex-col md:flex-row gap-2 justify-center text-center basis-0 md:basis-1/3">
                  <span className="md:hidden">Pro</span>
                  {metric?.pro && <AppIcon icon="check" width="18px" height="15" />}
                </li>
                <li className="font-bold text-[10px] leading-[13px] tracking-[1.6667px] text-black/30 flex flex-col md:flex-row gap-2 justify-center text-center basis-0 md:basis-1/3">
                  <span className="md:hidden">Business</span>
                  {metric?.business && <AppIcon icon="check" width="18px" height="15" />}
                </li>
              </ul>
            </>
          )
      }
    </li>
  )
}

AppPricingListItem.defaultProps = {
  className: 'border-grey'
}

export default AppPricingListItem;