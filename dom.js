function sayHello(){
    console.log("Hello World");
    howAreYOu();
}

function sayGoodbye(){
    console.log("Goodbye World")

}

function howAreYOu(){
    console.log("How are you, World?")
    sayGoodbye();
}

window.onload = sayHello; //execute the funciton when the page loads- 
//this means that i wait until the html and the css are loaded before I execute the javascript 