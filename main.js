
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

  var reverseArray = planets.reverse();


  planets.forEach(function(planet){
      console.log(planet);
      var list= document.createElement('option');
      list.value = planet[0]; //assign the option's value equal to index 0 in array
      document.getElementById('planets').appendChild(list).textContent = planet[0];
      //has to be text content, if not, it would return the array index and not string
  });

  function calculateWeight(weight, planetName) {
      var userWeight = document.getElementById("user-weight").value;
      var planetName = document.getElementById("planets").selectedIndex;
      var gravity = planets[planetName][1];
      return userWeight * gravity;

    };

  function handleClickEvent(e) {
    var userWeight = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").value; 
    var result = calculateWeight(userWeight,planetName);
    document.getElementById("output").innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
  
  };

  