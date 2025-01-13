const Loadash= require('lodash');
const listOfNotes = [13,24,54,67,76]
const clearList = Loadash.without(listOfNotes,675,54)
console.log(clearList);