import {render, screen} from '@testing-library/react'
import TodosList from './TodosList';

test("todo list items are rendered", () => {
  localStorage.setItem("todos", JSON.stringify([
    {description: "take out the trash", completed: false}, 
    {description: "wash the dishes", completed: false}
  ]));
  render(<TodosList />);
  expect(screen.getByText("take out the trash")).toBeInTheDocument();
  expect(screen.getByText("wash the dishes")).toBeInTheDocument();
});