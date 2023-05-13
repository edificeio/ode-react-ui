import { useQuery } from "@tanstack/react-query";
import { IGetSession, odeServices } from "ode-ts-client";

/** Custom Hook for ode-ts-client integration */
export default function useSession() {
  return useQuery<IGetSession>({
    queryKey: ["session"],
    queryFn: async () => await odeServices.session().getSession(),
    suspense: true,
  });
}
