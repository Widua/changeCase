'use strict';


function upper(str){
  return str.toUpperCase() ;
}

function lower(str){
  return str.toLowerCase();
}

function altered(str){
  // TODO: IMPLEMENT alteredcase return
  return str
}


/*
Don't work, don't know why. So I will back to this project... when I have enough 
*/
/*
function copyToClipboard(text){
  document.getElementById("clipboard") = text
  var element = document.getElementById("clipboard")
  document.body.appendChild(element) ;
  element.select()
  document.execCommand('copy') ;
  element.blur()

}
*/

chrome.runtime.onInstalled.addListener(

function(){

  chrome.contextMenus.create({
    title:"ToUpperCase",
    id:"upperCase",
    contexts:["selection"]
  })
  
  chrome.contextMenus.create({
    title:"ToLowerCase",
    id:"lowerCase",
    contexts:["selection"]
  })
  
  chrome.contextMenus.create({
    title:"AlteredCase",
    id:"alteredCase",
    contexts:["selection"]
  })

}

)

chrome.contextMenus.onClicked.addListener(
function(info){
var selected = info.selectionText ;
switch (info.menuItemId) {
  
  case "lowerCase":
    selected = lower(selected)
    copyToClipboard(selected) ;
    console.log(selected) ;
    break;
  case "upperCase":
    console.log(upper(selected)) ;
    copyToClipboard(selected) ;
    break;
  case "alteredCase":
    console.log(altered(selected)) ;
    copyToClipboard(selected) ;
    break;
  default:
    console.log("UNEXPECTED!!")
}




}

)