import { MissionPageProps } from './MissionPage';
import parseUnixTimestamp from '../shared/utils/parse-unix-timestamp';

/**
 * @description Utilities used as the app level in conjunction with the mission page
 * component
 */

/**
 * @description Interface for the object the client gets from SpaceX API
 */
interface PastMissionFromApi {
  id: string
  mission_name: string
  links: {
    flickr_images: string[]
  }
  launch_site: {
    site_name_long: string
  }
  rocket: {
    rocket_name: string
  }
  details: string
  launch_date_unix: number
}

interface PastMissionStaticContent {
  fieldsSectionHeader: string
  date: string
  launchLocation: string
  rocket: string
  details: string
}

const defaultPastMissionFromApi: PastMissionFromApi = {
  id: '',
  mission_name: '',
  links: {
    flickr_images: []
  },
  launch_site: {
    site_name_long: ''
  },
  rocket: {
    rocket_name: ''
  },
  details: '',
  launch_date_unix: 0
}

/**
 * @description Helper function used to get the target mission from an array of missions;
 * for more on that, please see the app level component
 */
function getPastMission(missions: PastMissionFromApi[], id: string): PastMissionFromApi {
  const mission = missions.find((pastMission: PastMissionFromApi) => pastMission.id === id);
  return mission ? mission : defaultPastMissionFromApi;
}

/**
 * @description Helper function used to get + parse a target past mission,
 * which will then be the data used as props for the past mission page
 */
export function parsePastMission(missions: PastMissionFromApi[], id: string, staticContent: PastMissionStaticContent): MissionPageProps {
  const mission = getPastMission(missions, id);
  const {
    fieldsSectionHeader,
    date,
    launchLocation,
    rocket,
    details
  } = staticContent;

  return {
    name: mission.mission_name,
    fieldsSectionHeader,
    date: { name: date, value: parseUnixTimestamp(mission.launch_date_unix) },
    launchLocation: { name: launchLocation, value: mission.launch_site.site_name_long },
    rocket: { name: rocket, value: mission.rocket.rocket_name },
    details: { name: details, value: mission.details },
    imageUrl: mission.links.flickr_images[0] ? mission.links.flickr_images[0] : ''
  };
}