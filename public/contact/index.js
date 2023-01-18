import {contact} from '../lang.js'

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
    
    for(let key in contact){
      let elem = document.querySelectorAll('.lg-'+key)
      if(elem){
        elem.forEach((e)=>e.innerHTML = contact[key][hash])
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
    for(let key in contact){
      let elem = document.querySelectorAll('.lg-'+key)
      if(elem){
        elem.forEach((e)=>e.innerHTML = contact[key][hash])
      }      
    }
  }
}
changeLanguage()

const btnOpen =document.querySelector('.button');
const body = document.querySelector('body');
const popup = document.getElementById('popup')
const main =document.querySelector('.main')



let unlock=true;
let popupIsOpen=false;

const timeout = 300;


const popupCloseIcon = document.querySelector('.popup_close')

if(popupCloseIcon){
  
  popupCloseIcon.addEventListener('click', (e)=>{
    popupClose(popup)
    e.preventDefault()
  })
}

function popupOpen(popup){
  if(popup && unlock){
    popup.classList.add('open')
    popup.classList.remove('close')
    popupIsOpen=true
    bodyLock()
  }
}
function popupClose(popup){
  popup.classList.add('close')
  popup.classList.remove('open')
  bodyUnLock()
}

function bodyLock(){
  const lockPaddingValue = window.innerWidth - document.querySelector('.contact').offsetWidth + 'px'
  body.style.paddingRight = lockPaddingValue;
  unlock = false;
  body.classList.add('lock')
  setTimeout(function(){
    unlock=true
  },timeout)

}

function bodyUnLock(){
  setTimeout(function(){
    body.style.paddingRight='0px'
    body.classList.remove('lock')
  },timeout)
}


// console.log(main)
// if(popupIsOpen){
//   main.addEventListener('click',(e)=>{
//     console.log(popupIsOpen)
//     popupClose(popup)
//     popupIsOpen =false
//     e.preventDefault()
//   })
// }

// send form
  // $('.telegram-form').on('submit', function (event) {

  //   event.stopPropagation();
  //   event.preventDefault();
  
  //   let form = this,
  //       submit = $('.submit', form),
  //       data = new FormData(),
  //       files = $('input[type=file]')
  
  
  //   $('.submit', form).val('Отправка...');
  //   $('input, textarea', form).attr('disabled','');
  
  //   data.append( 'name', 		$('[name="name"]', form).val() );
  //   data.append( 'phone', 		$('[name="phone"]', form).val() );
  //   data.append( 'email', 		$('[name="email"]', form).val() );
   
  
  //   files.each(function (key, file) {
  //       let cont = file.files;
  //       if ( cont ) {
  //           $.each( cont, function( key, value ) {
  //               data.append( key, value );
  //           });
  //       }
  //   });
    
  //   $.ajax({
  //       url: 'ajax.php',
  //       type: 'POST',
  //       data: data,
  //       cache: false,
  //       dataType: 'json',
  //       processData: false,
  //       contentType: false,
  //       xhr: function() {
  //           let myXhr = $.ajaxSettings.xhr();
  
  //           if ( myXhr.upload ) {
  //               myXhr.upload.addEventListener( 'progress', function(e) {
  //                   if ( e.lengthComputable ) {
  //                       let percentage = ( e.loaded / e.total ) * 100;
  //                           percentage = percentage.toFixed(0);
  //                       $('.submit', form)
  //                           .html( percentage + '%' );
  //                   }
  //               }, false );
  //           }
  
  //           return myXhr;
  //       },
  //       error: function( jqXHR, textStatus ) {
  //           // Тут выводим ошибку
  //       },
  //       complete: function() {
  //           // Тут можем что-то делать ПОСЛЕ успешной отправки формы
  //           // generateHTMLPopUpGood()
            
  //           console.log('Complete')
  //           popupOpen(popup)
  //           form.reset() 
  //       }
  //   });
  
  //   return false;
  // });

  const TOKEN="5816402593:AAFlOqYpp53qRCAqkqwh5V65OLHar7lSnMU"
  const CHAT_ID="-849232886"

  const URL_API=`https://api.telegram.org/bot${TOKEN}/sendMessage`

  document.querySelector('.telegram-form').addEventListener('submit',function(e){
    e.preventDefault();

    let message = `<b>Заявка с сайта!!</b>\n
    <b>Отправитель: </b> ${this.name.value}\n
    <b>Почта: </b> ${this.email.value}\n
    <b>Телефон: </b> ${this.phone.value}`
    


    window.axios.post(URL_API,{
      chat_id:CHAT_ID,
      parse_mode:'html',
      text:message
    })
    .then((res)=>{
      this.name.value=''
      this.email.value=''
      this.phone.value=''
      popupOpen(popup)
    })
    .catch((err)=>{
      console.warn(err)
    })
  })

  if(localStorage.language=='ua'){
    const ukraine = {lat:50.44304253765321,lng:30.360420122915183}

    genMap(ukraine)

  }else{
    const austria = {lat:48.2062301,lng:16.3754021}

    genMap(austria)
  }
  
  
  const btnAustria = document.getElementById('austria')
  const btnUkr = document.getElementById('ukraine')

  btnAustria.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.language='en'
    location.href = window.location.pathname+'#en'
    location.reload()
  })

  btnUkr.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.language='ua'
    location.href = window.location.pathname+'#ua'
    location.reload()

  })

  function genMap(loc){
    function initMap() {
      // The location of Uluru
      // const uluru = {lat:50.427161,lng:30.3641669};
      // The map, centered at Uluru
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: loc,
      });
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: loc,
        map: map,
      });
    }
    window.initMap = initMap;
  }