import {
  getNumberOfVisibleMissions,
  parseMission
} from "../history-page-utils";

describe('getNumberOfVisibleMissions', () => {
  it('should return current + 20 whenever the result is less than total number of missions', () => {
    expect(getNumberOfVisibleMissions(20, 100)).toBe(40);
    expect(getNumberOfVisibleMissions(80, 100)).toBe(100); // test when the result of adding 20 gives you upper bound
  });
  
  it('should return current + ${num_left} whenever adding 20 would result in more than total number of missions', () => {
    expect(getNumberOfVisibleMissions(90, 100)).toBe(100);
  });
});

describe('parseMission', () => {
  it('should return an object with the MissionFeedCardInterface', () => {
    const mockUnixTimestamp = 1599137160; // maps to 9/3/20
    const {
      missionName,
      missionDate,
      missionDetails,
      missionId,
      readMoreText
    } = parseMission({ mission_name: 'test', details: 'this is a test', id: '1', launch_date_unix: mockUnixTimestamp }, 'Details', 'Date', 'Read More');
    
    expect(missionName).toBe('test');
    expect(missionDate).toStrictEqual({name: 'Date', value: '9/3/2020'});
    expect(missionDetails).toStrictEqual({name: 'Details', value: 'this is a test'});
    expect(missionId).toBe(1);
    expect(readMoreText).toBe('Read More');
  });
});