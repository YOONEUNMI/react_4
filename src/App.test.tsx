import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


// DOM을 테스트하기 위한 도구, React Testing Library 나 Jest 등 테스트 라이브러리를 사용

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
