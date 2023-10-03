import { StateCreator } from 'zustand';
import CounterAPI from '@/lib/api/counter';

const counterApi = new CounterAPI();

export interface CounterSlice {
  count: number;
  setCounter: (count: number) => void;
  increment: () => void;
  decrement: () => void;
}

export const createCounterSlice: StateCreator<CounterSlice> = (set, get) => {
  return {
    count: 0,
    setCounter: (count) => {
      set({ count });
    },
    increment: () => {
      counterApi.increment();
      set({ count: get().count + 1 });
    },
    decrement: () => {
      set({ count: get().count - 1 });
    },
  };
};
