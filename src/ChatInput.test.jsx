import { render, screen, fireEvent } from '@testing-library/react';

import ChatInput from './components/ChatInput.js';

test('renders textarea placeholder', () => {
  render(<ChatInput onAddMessage={() => {}} isLoading={false} />);
  const textarea = screen.getByPlaceholderText(/what do you have in mind/i);
  expect(textarea).toBeInTheDocument();
});



test('should call onAddMessage when submitting text', () => {
    const mockAddMessage = jest.fn(); 
    render(<ChatInput onAddMessage={mockAddMessage} isLoading={false} />);
    const textarea = screen.getByPlaceholderText(/what do you have in mind/i);
    fireEvent.change(textarea, { target: { value: 'Hi man!' } });
    const sendButton = screen.getByTestId('submit-btn');
    fireEvent.click(sendButton);
    expect(mockAddMessage).toHaveBeenCalledTimes(1);
    expect(mockAddMessage).toHaveBeenCalledWith({
      type: 'query',
      message: 'Hi man!'
    });
  });

  
  