import {customers} from '../lang.js'

let scrollpos = window.scrollY

const header = document.querySelector(".hedder")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("bg-header")
const remove_class_on_scroll = () => header.classList.remove("bg-header")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})

const en = document.querySelector('.flex-wrapper-two')
const ua = document.querySelector('.flex-wrapper-one')
const allLang = ['en', 'ua']

en.addEventListener('click',(e)=>{
  e.preventDefault()
  changeURLLanguage('en')
} )
ua.addEventListener('click', (e)=>{
  e.preventDefault()
  changeURLLanguage('ua')
})

function changeURLLanguage(lang){
  location.href = window.location.pathname+'#'+lang
  localStorage.language=lang;
  location.reload()
}
let hash = localStorage.language
// hash= hash.substring(1)
function changeLanguage(){
  if(hash == 'en'){
    en.classList.add('rectangle-2')
    ua.classList.remove('rectangle-2')
    if(!allLang.includes(hash)){
      location.href = window.location.pathname+'#en'
      localStorage.setItem('language','en')
      location.reload()
      en.classList.add('rectangle-2')
      ua.classList.remove('rectangle-2')
    }
    
    for(let key in customers){
      let elem = document.querySelectorAll('.lg-'+key)
      if(elem){
        elem.forEach((e)=>e.innerHTML = customers[key][hash])
      }      
    }
  }else{
    ua.classList.add('rectangle-2')
    en.classList.remove('rectangle-2')
    if(!allLang.includes(hash)){
      location.href = window.location.pathname+'#en'
      localStorage.setItem('language','en')
      location.reload()
      en.classList.add('rectangle-2')
      ua.classList.remove('rectangle-2') 
    }
    for(let key in customers){
      let elem = document.querySelectorAll('.lg-'+key)
      if(elem){
        elem.forEach((e)=>e.innerHTML = customers[key][hash])
      }      
    }
  }
}
changeLanguage()

$(document).ready(function(){
  $('.header__burger').click(function(e){
    $('.header__burger,.body__burger,body').toggleClass('active')
    $('.wrapp-language-cross img').click(function(e){
      $('.header__burger,.body__burger,body').removeClass('active')
    })
    $('.flex-wrapper-two').click(function(e){
      e.preventDefault()
      changeURLLanguage('en')
      
      e.addClass('rectangle-2')
      $('.flex-wrapper-one').removeClass('rectangle-2')

    })
    $('.flex-wrapper-one').click(function(e){
      e.preventDefault()
      changeURLLanguage('ua')
      e.addClass('rectangle-2')
      $('.flex-wrapper-two').removeClass('rectangle-2')
    })
    if(localStorage.language=='en'){
      $('.flex-wrapper-two').addClass('rectangle-2')
      $('.flex-wrapper-one').removeClass('rectangle-2')
    }else{
      $('.flex-wrapper-one').addClass('rectangle-2')
      $('.flex-wrapper-two').removeClass('rectangle-2')
    }
  })
})