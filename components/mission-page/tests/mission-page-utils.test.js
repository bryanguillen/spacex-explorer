import { parsePastMission } from '../mission-page-utils';

describe('parsePastMission', () => {
  it('should return an object that contains the props needed for the mission page', () => {
    const mockMissions = [
      {
        id: '1',
        mission_name: 'Some Mission',
        links: { flickr_images: [] },
        launch_site: { site_name_long: 'Some Site' },
        rocket: { rocket_name: 'Some Rocket' },
        details: 'Some details',
        launch_date_unix: 1599137160, // maps to 9/3/20
      }
    ];
    const mockId = '1';
    const mockContent = {
      fieldSectionHeader: 'About',
      date: 'Date',
      launchLocation: 'Location',
      rocket: 'Rocket',
      details: 'Details'
    }
    const result = parsePastMission(mockMissions, mockId, mockContent);

    expect(result.name).toBe(mockMissions[0].mission_name);
    expect(result.fieldsSectionHeader).toBe(mockContent.fieldsSectionHeader);
    expect(result.date).toStrictEqual({ name: 'Date', value: '9/3/2020' });
    expect(result.launchLocation).toStrictEqual({ name: 'Location', value: mockMissions[0].launch_site.site_name_long });
    expect(result.rocket).toStrictEqual({ name: 'Rocket', value: mockMissions[0].rocket.rocket_name });
    expect(result.details).toStrictEqual({ name: 'Details', value: mockMissions[0].details });
    expect(result.imageUrl).toBe('');
  });
});