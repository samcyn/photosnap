import React from "react";

import { Metric } from "./pricing-types";
import AppPricingListItem from "./ApPricingListItem";

type Props = { metrics: Metric[] };

const AppPricingList = ({
  metrics
}: Props) => (
  <div>
    <h3
      className="hidden md:block text-center uppercase font-bold tracking-fourths text-40px leading-12 text-black mb-16 lg:mb-14"
    >
      Compare
    </h3>
    <ul className="px-0 m-0 list-none max-w-[732px] mx-auto">
      <AppPricingListItem listHeader className="border-black" />
      {
        metrics.map(metric => (
          <AppPricingListItem key={metric.type} metric={metric} />
        ))
      }
    </ul>
  </div>

);

export default AppPricingList;