import errorHandle from '../../src/index';

describe('errorHandle', () => {
  it('should return null and a result if the promise resolves', async () => {
    const [err, res] = await errorHandle(Promise.resolve('yay'));
    expect(err).toBe(null);
    expect(res).toBe('yay');
  });

  it('should return an error and undefined if the promise rejects', async () => {
    const [err, res] = await errorHandle(Promise.reject(new Error('reason')));
    expect(err).toEqual(new Error('reason'));
    expect(res).toBe(undefined);
  });
});
