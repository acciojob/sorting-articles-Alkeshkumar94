//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function removeArt(str){
let arr=["The","the","a","A","An","an"];
	
	str=str+" ";
	for(let i of arr){
        str=str.replaceAll(i+" ","").trim();
}
	return str.trim();
}
bands.sort((a,b)=>removeArt(a)>removeArt(b) ? 11 : -1)
const bandList = document.getElementById('band');

bands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});