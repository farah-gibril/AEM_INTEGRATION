const fetch = require('node-fetch');
const { TextDecoder } = require('util');

describe('Download Document - function', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should download a document successfully', async () => {
    const mockArrayBuffer = new TextEncoder().encode('dummy content').buffer;
    
    fetch.mockResponseOnce(new Response(mockArrayBuffer));

    const response = await fetch('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/download-document?file_name=wallet');
    const data = await response.arrayBuffer();

    const text = new TextDecoder().decode(data);

    expect(text).toBe('dummy content');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/download-document?file_name=wallet');
  });

  test('should handle download error', async () => {
    fetch.mockReject(new Error('Failed to download file'));

    try {
      await fetch('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/download-document?file_name=wallet');
    } catch (error) {
      expect(error.message).toBe('Failed to download file');
    }
  });
});
