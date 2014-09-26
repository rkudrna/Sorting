$(function() {
  function Fruit(name,gLoad,calories) {
    this.name = name;
    this.gLoad = gLoad;
    this.calories = calories;
    
    this.toHTML = function() {
      return '<li class="fruit">' + 
      this.name + 
      //'<br><em>GL: ' + this.gLoad + 
      //'<br>cals: ' + this.calories + 
      '<em></li>'
    };

    this.addFruit = function() {
      $('#fruitList').append(this.toHTML());
    };
    console.log(this.addFruit());
  };

  var apple = new Fruit('Apple',3,65);
  var pear = new Fruit('Pear',5,81);
  var banana = new Fruit('Banana',18,200);
  var peach = new Fruit('Peach',5,60);
  var orange = new Fruit('Orange',6,48);
  var tomato = new Fruit('Tomato',2,38);
  var apricot = new Fruit('Apricot',6,34);
  var cherry = new Fruit('Cherry',7,22);
  var grape = new Fruit('Grape',9,59);

  console.log(grape);

  $('li').css({
    'display': 'inline', 
    'margin-right': '10px', 
    'font-family': 'Verdana',
    'font-size': '14pt',
    'background-color': '#81DAF5',
    'border': 'solid blue 1px',
    'border-radius': '10px',
    'padding': '5px',
  })

  $('button').click(function() {
    $('#fruitList').append("hello");
  })
  
});

