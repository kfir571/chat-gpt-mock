import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import * as gptService from './services/gptService';

test('renders chat input', () => {
  render(<App />);
  const textarea = screen.getByPlaceholderText(/what do you have in mind/i);
  expect(textarea).toBeInTheDocument();
});


jest.mock('./services/gptService');

test('sending message triggers POST and shows loading state', async () => {
  gptService.sendToGPTApi.mockResolvedValue('This is a fake answer');

  render(<App />);
  const textarea = screen.getByPlaceholderText(/what do you have in mind/i);
  fireEvent.change(textarea, { target: { value: 'Hi !!' } });
  const submitBtn = screen.getByTestId('submit-btn');
  fireEvent.click(submitBtn);
  expect(screen.getByText(/thinking.../i)).toBeInTheDocument();
  await waitFor(() =>
    expect(screen.getByText('This is a fake answer')).toBeInTheDocument()
  );
});


