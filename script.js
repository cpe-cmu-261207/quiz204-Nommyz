const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

const text = document.querySelector("#text");
const deftext = text.innerHTML;
var words = [];


const searchbtn = document.querySelector("#search");
const btnreset = document.querySelector("#reset");


btn_toggle.onclick = () => {
	const btnElm = document.querySelector('h2')
	btnElm.innerHTML = "630610748"
}

searchbtn.onclick = () => {
	words = deftext.split(/[ ]+/);
	console.log(words);
	var newtext = "";
	for(let i = 0 ; i < words.length; ++i){
		if(words[i].length >= parseInt(length.value)){
			newtext += "<span style='background-color:" + color.value + "'>" + words[i] +  "</span>" + " ";
		}else{
			newtext += words[i] + " ";
		}
	}
	text.innerHTML = newtext;
}

