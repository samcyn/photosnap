import { useContext } from "react"
import { GetInviteContext } from "../Providers/GetInviteContext"

export const useGetInvite = () => {
  const context = useContext(GetInviteContext);

  if(!context) {
    throw new Error(`GetInviteContext is needed in this module:- see provider directory for usage`)
  }
  return context;
}