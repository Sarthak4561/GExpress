const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Gaming Mouse",
    price: 14500,
    description:`G502 X PLUS is the latest addition to legendary G502 lineage. 
    Reinvented with our first-ever LIGHTFORCE hybrid switches, 
    LIGHTSPEED pro-grade wireless, LIGHTSYNC RGB, HERO 25K sensor, and more.`,
    colors: [
      {
        code: "white",
        img: "./img/mouse00.png",
      },
      {
        code: "black",
        img: "./img/mouse01.png"
      },
    ],
  },
  {
    id: 2,
    title: "Gaming Keyboard",
    price: 5990,
    description:`Speed. Accuracy. Durability. Logitech G gaming keyboards are designed with the technology and materials required for high performance gaming.`,
    colors: [
      {
        code: "black",
        img: "./img/keyboard.png",
      },
      {
        code: "black",
        img: "./img/keyboard.png",
      },
    ],
  },
  {
    id: 3,
    title: "Boat Headphones",
    price: 2000,
    description:`Speed. Accuracy. Durability. Logitech G gaming keyboards are designed with the technology and materials required for high performance gaming.`,
    colors: [
      {
        code: "black",
        img: "./img/headphone1.png",
      },
      {
        code: "white",
        img: "./img/headphone2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Green Soul Gaming Chair",
    price: 35533,
    description:`Speed. Accuracy. Durability. Logitech G gaming keyboards are designed with the technology and materials required for high performance gaming.`,
    colors: [
      {
        code: "red",
        img: "./img/chair1.png",
      },
      {
        code: "blue",
        img: "./img/chair0.png",
      },
    ],
  },
  {
    id: 5,
    title: "XBox Controller",
    price: 6590,
    description:`Speed. Accuracy. Durability. Logitech G gaming keyboards are designed with the technology and materials required for high performance gaming.`,
    colors: [
      {
        code: "black",
        img: "./img/controller0.png",
      },
      {
        code: "blue",
        img: "./img/controller1.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDescription = document.querySelectorAll(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;


    // changing the description 
    currentProductDescription.textContent = choosenProduct.description;
    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;


    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

console.log('yes');
