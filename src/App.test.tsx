/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Render Hello World', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Vite + React');
  });
});
