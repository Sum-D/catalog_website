const items = [{
        name: "Egg Paratha",
        desc: "Crispy, flavorful, and perfect breakfast!",
        img: "image/egg paratha.jpeg"
    },
    {
        name: "Biryani",
        desc: "A royal feast with rich Mughlai spices.",
        img: "image/biriyani.jpeg"
    },

    {
        name: "Chicken Korma",
        desc: "Tender chicken cooked in creamy Mughlai gravy.",
        img: "image/Chicken-Korma.jpg"
    },
    {
        name: "Veg Mughlai Curry",
        desc: "Rich vegetable curry with Mughlai spices.",
        img: "image/veg mughlai curry.jpg"
    },
    {
        name: "Chicken Biriyani",
        desc: "Rich and the main dish oh Mughlai.",
        img: "image/chicken biriyani.jpeg"
    },

];

const catalog = document.getElementById("catalog");

items.forEach(item => {
    catalog.innerHTML += `
    <div class="card">
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
    </div>
  `;
});