//? CAROUSEL

const carouselItems = [
  {
    src: "./img/converse-red1.png",
    alt: "converse-red",
    title: "converse-red",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae nulla non eu turpis dolor ultrices eget. Sapien dis ante at adipiscing eget consequat commodo mauris aliquet.",
    price: "90",
    colorClass: "red-item",
  },
  {
    src: "./img/converse-green2.png",
    alt: "converse-green",
    title: "converse-green",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae nulla non eu turpis dolor ultrices eget. Sapien dis ante at adipiscing eget consequat commodo mauris aliquet.",
    price: "110",
    colorClass: "green-item",
  },
  {
    src: "./img/converse-blue3.png",
    alt: "converse-blue",
    title: "converse-blue",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae nulla non eu turpis dolor ultrices eget. Sapien dis ante at adipiscing eget consequat commodo mauris aliquet.",
    price: "120",
    colorClass: "blue-item",
  },
];

function renderCarousel() {
  const carouselList = document.querySelector(".carousel-list");

  carouselItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("carousel-item", item.colorClass);
    // li.classList.add(item.colorClass);

    //? reate IMG
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.classList.add("carousel-img");

    const content = document.createElement("div");
    content.classList.add("carousel-content");

    const title = document.createElement("h4");
    title.classList.add("card-title");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = item.text;

    const price = document.createElement("p");
    price.classList.add("price");
    price.innerHTML = `${item.price}<i class="fa-solid fa-euro-sign"></i>`;

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    const button = document.createElement("button");
    button.type = "submit";
    button.classList.add("carousel-btt");
    button.textContent = "add to card";

    //? // Combine all content together into the list item (li)
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(price);
    content.appendChild(btnContainer);

    //? ADD BTTN
    btnContainer.appendChild(button);

    li.appendChild(img);
    li.appendChild(content);

    carouselList.appendChild(li);
  });
}

renderCarousel();

//? CAROUSEL-EVENT
const carouselBox = document.querySelector(".carousel-box");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

document.querySelector(".bttn-right").onclick = function () {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    centerItem();
  }
};

document.querySelector(".bttn-left").onclick = function () {
  if (currentIndex > 0) {
    currentIndex--;
    centerItem();
  }
};

function centerItem() {
  const widthItem = items[currentIndex].offsetWidth; //? retur width element includ content, padding, border, but without ьфкпшт
  
  const scrollPosition =
    items[currentIndex].offsetLeft -
    (carouselBox.offsetWidth / 2 - widthItem / 2);
  carouselBox.scrollTo({ left: scrollPosition, behavior: "smooth" });
}
