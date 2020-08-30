let pickColor = () => {
	let optionsOfColor = document.getElementById('colors').value; 
    console.log(optionsOfColor);
	if(optionsOfColor === 'pink') {
		return document.getElementById('colorOptions').style.backgroundColor = 'pink';
	} else if(optionsOfColor === 'black') {
		return document.getElementById('colorOptions').style.backgroundColor = 'black';
	} else if(optionsOfColor === 'brown') {
		return document.getElementById('colorOptions').style.backgroundColor = 'brown';
	} else if(optionsOfColor === 'blue') {
		return document.getElementById('colorOptions').style.backgroundColor = 'blue';
	} else if(optionsOfColor === 'orange') {
		return document.getElementById('colorOptions').style.backgroundColor = 'orange';
	}
}





