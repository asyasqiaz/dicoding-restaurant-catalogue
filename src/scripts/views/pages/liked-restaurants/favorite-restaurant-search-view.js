import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="container">
        <div class="restaurant-content">
          <h2>Your Favorite Restaurants</h2>
          <div id="search-container" class="search-container">
            <input id="query" type="text" placeholder="Search restaurant here..">
            <button id="searchButtonElement" type="submit">Search</button>
          </div>
          <div id="restaurants" class="restaurant-list">
          </div>
        </div>
      </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item-not-found">There is not any restaurant to show</div>';
  }
}

export default FavoriteRestaurantSearchView;
