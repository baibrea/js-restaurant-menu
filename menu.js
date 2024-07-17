let menuItems = [{
  name: "Buttermilk Pancakes",
  price: 15.99,
  desc: "Life isn't always beautiful. That was a lesson that Dan was learning. He also realized that life wasn't easy. This had come as a shock since he had lived a charmed life. He hated that this was the truth and he struggled to be happy knowing that his assumptions weren't correct. He wouldn't realize until much later in life that the difficult obstacles he was facing that were taking away the beauty in his life at this moment would ultimately make his life much more beautiful. All he knew was that at this moment was that life isn't always beautiful.",
  image: "images/pancakes.jpg"
}, {
  name: "Diner Double",
  price: 13.99,
  desc: "You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do.",
  image: "images/burger.png"
}, {
  name: "Godzilla Milkshake",
  price: 6.99,
  desc: "MILKSHAKE RAHHHH! Sometimes that's just the way it has to be. Sure, there were probably other options, but he didn't let them enter his mind. It was done and that was that. It was just the way it had to be.",
  image: "images/milkshake.png"
}, {
  name: "Egg Attack",
  price: 20.99,
  desc: "Delicious Burger that contains an egg, hence the name \"egg\" attack. She never liked cleaning the sink. It was beyond her comprehension how it got so dirty so quickly. It seemed that she was forced to clean it every other day. Even when she was extra careful to keep things clean and orderly, it still ended up looking like a mess in a couple of days. What she didn't know was there was a tiny creature living in it that didn't like things neat.",
  image: "images/egg-attack.jpg"
}, {
  name: "Oreo Dream",
  price: 20.99,
  desc: "The Oreo dish of your dreams! The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may have called it a bridge, the reality was it was nothing more than splintered wooden planks held together by rotting ropes. It was questionable whether it would hold the weight of a child, let alone the weight of a grown man. The problem was there was no other way across the gully, and this played into his calculations of whether or not it was worth the risk of trying to cross it.",
  image: "images/oreo-dream.jpg"
}];

let menu = document.querySelector(".menu");

menuItems.forEach((item) => {
  menu.innerHTML += `
    <div class="item">
      <img class="item-image" src="${item.image}">
      <div>
        <div class="item-label">
          <p class="item-name">${item.name}</p>
          <p class="item-price">$${item.price}</p>
        </div>
        <hr class="item-label-hr">
        <p class="item-desc">${item.desc}</p>
      </div>
    </div>
  `
})
