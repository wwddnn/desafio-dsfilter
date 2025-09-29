import { createContext } from "react";

// type
export type ContextListType = {
    contextList: number;
    setContextList: (contextList: number) => void;
}

// createContext
export const ContextList = createContext<ContextListType>({
    contextList: 0,
    setContextList: () => {}
});