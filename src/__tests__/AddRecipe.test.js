import { fireEvent, render, screen } from "@testing-library/react";
import AddRecipe from "../components/AddRecipe";


test("testing a button on AddRecipe", () => {

    render(<AddRecipe />);
  
    const button = screen.getByText("Let's Go");

    fireEvent.click(button);
 
    screen.getByText("Let's Go");


  });

  // This fixes the useNavigate error

  const mockedUsedNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
     ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
  }));


  



