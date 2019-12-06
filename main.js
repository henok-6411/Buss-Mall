'use strict';

var pictureOne = document.getElementById('picture1');
var pictureTwo = document.getElementById('picture2');
var pictureThree = document.getElementById('picture3');
var imageResult = document.getElementById('list-allpictures');
var voteViewCount = document.getElementById('vote');
var ChartName = document.getElementById('myChart');


var uniqueIndex = [];
var numOfClicked = 25;
var previous = 0;
var previous2 = 0;
var previous3 = 0;

var pictureContener = document.getElementById('picture-contener');
var nameContener = document.getElementById('name-contener');

// pictureOne.src = '/images/bag.jpg';
// pictureOne.alt = 'bag';
// pictureOne.name = 'bag';

// pictureTwo.src = '/images/banana.jpg';
// pictureTwo.alt = 'banana';
// pictureTwo.name = 'banana';

// pictureThree.src = '/images/bathroom.jpg';
// pictureThree.alt = 'bathroom';
// pictureThree.name = 'bathroom';

var allPictures = [];

function Pictures(src, name) {
  this.src = `/images/${src}.jpg`;
  this.name = name;
  this.clicked = 0;
  this.viewed = 0;

  // this.noOfImage = [];
  // this.eachTimeClicked = [];
  allPictures.push(this);


};


function creatNewImage() {
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
}

//console.log(allPictures);

function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomImage() {
  var index = randomIndex(allPictures.length - 1);
  while (index === previous || index === previous2 || index === previous3) {
    var index = randomIndex(allPictures.length - 1);
  }


  var index2 = randomIndex(allPictures.length - 1);
  while (index2 === previous || index2 === previous2 || index2 === previous3 || index2 === index) {
    var index2 = randomIndex(allPictures.length - 1);

  }
  pictureTwo.src = allPictures[index2].src;
  pictureTwo.alt = allPictures[index2].alt;
  pictureTwo.name = allPictures[index2].name;
  allPictures[index2].viewed++;



  var index3 = randomIndex(allPictures.length - 1);
  while (index3 === index2 || index3 === index || index3 === previous || index3 === previous2 || index3 === previous3) {
    var index3 = randomIndex(allPictures.length - 1);

  }
  console.log(index)
  pictureOne.src = allPictures[index].src;
  pictureOne.alt = allPictures[index].alt;
  pictureOne.name = allPictures[index].name;
  allPictures[index].viewed++;

  pictureThree.src = allPictures[index3].src;
  pictureThree.alt = allPictures[index3].alt;
  pictureThree.name = allPictures[index3].name;
  allPictures[index3].viewed++;
  console.log(previous, previous2, previous3);
  // console.table(allPictures);
  previous = 0;
  previous2 = 0;
  previous3 = 0;

  console.log(previous, previous2, previous3);
  previous = index;
  previous2 = index2;
  previous3 = index3;

  console.log(previous, previous2, previous3);

  // Pictures.noOfImage.push(this);
}


// function getUnique() {
//   while (uniqueIndex.length < 6) {
//     var Random = randomIndex(allPictures.length);
//     if (!uniqueIndex.includes(Random)) {
//       uniqueIndex.push(Random);
//     }
//   }
// }
// function removeThree() {
//   for (var i = 0; i < 3; i++) {
//     uniqueIndex.shift();
//   }
// }

function handleClick(event) {

  getRandomImage()

  numOfClicked--;
  console.log(numOfClicked);
  voteViewCount.textContent = ` you have left ${numOfClicked}  clicked.`;

  if (numOfClicked !== 0) {
    var data = event.target.name;
    for (var i = 0; i < allPictures.length; i++) {
      if (data === allPictures[i].name) {

        // getUnique();
        // removeThree();
        allPictures[i].clicked++;
        console.log(allPictures.clicked);
        var newString = JSON.stringify(allPictures);
        localStorage.setItem('allpictures', newString);
      }
    }
  }
  else {

    pictureContener.removeEventListener('click', handleClick);

    // surveyResult();
    hide(pictureContener);

    graphName();
    makeChart();
  }

}
function show(elem) {
  elem.style.display = 'block';
}

function hide(elem) {
  elem.style.display = 'none';
}
//Making a chart!!!!
var allGraphClicked = [];
var allGraphViewed = [];
var allGraphName = [];

function makeChart() {

  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',

    data: {
      labels: allGraphName,
      datasets: [{
        label: '# of clicked ',
        backgroundColor: 'white',
        borderColor: 'rgb(255, 99, 132)',
        data: allGraphClicked,
      },
      {
        label: '# of viewed',
        backgroundColor: 'white',
        borderColor: 'rgb(255, 99, 132)',
        data: allGraphViewed
      }]
    },

    // Configuration options go here
    options: {}
  });
}
// chartbody.addEventListener('chartTable', handleChart);
function graphName() {
  for (var i = 0; i < allPictures.length; i++) {

    allGraphName.push(allPictures[i].name);
    allGraphViewed.push(allPictures[i].viewed);
    allGraphClicked.push(allPictures[i].clicked);
  }
  //  console.log(clicked);

}
// function graphClicked() {
//   for (var i = 0; i < allPictures.length; i++) {
//     handleClick(event)++;
//   }
//   allGraphClicked.push(graphClicked);
// }

//function of list result.......
// function surveyResult() {
//   var ulEl = document.createElement('ul');
//   for (var i = 0; i < allPictures.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${allPictures[i].name}: ${allPictures[i].clicked} clicked and ${allPictures[i].viewed} viewed.`;
//     ulEl.appendChild(liEl);
//   }
//   imageResult.appendChild(ulEl);

// }
creatNewImage();
// console.table(allPictures);
pictureContener.addEventListener('click', handleClick);
getRandomImage();


////// save to our locacal storage 
var newString = JSON.stringify(allPictures);
localStorage.setItem('allpictures', newString);
// var getPictures = localStorage.getItem('allpictures');
// var parsedClicked = JSON.parse(getPictures);

function checkLocalStorage() {
  if (localStorage.getItem('allpictures')) {
    var getPictures = localStorage.getItem('allpictures');
    var parsedClicked = JSON.parse(getPictures);
    allPictures = parsedClicked;

  }
  else {
    getRandomImage();
  }
}
