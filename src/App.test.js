import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';


test('renders Welcome component', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});


import books from './books.json';

test('renders correct number of book cards', () => {
  render(<App />);
  const bookCards = screen.getAllByTestId('book-card');
  expect(bookCards.length).toBe(books.length);
});


test('renders CommentArea component', () => {
  render(<App />);
  const commentArea = screen.getByPlaceholderText(/add a comment.../i);
  expect(commentArea).toBeInTheDocument();
});

 book yet, there are no instances of the SingleComment component within the DOM.
test('no SingleComment component on initial render', () => {
  render(<App />);
  const singleComment = screen.queryByTestId('single-comment');
  expect(singleComment).not.toBeInTheDocument();
});

