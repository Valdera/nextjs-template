import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import styles from './CounterSample.module.scss';

export interface ICounterSample {
  data?: {
    count: number;
  };
  isLoading: boolean;
  isError: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const CounterSample: React.FC<ICounterSample> = ({
  data,
  isLoading,
  isError,
  onIncrement = () => {},
  onDecrement = () => {},
}) => {
  if (isLoading) {
    return <Skeleton className={styles.container} />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={'flex gap-5 items-center'}>
      <Button onClick={() => onDecrement()}>-</Button>
      <div className={cn(styles.container, 'bg-slate-50')}>
        <p className={'text-3xl text-gray-700'}>{data?.count}</p>
      </div>
      <Button onClick={() => onIncrement()}>+</Button>
    </div>
  );
};

export default CounterSample;
