import { render, screen, fireEvent } from '@testing-library/react';
import MainSidebar from './components/MainSidebar';

test('clicking a chat item marks it as selected', () => {
  const setCollapsed = jest.fn();
  const setHistoryChat = jest.fn();
  const setMessages = jest.fn();

  const messages = [[], [], []]; 
  render(
    <MainSidebar
      collapsed={false}
      setCollapsed={setCollapsed}
      setHistoryChat={setHistoryChat}
      messages={messages}
      setMessages={setMessages}
    />
  );

  const chatItems = screen.getAllByRole('listitem');

  fireEvent.click(chatItems[1]);

  expect(chatItems[1].className).toContain('selected-chat-collapsed');
});