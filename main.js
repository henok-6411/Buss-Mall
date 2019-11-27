'use strict';

var pictureOne = document.getElementById('picture1');
var pictureTwo = document.getElementById('picture2');
var pictureThree = document.getElementById('picture3');
// var pictureFour = document.getElementById('picture4');
// var pictureFive = document.getElementById('picture5');
// var pictureSix = document.getElementById('picture6');
// var pictureSeven = document.getElementById('picture7');
// var pictureEight = document.getElementById('picture8');
// var pictureNine = document.getElementById('picture9');
// var pictureTen = document.getElementById('picture10');
// var pictureEleven = document.getElementById('picture11');
// var pictureTwelve = document.getElementById('picture12');
// var pictureThirteen = document.getElementById('picture13');
// var pictureFourteen = document.getElementById('picture14');
// var pictureFifteen = document.getElementById('picture15');
// var pictureSisteen = document.getElementById('picture16');
// var pictureSeventeen = document.getElementById('picture17');
// var pictureEighteen = document.getElementById('picture18');
// var pictureNineteen = document.getElementById('picture19');
// var pictureTwenty = document.getElementById('picture20');

pictureOne.src = '/images/bag.jpg';
pictureOne.alt = 'bag';
pictureOne.name = 'bag';

pictureTwo.src = '/images/banana.jpg';
pictureTwo.alt = 'banana';
pictureTwo.name = 'banana';

pictureThree.src = '/images/bathroom.jpg';
pictureThree.alt = 'bathroom';
pictureThree.name = 'bathroom';

var allPictures = [];
function Pictures(src, name) {
  this.src = `../image/${src}.jpg`;
  this.name = name;
  allPictures.push(this);

};

new Pictures('bag', 'bag');
new Pictures('banana', 'banana');
new Pictures('bathroom', 'bathroom');
new Pictures('boots', 'boots');
new Pictures('breakfast', 'breakfast');
new Pictures('bubblegum', 'bubblegum');
new Pictures('chair', 'chair');
new Pictures('cthulhu', 'cthulhu');
new Pictures('dog-duck', 'dog-duck');
new Pictures('dragon', 'dragon');
new Pictures('pen', 'pen');
new Pictures('pet-sweep', 'pet-sweep');
new Pictures('scissors', 'scissors');
new Pictures('shark', 'shark');
new Pictures('sweep', 'sweep');
new Pictures('tauntaun', 'tauntaun');
new Pictures('unicorn', 'unicorn');
new Pictures('usb', 'usb');
new Pictures('water-can', 'water-can');
new Pictures('wine-glass', 'wine-glass');













console.log(allPictures);

function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomImage() {
  var index = randomIndex(allPictures.length - 1);


  pictureOne.src = allPictures[index].src;
  pictureOne.alt = allPictures[index].alt;
  pictureOne.name = allPictures[index].name;
  var index2 = randomIndex(allPictures.length - 1);
  pictureTwo.src = allPictures[index2].src;
  pictureTwo.alt = allPictures[index2].alt;
  pictureTwo.name = allPictures[index2].name;
  var index3 = randomIndex(allPictures.length - 1);
  pictureThree.src = allPictures[index3].src;
  pictureThree.alt = allPictures[index3].alt;
  pictureThree.name = allPictures[index3].name;

  console.log(index, index2, index3);
}
getRandomImage();

