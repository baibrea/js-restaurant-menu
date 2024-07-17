let menuItems = [{
  name: "Buttermilk Pancakes",
  price: 15.99,
  desc: "Life isn't always beautiful. That was a lesson that Dan was learning. He also realized that life wasn't easy. This had come as a shock since he had lived a charmed life. He hated that this was the truth and he struggled to be happy knowing that his assumptions weren't correct.",
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
  desc: "Delicious Burger that contains an egg, hence the name \"egg\" attack. She never liked cleaning the sink. It was beyond her comprehension how it got so dirty so quickly. It seemed that she was forced to clean it every other day.",
  image: "images/egg-attack.jpg"
}, {
  name: "Oreo Dream",
  price: 20.99,
  desc: "The Oreo dish of your dreams! The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may have called it a bridge, the reality was it was nothing more than splintered wooden planks held together by rotting ropes.",
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
