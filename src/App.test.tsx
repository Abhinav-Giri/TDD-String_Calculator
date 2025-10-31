import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('String Calculator App', () => {
  it('renders with basic accessible elements', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /string calculator/i });
    expect(heading).toBeInTheDocument();;
  });

  it('should have image with descriptive alt text', () => {
    render(<App />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt');
    expect(image.getAttribute('alt')).not.toBe('');
    expect(image.getAttribute('alt')).not.toBe('image');
    const imageAlt = screen.getByAltText('Calculator background')
    expect(imageAlt).toBeInTheDocument();
  });

  it('should have properly labeled form controls', () => {
  render(<App />);
  const input = screen.getByLabelText(/enter numbers/i);
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('aria-describedby');
  
  const button = screen.getByRole('button', { name: /calculate/i });
  expect(button).toBeInTheDocument();
});
});