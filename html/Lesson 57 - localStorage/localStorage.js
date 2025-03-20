//This example is for access the current domain's local storage and
//adds a data item to it using Storage.setItem(); 
localStorage.setItem("myCat", "Tom");

//The syntax for reading the localStorage items
const cat = localStorage.getItem("myCat");

//The syntax for removing the localStorage item
localStorage.removeItem("myCat");

//The syntax for removing all the localStorage items
localStorage.clear();
