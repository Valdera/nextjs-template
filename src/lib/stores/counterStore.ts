import { create } from 'zustand';
import { CounterSlice, createCounterSlice } from '../slices/counterSlice';

type StoreState = CounterSlice;

const useCounterStore = create<StoreState>()((...a) => ({
  ...createCounterSlice(...a),
}));

export default useCounterStore;
