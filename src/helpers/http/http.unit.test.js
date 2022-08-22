import * as http from '@/helpers/http';

describe('Axios', () => {
  it('should http api be defined', () => {
    expect(http.get).toBeDefined();
    expect(http.post).toBeDefined();
    expect(http.put).toBeDefined();
    expect(http.remove).toBeDefined();
  });
});
