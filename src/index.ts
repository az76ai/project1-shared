import { useEnv, useApi } from "@core/lib";

export const project1Specific = () => {
  const env = useEnv();
  console.log("project1 specific , x = ", env.x);
};
