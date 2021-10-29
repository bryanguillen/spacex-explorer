import truncateDetails from '../truncate-details';

describe('truncateDetails', () => {
  it('should return a string', () => {
    expect(typeof truncateDetails('Mock details')).toBe('string');
  });

  it('should truncate text properly when there are more than 15 words in the paragraph', () => {
    const MOCK_DETAILS = 'This mission will launch the fourth batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. It is the fifth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.'
    expect(truncateDetails(MOCK_DETAILS)).toBe('This mission will launch the fourth batch of Starlink version 1.0 satellites, from SLC-40, Cape...');
  });

  it('should not truncate text when there are less than 15 words', () => {
    const MOCK_DETAILS = 'This mission will launch.'
    expect(truncateDetails(MOCK_DETAILS)).toBe(MOCK_DETAILS);
  });
});