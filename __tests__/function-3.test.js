// __tests__/function-3.test.js
const fetch = require('node-fetch');

describe('Update Ticket Status - function-3', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should update ticket status successfully', async () => {
    const ticketId = '1';
    const newStatus = 'closed';
    const mockResponse = { message: 'Ticket updated successfully' };

    fetch.mockResponseOnce(JSON.stringify(mockResponse), { status: 200 });

    const response = await fetch('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/function-3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ticket_id: ticketId, new_status: newStatus }),
    });

    const data = await response.json();

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/function-3',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticket_id: ticketId, new_status: newStatus }),
      })
    );
  });

  test('should handle update error', async () => {
    const ticketId = '1';
    const newStatus = 'closed';

    fetch.mockReject(new Error('Update failed'));

    try {
      await fetch('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/function-3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticket_id: ticketId, new_status: newStatus }),
      });
    } catch (error) {
      expect(error.message).toBe('Update failed');
    }
  });
});
