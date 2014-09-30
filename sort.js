$(function() {

var fruitArray = [];
var display = function() {
  for (i=0; i < fruitArray.length; i++) {
    $('#fruitList').append(fruitArray[i].toHTML);
  } 
};

var banana = new Fruit('Banana',18,200),
  peach = new Fruit('Peach',5,60),
  orange = new Fruit('Orange',6,48),
  apple = new Fruit('Apple',3,65),
  pear = new Fruit('Pear',5,81),
  tomato = new Fruit('Tomato',2,38),
  apricot = new Fruit('Apricot',6,34),
  cherry = new Fruit('Cherry',7,22),
  grape = new Fruit('Grape',9,59);

var sortByCalories = function() {
    for (i = 0; i < fruitArray.length-1; i++) {
      for (j = i+1; j < fruitArray.length; j++) {
        if (fruitArray[i].calories > fruitArray[j].calories) {
          temp = fruitArray[i]
          fruitArray[i] = fruitArray[j]
          fruitArray[j] = temp
        }
      }
    };

    for (i = 0; i < fruitArray.length; i++) {
      console.log(fruitArray[i].name + " | calories: " +fruitArray[i].calories);
    };
  };

var sortBygLoad = function() {
    for (i = 0; i < fruitArray.length-1; i++) {
      for (j = i+1; j < fruitArray.length; j++) {
        if (fruitArray[i].gLoad > fruitArray[j].gLoad) {
          temp = fruitArray[i]
          fruitArray[i] = fruitArray[j]
          fruitArray[j] = temp
        }
      }
    };

    for (i = 0; i < fruitArray.length; i++) {
      console.log(fruitArray[i].name + " | glycemic load: " +fruitArray[i].gLoad);
    };
  };

display();

function Fruit(name,gLoad,calories) {
  this.name = name;
  this.gLoad = gLoad;
  this.calories = calories;
  var thisFruit = this; 

  this.toHTML = function() {
    return '<li class="fruit" id="' + thisFruit.name + '"><strong>' + 
    thisFruit.name + 
    '</strong><br><em>GL: ' + thisFruit.gLoad + 
    '<br>cals: ' + thisFruit.calories + 
    '</em></li>'
  };

  fruitArray.push(this);   
};

$('#calButton').click(function() {
  $('#fruitList').empty();
  
  sortByCalories();
  display();
});

$('#gLButton').click(function() {
  $('#fruitList').empty();
  
  sortBygLoad();
  display();
});



});

