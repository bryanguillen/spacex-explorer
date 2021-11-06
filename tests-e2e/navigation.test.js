/**
 * @description E2E test for navigation component
 */

import { Selector } from 'testcafe';
import { getLocation, getBaseUrl } from './test-utils';

fixture('Navigation')
  .page(getBaseUrl() + '/history');

test('should redirect to home when home is clicked', async t => {
  await t.click(Selector('#navigation-button-home'));
  await t.expect(await getLocation()).notContains('/history');
});

// mission w/ id is random
test('should redirect to history when history button clicked', async t => {
  await t.click(Selector('#navigation-button-history'));
  await t.expect(await getLocation()).contains('/history');
});