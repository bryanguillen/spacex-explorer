/**
 * @description E2E tests for the home page
 */

import { Selector } from 'testcafe';
import { getLocation, getBaseUrl } from './test-utils';

fixture('Home')
  .page(getBaseUrl());

test('should redirect to history when landing page button is clicked', async t => {
  await t.click(Selector('button'));
  await t.expect(await getLocation()).contains('/history');
});