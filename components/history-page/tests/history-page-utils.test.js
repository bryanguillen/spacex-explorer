import { parseMission } from "../history-page-utils";

describe('parseMission', () => {
  it('should return an object with the MissionFeedCardInterface', () => {
    const {
      missionName,
      missionDate,
      missionDetails,
      missionId,
      readMoreText
    } = parseMission({ mission_name: 'test', details: 'this is a test', id: '1', launch_date_unix: 1 }, 'Details', 'Date', 'Read More');
    
    expect(missionName).toBe('test');
    expect(missionDate).toStrictEqual({name: 'Date', value: '1'});
    expect(missionDetails).toStrictEqual({name: 'Details', value: 'this is a test'});
    expect(missionId).toBe(1);
    expect(readMoreText).toBe('Read More');
  });
});