import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('render tests', () => {
    
  test("App renders successfully with text NU", () => {
    render(<App />);
    expect(screen.getByText('NU')).toBeDefined();
  });

});