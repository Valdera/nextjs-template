import CounterSample from '@/components/counter/CounterSample';
import { useCounterStore } from '@/lib/stores';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

const HomePage = () => {
  const { count, setCounter, increment, decrement } = useCounterStore();

  const { data, isLoading, isError } = useQuery(
    'count',
    async (): Promise<{ count: number }> => {
      const response = await fetch('/api/counter');
      return response.json();
    }
  );

  useEffect(() => {
    if (data) {
      setCounter(data.count);
    }
  }, [data, setCounter]);

  return (
    <div
      className={
        'w-full h-[100vh] bg-slate-300 flex items-center justify-center flex-col'
      }
    >
      <h1 className={'text-5xl mb-2 font-heading'}>Hello World</h1>
      <p className={'text-gray-700 font-body mb-10'}>This is next js project</p>
      <CounterSample
        data={{ count }}
        onDecrement={decrement}
        onIncrement={increment}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default HomePage;
