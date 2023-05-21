/* eslint-disable no-undef */
Feature('Unliking Restaurants');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
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

  I.click('.restaurant-title a');

  I.waitForElement('#likeButton');
  I.retry(3).seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('There is not any restaurant to show', '.restaurant-item-not-found');
});
