$(function() {
  function Fruit(name,gLoad,calories) {
    this.name = name;
    this.gLoad = gLoad;
    this.calories = calories;
    
    this.toHTML = function() {
      return '<li id="fruit">' + 
      this.name + 
      '<br>' + this.gLoad + 
      '<br>' + this.calories + 
      '</li>'
    };

    this.addFruit = function() {
      $('#fruitList').append(this.toHTML());
    };
    console.log(this.addFruit());
  };



  var apple = new Fruit('apple',3,65);
  var pear = new Fruit('pear',5,81);
  var banana = new Fruit('banana',18,200);
  var peach = new Fruit('peach',5,60);
  var orange = new Fruit('orange',6,48);
  var tomato = new Fruit('tomato',2,38);
  var apricot = new Fruit('apricot',6,34);
  var cherry = new Fruit('cherry',7,22);
  var grape = new Fruit('grape',9,59);

  console.log(grape.calories);

  $('button').click(function() {
    $('#fruitList').append("hello");
  })
  
});

