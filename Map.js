/*Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 

Example: 

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

Hint:

Remember that you can access a property on an object by using square bracket notation. For example...

var person = { name: 'Bill' };
person['name'] // returns 'Bill' */


var vehicles = [
  {make: 'Chevy'},
  {make: 'Buick'},
  {make: 'Toyota'},
  {make: 'Chrysler'}
  ];
function vehicleMake(array, property){
 return array.map(function(vehicle){
   return vehicle[property]
 });
}
vehicleMake(vehicles,'make');
