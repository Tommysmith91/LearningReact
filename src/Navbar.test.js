import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { render, screen,fireEvent } from '@testing-library/react';

test('Navbar renders without issue', () => {
    render(<BrowserRouter><Navbar/></BrowserRouter>);  
    const navBarElement = screen.getByTestId("nav__menu");
    expect(navBarElement).toBeInTheDocument();
  });

  test('renders correct buttons for navigation',() => {
    render(<BrowserRouter><Navbar/></BrowserRouter>);
    const homeLink = screen.getByRole('link',{name: /home/i});
    const createEmployeeLink = screen.getByRole('link',{name: /create employee/i});    

    expect(homeLink).toBeInTheDocument();
    expect(createEmployeeLink).toBeInTheDocument();

  });

  test('Clicking Home Button Routes To Home Page',() => {
    render(<BrowserRouter><Navbar/></BrowserRouter>);

    const homeLink = screen.getByRole('link',{name: /home/i});

    expect(homeLink).toBeInTheDocument();

    //Check that we can click it and it redirects
    fireEvent.click(homeLink);
    
    //after click HomePage h1 element should be there
    const homePageH1Tag = screen.getByText("Home");

    expect(homePageH1Tag).toBeInTheDocument();

  });


  test('Clicking Create Employee Button Routes To Create Employee Page',() => {
    render(<BrowserRouter><Navbar/></BrowserRouter>);

    const createEmployeeLink = screen.getByRole('link',{name: /Create Employee/i});

    expect(createEmployeeLink).toBeInTheDocument();

    //Check that we can click it and it redirects
    fireEvent.click(createEmployeeLink);
    
    //after click HomePage h1 element should be there
    const createEmployeeTitle = screen.getByText("Create Employee");

    expect(createEmployeeTitle).toBeInTheDocument();

  });