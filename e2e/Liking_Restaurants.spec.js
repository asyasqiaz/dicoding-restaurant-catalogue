/* eslint-disable no-undef */
Feature('Liking Restaurants');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('There is not any restaurant to show', '.restaurant-item-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('There is not any restaurant to show', '.restaurant-item-not-found');

  I.amOnPage('/');
  I.waitForElement('.restaurant-title a', 10);

  I.retry(3).seeElement('.restaurant-title a');

  const firstRestaurant = locate('.restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.retry(3).seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.retry(3).seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
