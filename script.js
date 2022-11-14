"use strict";
const reviews = [
  {
    id: "review1",
    imgSource:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    name: "Susanne Hall",
    verified: "Verfied Purchase",
    comment:
      "I received my Patagonia jacket as a birthday gift and I love it! I wear it year-round and in all weather conditions – I have it on as I'm writing this right now. I love the colors, the style, and the fit. It's an excellent jacket and I can't imagine wearing anything else.",
  },
  {
    id: "review2",
    imgSource:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Michael Johnson",
    verified: "Verfied Purchase",
    comment:
      "This jacket is exactly what I needed! I live in Texas, and get around a lot in the heat. I'm not usually a fan of jackets, but I purchased this one a few weeks ago and I love it. It's very warm and comfy, and I can wear it all day without overheating. The only negative is that it doesn't come with a rain cover, but that's just a minor fault.",
  },
  {
    id: "review3",
    imgSource:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Selena Bisbing",
    verified: "Verfied Purchase",
    comment:
      "Hands down my favorite winter jacket! Super warm and comfortable. Typically I wear a size large but because it is a parka, I went a size down and it fits perfect. I really wish Patagonia would make this jacket in Navy Blue or Dark Gray",
  },
  {
    id: "review4",
    imgSource:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Justin Luke",
    verified: "Not Verified",
    comment:
      "Due to the time of year, I havent fully tested this jacket yet, but I will do so this winter. It did a great job keeping me warm during an April blizzard and during a cold Rocky Mountain evening. The fit is comfortable and the jacket is light, and I feel warm without feeling hot because it breathes so well.",
  },
];

const card = document.querySelector("#slider");
const img = document.querySelector("#imgSource");
const personName = document.querySelector("#name");
const verified = document.querySelector("#verified");
const text = document.querySelector("#comment");
const prevBtn = document.querySelector(".left-icon");
const nextBtn = document.querySelector(".right-icon");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.imgSource;
  personName.textContent = item.name;
  verified.textContent = item.verified;
  text.textContent = item.comment;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.imgSource;
  personName.textContent = item.name;
  verified.textContent = item.verified;
  text.textContent = item.comment;
}
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
