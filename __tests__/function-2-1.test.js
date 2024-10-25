// __tests__/function-2-1.test.js
const fetch = require('node-fetch');

describe('Fetch Ticket Data - function-2-1', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should fetch ticket data successfully', async () => {
    const mockTickets = {
      tickets: [
        {
          ticket_id: '1',
          user_id: 'user123',
          user_name: 'John Doe',
          issue: 'Login issue',
          status: 'open',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z'
        }
      ]
    };
    
    fetch.mockResponseOnce(JSON.stringify(mockTickets));

    const response = await fetch('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/function-2-1');
    const data = await response.json();

    expect(data).toEqual(mockTickets);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/function-2-1');
  });

  test('should handle fetch error', async () => {
    fetch.mockReject(new Error('API is down'));

    try {
      await fetch('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/function-2-1');
    } catch (error) {
      expect(error.message).toBe('API is down');
    }
  });
});
