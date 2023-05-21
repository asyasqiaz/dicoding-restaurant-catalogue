/* eslint-disable no-undef */
Feature('Searching Restaurants');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('There is not any restaurant to show', '.restaurant-item-not-found');

  I.amOnPage('/');
  I.waitForElement('.restaurant-title a', 10);
  I.retry(3).seeElement('.restaurant-title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant-title a').at(i));
    I.retry(3).seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.restaurant-title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.retry(3).seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.restaurant-title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
