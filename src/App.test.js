import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input field', () => {
  render(<App />);
  const linkElement = screen.getByText(/simple Jest test for example/i);
  expect(linkElement).toBeInTheDocument();
});
