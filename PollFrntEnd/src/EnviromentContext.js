import { useContext, createContext } from "react";

export const EnvironmentContext = createContext();
export const useEnvironmentContext = () => useContext(EnvironmentContext);
