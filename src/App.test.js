import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders without issue', () => {
  render(<App/>);  
  const navBarElement = screen.getByTestId("nav__menu");
  const mainContextElement = screen.getByTestId("main-content");

  expect(navBarElement).toBeInTheDocument();
  expect(mainContextElement).toBeInTheDocument();
});
