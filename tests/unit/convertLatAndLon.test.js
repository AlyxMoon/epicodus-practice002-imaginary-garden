import convertLatAndLon from '@/lib/convertLatAndLon'

describe('function convertLatAndLon', () => {
  it('should correctly convert latitude and longitude', () => {
    expect(convertLatAndLon('45.5234,-122.6762'))
      .toEqual(['45.5234', '-122.6762'])
  })
})
