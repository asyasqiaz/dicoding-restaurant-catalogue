import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <div class="detail-container">
    <div class="restaurant-image">
        <picture>
          <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}">
          <source media="(max-width: 768px)" data-srcset="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}">
          <img class="lazyload" data-src='${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}' alt="${restaurant.name} image in ${restaurant.city}" />
        </picture>
    </div>
    <div class="restaurant-info">
        <h3>Information</h3>
        <div class="restaurant-info-content">
            <h4>Address</h4>
            <p>${restaurant.address}, ${restaurant.city}</p>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
            <h4>Category</h4>
            <ul>
                ${restaurant.categories.map((category) => `<li class="category">${category.name}</li>`).join('')}
            </ul>
            <h4>Description</h4>
            <p>${restaurant.description}</p>
        </div>
    </div>
  </div>
    <div class="restaurant-menu">
        <h3>Menu</h3>
        <div class="menu-container">
            <div class="food-menu">
                <h4>Food</h4>
                <ul>
                    ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                </ul>
            </div>
            <div class="drink-menu">
                <h4>Drinks</h4>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
    <div class="review">
        <h3>Reviews</h3>
        <div class="review-list">
            ${restaurant.customerReviews.map((review) => `
            <div class="review-item">
                <h4 class="review-name">${review.name}</h4>
                <p class="review-date">${review.date}</p>
                <p class="review-content">${review.review}</p>
            </div>
            `).join('')}
        </div>
    </div>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-item">
          <img class="restaurant-item-thumbnail" width="100%" height="350px" src="./images/placeholder.png" alt="skeleton">
        <div class="restaurant-item-content">
            <h3 class="skeleton">Lorem ipsum dolor sit.</a></h3>
            <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
      </div>
  `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <picture>
          <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}">
          <source media="(max-width: 768px)" data-srcset="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}">
          <img class="restaurant-item-thumbnail lazyload" data-src='${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}' width="100%" height="350px" src="./images/placeholder.png" alt="${restaurant.name || '-'} image in ${restaurant.city}"  />
        </picture>
        <div class="restaurant-item-content">
            <h3 class="restaurant-title"><a href="#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
            <p class="city">${restaurant.city}</p>
            <p class="restaurant-item-rating">
              Rating <span href="#" class="restaurant-item-rating-value">${restaurant.rating || '-'}</span>
            </p>
            <p class="restaurant-item-description">${restaurant.description || '-'}</p>
        </div>
    </article>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createSkeletonRestaurantTemplate,
};
