import { MissionFeedCardProps } from './mission-feed-card/MissionFeedCard';

type PreviousMissionFromApi = {
  mission_name: string,
  details: string,
  id: string,
  launch_date_unix: number
};

/**
 * @description Complement for function below;
 * it takes in an object from back-end api, and
 * spits out an object formatted according to the
 * requirements/interface needed
 */
export function parseMission(
{
  mission_name,
  details,
  id,
  launch_date_unix
}: PreviousMissionFromApi,
detailsFieldText: string,
dateFieldText: string,
readMoreText: string
): MissionFeedCardProps {
  return {
    missionName: mission_name,
    missionDate: { name: dateFieldText, value: launch_date_unix + ''},
    missionDetails: { name: detailsFieldText, value: details ? details : '' },
    missionId: parseInt(id),
    readMoreText
  };
}

/**
 * @description Function used to iterate through
 * data from back-end API and call the function above
 * for each
 */
export function parsePreviousMissions(
  previousMissions: PreviousMissionFromApi[],
  detailsFieldText: string,
  dateFieldText: string,
  readMoreText: string
): MissionFeedCardProps[] {
  return previousMissions.map((mission: PreviousMissionFromApi): MissionFeedCardProps => parseMission(mission, detailsFieldText, dateFieldText, readMoreText));
}