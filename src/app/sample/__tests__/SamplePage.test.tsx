import SamplePage from '@/app/sample/page';
import { render, screen } from '@testing-library/react';

describe('SamplePage', () => {
  it('should have title', () => {
    render(<SamplePage />);

    const title = screen.getByText('Hello World');

    expect(title).toBeInTheDocument();
  });

  it('Should have subtitle', () => {
    render(<SamplePage />);

    const subtitle = screen.getByText('This is next js project');

    expect(subtitle).toBeInTheDocument();
  });
});
