//get all elements with specific attribute
function getAllElementsWithAttribute(attribute){
	var matchingElements = [];
	var allElements = document.getElementsByTagName('*');
	for (var i = 0; i < allElements.length; i++) {
		if (allElements[i].getAttribute(attribute)) {
			// Element exists with attribute. Add to array.
			matchingElements.push(allElements[i]);
		}
	}
	return matchingElements;
}

//take an attribute and make it the background image of the element
function setBackgroundImage(element, attribute){
	element.style.backgroundImage = "url(" + element.getAttribute(attribute) + ")";
}


//DEFAULTS
var attribute = 'data-src';
var croplessElements = getAllElementsWithAttribute(attribute);
//loop through elements and set background image
for (var i=0; i<croplessElements.length; i++){
	setBackgroundImage(croplessElements[i], attribute);
}