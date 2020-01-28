function ibo(e){
	return  document.getElementById(e);
}
function fisi(e,a){
	ibo(e).innerHTML=a;
}
function fikun(e,a){
	var c = ibo(e).innerHTML;
	var b = a+c;
	fisi(e,b);
}
function relekun(e){
	console.log(e);
}
function pariwo(e){
	console.error(e);
}
function sope(e){
	alert(e);
}
function beere(e){
	return confirm(e);
}
function bileere(e){
	return prompt(e);
}
function ko(e){
	document.write(e);
}
function oro(e){
	return '';
}
function ropo(e,a){
	if(a==undefined||e==undefined){
		pariwo('Okan ninu awon nomba wonni ko dara to');
	}
	else {
		return e+a;
	}
}
function sopo(a,e){
	return ropo(a,e);
}
const yokuro = (e,a)=>{
	if(a==undefined||e==undefined){
		pariwo('Okan ninu awon nomba wonni ko dara to');
	}
	else {
		return a-e;
	}
}
const pin = (e,a)=>{
	if(a==undefined||e==undefined){
		pariwo('Okan ninu awon nomba wonni ko dara to');
	}
	else {
		return e/a;
	}
}
const kiloku=(e,a)=>{
if(a==undefined||e==undefined){
		pariwo('Okan ninu awon nomba wonni ko dara to');
	}
	else {
		return e%a;
	}
}

const eeni =(e)=>{
	if(a==undefined||e==undefined){
		pariwo('Okan ninu awon nomba wonni ko dara to');
	}
	else {
		return e++;
	}
}
const dinku = (e)=>{
	if(a==undefined||e==undefined){
		pariwo('Okan ninu awon nomba wonni ko dara to');
	}
	else {
		return e--;
	}
}

function isodipupo(e,a){
	if(a==undefined||e==undefined){
		pariwo('Okan ninu awon nomba wonni ko dara to');
	}
	else {
		return e*a;
	}
}
function irukinni(e){
	return typeof(e);
}
function durode(e,a,m){
	try{
		ibo(a).addEventListener(e,m);
	}
	catch(err){
		pariwo("Yehhh "+err);
	}
}
function aago(e){
	return new Date();
}
function iseju(e){
	return aago().getMinutes();
}
function isejuaaya(){
	return aago().getSeconds();
}
function wakati(){
	return aago().getHours();
}
function oni(){
	return aago().getDate();
}
function isejuakan(){
	return aago().getMilliseconds();
}
function kiloni(){
	return aago().getDay();
}
function odunyii(e){
	return aago().getFullYear();
}
function osuyii(){
	return aago().getMonth();
}
function awonosu(){
	var arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	return arr;
}
function sowaninu(arr,e) {
	// body...
	return arr.indexOf(e);
}
function dinomba(e){
	return parseInt(e);
}
function osu(e){
	var arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	if(e==undefined){

	}
	else {

	}
}
function gbe(e,a){
	if(a==undefined||e==undefined){
		pariwo('Okan ninu awon nomba wonni ko dara to');
	}
	else {
		return e**a;
	}
}
function pai(){
	return Math.PI;
}
function pajuede(e){
	return Math.round(e);
}
function omo(e){
	return Math.sqrt(e);
}

function paada(e){
	return Math.abs(e);
}
function pajuesoke(e){
	return Math.ceil(e);
}
function pajuele(e){
	return Math.floor(e);
}
function sine(e){
		return Math.sin((Math.PI/180)*e);
}
function cosine(e){
	return Math.cos((Math.PI/180)*e);
}
function tanie(e){
	return Math.tan((Math.PI/180)*e);
}
function kekere(e){
	return Math.min(e);
}
function ninla(e){
	return Math.max(e);
}
function fisibi(e,a){
	localStorage.setItem(e,a);
}
function lomuwa(e){
	if(sowa(e)){
		return localStorage.getItem(e);
	}
	else {
		return '';
	}
}
function sowa(e){
	if(localStorage.hasOwnProperty(e)){
		return true;
	}
	else {
		return false;
	}
}
function yokurojoor(e){
	if(sowa(e)){
		localStorage.removeItem(e);
	}
	else {
		return false;
	}
}


function oya(){
	return Math.random();
}
function odidioya(e){
	return	Math.floor(Math.random() * 1000); 
}
function oyalaarin(min, max) {
    return Math.floor(oya() * (max - min + 1) ) + min;
}
function deede(a,b){
	if(a==b){
		return true;
	}
	else {
		return false;

	}

}

function sedeede(a,b){
	if(a===b){
		return true;
	}
	else {
		return false;
	}

}

function kinni(e){
	return ibo(e).value;
}
function sedaadaa(e,a){
	if(e.trim()===""){
		return false;
	}
	else {

	}
}
function fipamo(e){
	ibo(e).style.display="none";
}
function satunse(e,a,b){
	return ibo(e).style.a=b;
}
function pinsi(e,a){
	try{
		return e.split(a);
	}
	catch(err){
		 pariwo("Yehh"+err);
	}
}
	//var a = '';
	// fisibi('fa','');
// function fa(e){
// 	fetch(e)
// 	.then((response)=>{
// 		return response.text();
// 	})
// 	.then((data)=>{
// 		fisibi('fa',data);
// 	})
// 	.catch((err)=>{
// 		fisibi('fa',err);
// 	});	
// 	return lomuwa('fa');
//}

//function 
