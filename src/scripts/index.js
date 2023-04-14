import 'regenerator-runtime'; /* for async await transpile */
import data from '../DATA.json';
import '../styles/scss/main.scss';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('active');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});

function getRestaurants(data) {
  let html = "";

  data.restaurants.forEach((restaurant) => {
    html += `
        <article class="restaurant-item">
          <img class="restaurant-item-thumbnail"
            src="${restaurant.pictureId}"
            alt="Restaurant Image in ${restaurant.city}" 
          />
          <div class="restaurant-item-content">
            <h3 class="restaurant-item-title"><a href="#">${restaurant.name}</a></h3>
            <p class="city">${restaurant.city}</p>
            <p class="restaurant-item-rating">
              Rating <span href="#" class="restaurant-item-rating-value">${restaurant.rating}</span>
            </p>
            <p class="restaurant-item-description">${restaurant.description}</p>
          </div>
        </article>
    `;
    document.getElementById("restaurant-list").innerHTML = html;
  });
}

getRestaurants(data);

