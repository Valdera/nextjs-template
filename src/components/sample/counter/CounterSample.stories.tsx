import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CounterSample, { ICounterSample } from './CounterSample';

const meta: Meta<typeof CounterSample> = {
  title: 'components/sample/CounterSample',
  component: CounterSample,
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
    isError: {
      control: 'boolean',
    },
    data: {
      control: 'object',
    },
    onDecrement: {
      table: {
        disable: 'true',
      },
    },
    onIncrement: {
      table: {
        disable: 'true',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CounterSample>;

const Component: React.FC<ICounterSample> = ({ data, ...args }) => {
  const [count, setCount] = useState(data?.count || 0);

  return (
    <CounterSample
      {...args}
      data={{ count }}
      onIncrement={() => setCount(count + 1)}
      onDecrement={() => setCount(count - 1)}
    />
  );
};

export const Primary: Story = {
  render: (args) => {
    return <Component {...args} />;
  },
  args: {
    isLoading: false,
    isError: false,
  },
};
