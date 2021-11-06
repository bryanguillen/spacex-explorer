/**
 * @description E2E testing for history page
 */

import { Selector } from 'testcafe';
import { getLocation, goBack, getBaseUrl, scrollToBottom } from './test-utils';

fixture('History')
  .page(getBaseUrl() + '/history');

test('should be able to visit mission page when clicking read more for mission', async t => {
  const missionFeedCard1 = Selector('.mission-feed-card');
  const missionFeedCard1Id = await missionFeedCard1.getAttribute('id');
  await t.click(Selector('.mission-feed-card').find('button'));
  await t.wait(1000); // wait for localhost slowness
  await t.expect(await getLocation()).contains(`/history/${missionFeedCard1Id.split('-')[1]}`);
  
  await goBack();

  const missionFeedCard2 = Selector('.mission-feed-card').nth(1);
  const missionFeedCard2Id = await missionFeedCard2.getAttribute('id');
  await t.click(missionFeedCard2.find('button'));
  await t.wait(1000); // wait for localhost slowness
  await t.expect(await getLocation()).contains(`/history/${missionFeedCard2Id.split('-')[1]}`);
});

test('should only load 20 missions to start', async t => {
  await t.expect(Selector('.mission-feed-card').count).eql(20);
});

test('should load an additional 20 missions once scrolled to bottom', async t => {
  await scrollToBottom();
  await t.expect(Selector('.mission-feed-card').count).eql(40);
});
