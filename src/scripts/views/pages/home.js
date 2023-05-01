import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-section></hero-section>
    <div class="container">
      <section class="why-us">
      <div class="content-title">
        <h2>Why <span class="text-underline">Us?</span></h2>
      </div>
      <div class="inner-content">
        <div class="image">
          <img src="../images/meal-icon.svg" alt="Meal Icon">
        </div>
        <div class="inner-description">
          <p class="why-us-description">Dreamy meal has listings for everything, <br>including the most amazing cuisine
            served<br>
            at the coziest hidden gems
            and swankiest
            restaurants.</p>
        </div>
      </div>
    </section>

     <section class="restaurant-content">
      <div class="content-title">
        <h2>Explore Restaurant That Appeal To <span class="text-underline">You</span></h2>
      </div>
      <div id="restaurants" class="restaurant-list">
      </div>
    </section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
