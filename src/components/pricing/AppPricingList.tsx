import React from "react";

import { Metric } from "./types";
import AppPricingListItem from "./ApPricingListItem";

type Props = { metrics: Metric[] };

const AppPricingList = ({
  metrics
}: Props) => (
  <ul className="px-0 m-0 list-none max-w-[732px] mx-auto">
    <AppPricingListItem listHeader className="border-black" />
    {
      metrics.map(metric => (
        <AppPricingListItem key={metric.type} metric={metric} />
      ))
    }
  </ul>
);

export default AppPricingList;