import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import ReusableForm from './Components/Form';

test("Reusable Form Renders One Input Text Box With Name Test, Label Test and Placeholder text of Test Text",() => 
{
    const fields = [
        {name: "Test", label: "Test", type: "Text", placeholder:"Test Text"}
    ]
    render(<ReusableForm formTitle="Test" fields={fields} onSubmit={() => {}} submitButtonText=""/>);

    const inputField = screen.getByLabelText("Test:");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute('type','Text');
    expect(inputField).toHaveAttribute('placeholder','Test Text');
    expect(inputField).toHaveAttribute('name','Test');    
});

test("Reusable Form Renders One Input Text Box With Name Test, Label Test and Placeholder text of Test Text With A Submit Button With The Text 'Test Button'",() => 
{
    const fields = [
        {name: "Test", label: "Test", type: "Text", placeholder:"Test Text"}
    ]
    render(<ReusableForm formTitle="Test" fields={fields} onSubmit={() => {}} submitButtonText="Test Button"/>);

    const inputField = screen.getByLabelText("Test:");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute('type','Text');
    expect(inputField).toHaveAttribute('placeholder','Test Text');
    expect(inputField).toHaveAttribute('name','Test');
    
    const submitButton = screen.getByRole('button');
    expect(submitButton).toHaveTextContent("Test Button");
});

test("Reusable Form Submits Form With Correct Data", () => {
    const fields = [
        {name: "Username", label: "Username", type: "Text", placeholder:"Username"},
        {name:"Password",label:"Password",type:"password", placeholder:"Password"}
    ]
    const onSubmitMock = jest.fn();
    render(<ReusableForm formTitle="Test" fields={fields} onSubmit={onSubmitMock} submitButtonText="Test Button"/>);

    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton =  screen.getByRole('button');

    fireEvent.change(usernameInput,{target: {value: 'testUsername'}});
    fireEvent.change(passwordInput,{target: {value:'testPassword'}});
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({Username:'testUsername',Password:'testPassword'});
});

