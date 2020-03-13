function remove(){
 var prarentElement = document.getElementById('lists');
 var elements = prarentElement.getElementsByTagName('li');
var removeIndex = elements.length - 1;
prarentElement.removeChild(elements[removeIndex]);
}