import { Button } from '@/components/ui/button';
import { useCounterStore } from '@/lib/stores';
import React, { useEffect } from 'react';
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="w-full h-[100vh] bg-slate-300 flex items-center justify-center flex-col">
      <h1 className={'text-5xl mb-2 font-heading'}>Hello World</h1>
      <p className={'text-gray-700 font-body'}>This is next js project</p>
      <div className="flex gap-5 mt-10 items-center">
        <Button onClick={() => decrement()}>-</Button>
        <div className="bg-slate-50 p-5 shadow-lg rounded-lg">
          <p className="text-3xl text-gray-700">{count}</p>
        </div>
        <Button onClick={() => increment()}>+</Button>
      </div>
    </div>
  );
};

export default HomePage;
