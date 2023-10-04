import { render, screen } from '@testing-library/react';
import CounterSample from '../CounterSample';

describe('CounterSample', () => {
  it('should render the counter when data loaded', () => {
    const mockData = {
      count: 20,
    };

    render(<CounterSample data={mockData} isError={false} isLoading={false} />);

    const counter = screen.getByText(mockData.count);

    expect(counter).toBeInTheDocument();
  });
});
