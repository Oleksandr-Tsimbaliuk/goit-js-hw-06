const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery")

const galleryItems = images.map((image) => {
  return `<Li><img src = "${image.url}" alt = "${image.alt}"></Li>`
}).join("")

gallery.insertAdjacentHTML("afterbegin", galleryItems)


// 2.
// const gallery = document.querySelector(".gallery")
// console.log(gallery);

// const galleryItems = images.map(image => {
//   return `<li><img src="${image.url}" alt="${image.url}" width=320></li>`
// }).join("")

// console.log(galleryItems);

// gallery.insertAdjacentHTML("afterbegin", galleryItems)



// 3.
// const gallery = document.querySelector('.gallery');
// const galleryItem = ({ url, alt }) =>
//   `<li><img src="${url}" alt="${alt}"></li>`;
// const galleryItems = images.map(galleryItem).join('');
// gallery.insertAdjacentHTML('beforeend', galleryItems);