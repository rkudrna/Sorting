$(function() {
  
//Fruit object class constructor
  function Fruit(name,gLoad,calories) {
    this.name = name;
    this.gLoad = gLoad;
    this.calories = calories;
    
    this.toHTML = function() {
      return '<li><strong>' + 
      this.name + 
      '</strong><br><em>GL: ' + this.gLoad + 
      '<br>cals: ' + this.calories + 
      '</em></li>'
    };

    this.addFruit = function() {
      $('#fruitList').append(this.toHTML());
    };

    this.addFruit();
  };
//instantiate Fruit objects
  var apple = new Fruit('Apple',3,65);
  var pear = new Fruit('Pear',5,81);
  var banana = new Fruit('Banana',18,200);
  var peach = new Fruit('Peach',5,60);
  var orange = new Fruit('Orange',6,48);
  var tomato = new Fruit('Tomato',2,38);
  var apricot = new Fruit('Apricot',6,34);
  var cherry = new Fruit('Cherry',7,22);
  var grape = new Fruit('Grape',9,59);

//create array of Fruit objects
  var getFruit = $("li");
  var fruitArray = $.makeArray(getFruit);
  //var fruitArray = [apple, pear, banana, peach];

console.log(fruitArray);
//


  $('button').click(function() {
    $('#fruitList').append("hello");
  })
  
});

