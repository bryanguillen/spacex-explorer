import fs from 'fs';
import path from 'path';
import { gql } from '@apollo/client';
import apolloClient from '../config/apollo-client';

/**
 * @description Module used for handling the getting (and caching)
 * of all past missions.  Essentially, the reason this is needed is
 * that for some reason getting a past mission by ID is not working
 * in the SpaceX API, so, the solution would be to fetch all past missions.
 * But, at build time, it would be best if we could just fetch the data once
 * and then use it within getStaticProps.  Hence, the code within this module.
 * For more on where this code came from and just general context, please
 * visit: https://flaviocopes.com/nextjs-cache-data-globally/. 
 */

/**
 * @description Helper function for actually fetching all the data from the back end
 */
async function fetchAllPastMissions() {
  console.log('Fetching all past missions...');
  const { data } = await apolloClient.query({
    query: gql`
    query {
      launchesPast {
        id
        mission_name
        links {
          flickr_images
        }
        launch_site {
          site_name_long
        }
        rocket {
          rocket_name
        }
        details
        launch_date_unix
      }
    }
    `
  });

  return data.launchesPast;
}

const MISSION_CACHE_PATH = '.past-missions';

/**
 * @description Function that is actually used within the page; it's the wrapper
 * for either fetching or getting data in file
 */
export default async function getAllPastMissions() {
  let cachedData;

  try {
    cachedData = JSON.parse(
      fs.readFileSync(path.join(__dirname, MISSION_CACHE_PATH), 'utf8')
    );
  } catch (error) {
    console.log('Member cache not initialized');
  }

  if (!cachedData) {
    const data = await fetchAllPastMissions();

    try {
      fs.writeFileSync(
        path.join(__dirname, MISSION_CACHE_PATH),
        JSON.stringify(data),
        'utf8'
      );
      console.log('Wrote to missions cache');
    } catch (error) {
      console.log('ERROR WRITING MEMBERS CACHE TO FILE');
      console.log(error);
    }

    cachedData = data;
  }

  return cachedData;
}