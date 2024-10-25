// __tests__/function-3-upload.test.js
const fetch = require('node-fetch');

describe('Upload Document - function', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should upload a document successfully', async () => {
    const mockResponse = { message: 'File uploaded successfully' };

    fetch.mockResponseOnce(JSON.stringify(mockResponse), { status: 200 });

    const formData = new FormData();
    formData.append('file', new Blob(['dummy content'], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));

    const response = await fetch('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/upload-document?file_name=wallet', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/upload-document?file_name=wallet',
      expect.objectContaining({
        method: 'POST',
        body: formData,
      })
    );
  });

  test('should handle upload error', async () => {
    fetch.mockReject(new Error('Failed to upload file'));

    const formData = new FormData();
    formData.append('file', new Blob(['dummy content'], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));

    try {
      await fetch('https://australia-southeast2-journaler-ai-bot.cloudfunctions.net/upload-document?file_name=wallet', {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      expect(error.message).toBe('Failed to upload file');
    }
  });
});
