import React from "react";

import GetInviteProvider from './src/Providers/GetInviteContext';
import './src/assets/styles/global.css';



export const wrapRootElement = ({ element }) => (
  <GetInviteProvider>{element}</GetInviteProvider>
)