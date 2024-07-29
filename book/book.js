//selecting popbox popoverlay and button with add id
var popoverlay=document.querySelector('.popoverlay')
var popbox=document.querySelector('.popbox')
var addbutton=document.getElementById('add')

addbutton.addEventListener('click',function(){
    popoverlay.style.display="block"
    popbox.style.display="block"
})

//seleting cancle button
var cancle=document.getElementById('cancle')
cancle.addEventListener('click',function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popbox.style.display="none"
})

//seleting store book-name book-author book-summary and add button in form with id add-book
var storeo=document.querySelector('.store')
var addbookbutton=document.getElementById('add-book')
var bookname=document.getElementById('book-name')
var bookauthor=document.getElementById('book-author')
var summary=document.getElementById('book-summary')


addbookbutton.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute('class','book-store')
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${summary.value}</p>
    <button onclick="Delete(event)">Delete</button>`
    storeo.append(div)
    popoverlay.style.display="none"
    popbox.style.display="none"
})

function Delete(event){
    event.target.parentElement.remove()
}