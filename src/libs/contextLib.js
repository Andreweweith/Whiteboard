/* Created and written by Andrew Weith */
/* Written using code available in the tutorial from https://serverless-stack.com/ */

import { useContext, createContext } from 'react';

export const AppContext = createContext(null);

export function useAppContext() {
    return useContext(AppContext);
}