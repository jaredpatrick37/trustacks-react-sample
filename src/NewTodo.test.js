import userEvent from '@testing-library/user-event'
import {fireEvent, render, screen} from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import NewTodo from './NewTodo';

test('new todo form default value is empty', () => {
  render(<NewTodo />);
  let input = screen.getByPlaceholderText("Add New Todo");
  expect(input.value).toEqual("");
});

test('new todo form value is reset to empty after enter key', async () => {
  const user = userEvent.setup()
  let added = false;
  render(<NewTodo addNewTodo={() => {added = true}} />);

  const input = screen.getByPlaceholderText("Add New Todo");
  fireEvent.change(input, {target: {value: 'do all the things'}});
  expect(input.value).toEqual('do all the things');
  
  input.focus();
  await act(async () =>  await user.keyboard("[Enter]"));
  expect(input.value).toEqual("");
  expect(added).toBeTruthy();
});