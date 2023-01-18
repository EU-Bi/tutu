import {product} from '../lang.js'

let scrollpos = window.scrollY
const header = document.querySelector(".wrapp-hedder")
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
    
    for(let key in product){
      let elem = document.querySelectorAll('.lg-'+key)
      if(elem){
        elem.forEach((e)=>e.innerHTML = product[key][hash])
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
    for(let key in product){
      let elem = document.querySelectorAll('.lg-'+key)
      if(elem){
        elem.forEach((e)=>e.innerHTML = product[key][hash])
      }      
    }
  }
}
changeLanguage()

let card
if(hash=='en'){
 card={
    "1":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/1.png" width="350px" height="400px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Digital & Social Media Marketing</p>
            <span class="popup_span">Social media has significant power to increase brand awareness and attract potential clients. Quality and unique content is the foundation of digital marketing. Let's work together to share your story.</span>
            <a class="popup_button" id="DigitalSocialMediaMarketing">Contact</a>
          </div>
        </div>`,
    "2":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/2.png" width="350px" height="400px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Brand strategy & consumer insight</p>
            <span class="popup_span">Our goal is to create market, customer and end-user insights, as well as to translate these insights together with you into actions that improve your business performance.</span>
            <a class="popup_button" id="BrandStrategyConsumerInsight">Contact</a>
          </div>
        </div>`,
    "3":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/3.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Media planning & buying</p>
            <span class="popup_span">There are many benefits to a strategic approach to media planning. Partly to ensure that you get the most for your media investment, and partly to be able to meet your target audience in the right context to increase your chances of achieving your goal.</span>
            <a class="popup_button" id="MediaPlanningBuying">Contact</a>
          </div>
        </div>`,
    "4":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/4.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Direct marketing & POS</p>
            <span class="popup_span">Automation allows you to make a system that has several intelligent features and integrations that together create a POS system that supports the entire life cycle of your company.</span>
            <a class="popup_button" id="DirectMarketingPOS">Contact</a>
          </div>
        </div>`,
    "5":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/5.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">PR & communication</p>
            <span class="popup_span">A quality PR service will help you achieve your business goals by communicating your mission and purpose to the right people. Build trust and awareness by formulating a story that media and influencers want to share with their readers.</span>
            <a class="popup_button" id="PRCommunication">Contact</a>
          </div>
        </div>`,
    "6":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/6.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Reporting & data analysis</p>
            <span class="popup_span">We help our clients gain direct exposure to the customer interface by making better use of data. Thus, our clients increase the number of sales of their product.</span>
            <a class="popup_button" id="ReportingDataAnalysis">Contact</a>
          </div>
        </div>`,
    "7":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/7.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Advertising consulting</p>
            <span class="popup_span">We effectively help clients strategize and implement a modern, integrated performance marketing system that combines brand and performance marketing based on data and web analytics with a flexible, customer-centric business approach.</span>
            <a type="submit" class="popup_button" id="AdvertisingConsulting">Contact</a>
          </div>
        </div>`,
    "DigitalSocialMediaMarketing":`../folder/folder/DigitalSocialMediaMarketing.png`,
    "BrandStrategyConsumerInsight":`../folder/folder/BrandStrategyConsumerInsight.png`,
    "MediaPlanningBuying":`../folder/folder/MediaPlanningBuying.png`,
    "DirectMarketingPOS":`../folder/folder/DirectMarketingPOS.png`,
    "PRCommunication":`../folder/folder/PRCommunication.png`,
    "ReportingDataAnalysis":`../folder/folder/ReportingDataAnalisis.png`,
    "AdvertisingConsulting":`../folder/folder/AdvertisingConsulting.png`,
  }
}else{
  card={
    "1":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/1.png" width="350px" height="400px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Цифровий маркетинг та маркетинг у соціальних мережах</p>
            <span class="popup_span">Соціальні мережі мають значну силу для підвищення впізнаваності бренду та залучення шанувальників. Якісний та унікальний контент - основа цифрового маркетингу. Давайте працювати разом щоб поділитися вашою історією.</span>
            <a class="popup_button" id="DigitalSocialMediaMarketing">Записатися</a>
          </div>
        </div>`,
    "2":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/2.png" width="350px" height="400px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Стратегія бренду та Уявлення споживача</p>
            <span class="popup_span">Наша ціль полягає не тільки у тому, щоб створити представлення ринку, клієнтів і кінцевих споживачів, а ще й перетворити цю позицію разом з вами у дії, які підвищують ефективність вашого бізнесу.</span>
            <a class="popup_button" id="BrandStrategyConsumerInsight">Записатися</a>
          </div>
        </div>`,
    "3":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/3.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Медіа-планування та закупівля</p>
            <span class="popup_span">Соціальні мережі мають значну силу для підвищення впізнаваності бренду та залучення шанувальників. Якісний та унікальний контент - основа цифрового маркетингу. Давайте працювати разом щоб поділитися вашою історією.</span>
            <a class="popup_button" id="MediaPlanningBuying">Записатися</a>
          </div>
        </div>`,
    "4":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/4.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Прямий маркетинг та POS</p>
            <span class="popup_span">Автоматизація дає змогу зробити систему, яка має декілька інтелектуальних функцій та інтеграцій, які разом створюють POS-систему, підтримуючою весь життєвий цикл вашої компанії.</span>
            <a class="popup_button" id="DirectMarketingPOS">Записатися</a>
          </div>
        </div>`,
    "5":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/5.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">PR та комунікації</p>
            <span class="popup_span">Якісний сервіс PR’у допоможе вам досягти бізнес-цілей, довівши вашу місію та мету до потрібних людей. Зміцніть довіру та обізнаність, сформулювавши історію, якою ЗМІ та впливові особи хочуть поділитися з читачами.</span>
            <a class="popup_button" id="PRCommunication">Записатися</a>
          </div>
        </div>`,
    "6":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/6.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Звітність та аналіз даних</p>
            <span class="popup_span">Ми допомагаємо нашим клієнтам отримати прямий вплив на інтерфейс клієнтів, краще використовуючи дані. Таким чином, наші клієнти збільшують кількість продажів свого продукту.</span>
            <a class="popup_button" id="ReportingDataAnalysis">Записатися</a>
          </div>
        </div>`,
    "7":`<div class="popup_content">
          <a href="" class="popup_close">
            <img src="./img/x.png" alt="" srcset="">
          </a>
          <img class="popup_img" src="./img/7.png" width="300px" height="350px" alt="" srcset="">
          <div class="popup_napolnenie">
            <p class="popup_text">Рекламний консалтинг</p>
            <span class="popup_span">Ми ефективно допомагаємо клієнтам розробити стратегію та впровадити сучасну комплексну систему маркетингу продуктивності, яка поєднує бренд та маркетинг ефективності на основі даних і веб-аналітики застосовуючи гнучкий бізнес-підхід, орієнтований на клієнта.</span>
            <a type="submit" class="popup_button" id="AdvertisingConsulting">Записатися</a>
          </div>
        </div>`,
    "DigitalSocialMediaMarketing":`../folder/folder/DigitalSocialMediaMarketing.png`,
    "BrandStrategyConsumerInsight":`../folder/folder/BrandStrategyConsumerInsight.png`,
    "MediaPlanningBuying":`../folder/folder/MediaPlanningBuying.png`,
    "DirectMarketingPOS":`../folder/folder/DirectMarketingPOS.png`,
    "PRCommunication":`../folder/folder/PRCommunication.png`,
    "ReportingDataAnalysis":`../folder/folder/ReportingDataAnalisis.png`,
    "AdvertisingConsulting":`../folder/folder/AdvertisingConsulting.png`,
  }
}




const btnOpenAll =document.querySelectorAll('.knopka');
const body = document.querySelector('body');
const popup = document.getElementById('popup')



let unlock=true;
let popupIsOpen=false;

const timeout = 300;



// function addPopUp(){
//   if(btnOpenAll){
//     btnOpenAll.forEach((e)=>{
        
//     })
    
//   }
// }

if(btnOpenAll){
  btnOpenAll.forEach((e)=>{
    e.addEventListener('click', (e)=>{
      popupOpen(popup, e.srcElement.id)
      e.preventDefault()
    })
    
  })
  
}
function generatePopUpInPopUp(body,button){
  button.addEventListener('click',(e)=>{
    e.preventDefault()
    let id= e.target.id
    body.innerHTML=''
    for(let key in card){
      if(key ==id){
        if(hash=='en'){
          body.innerHTML=`
            <div class="popup_content">
              <a href="" class="popup_close">
                <img src="./img/x.png" alt="" srcset="">
              </a>
              <img class="popup_img" src=${card[key]} width="380px" height="480px" alt="" srcset="">
              <form class="flex-wrapper-card-form telegram-form">
                <p class="par-contact lg-contact-us">Contact us</p>
                <input type="text" name="name" id="" placeholder="Your name"/>
                <input type="email" name="email" id="" placeholder="Email"/>
                <input type="text" name="phone" id="" placeholder="Phone">
                <button type="submit" class="knopka-1 lg-button-sign" id="8">Sign up</button>
              </form>
            </div>
            ` 

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
                generateHTMLPopUpGood()
              })
              .catch((err)=>{
                console.warn(err)
              })
            })
            
            
        }else{
          body.innerHTML=`
          <div class="popup_content">
            <a href="" class="popup_close">
              <img src="./img/x.png" alt="" srcset="">
            </a>
            <img class="popup_img" src=${card[key]} width="380px" height="480px" alt="" srcset="">
            <form class="flex-wrapper-card-form telegram-form" action="../ajax.php">
              <p class="par-contact lg-contact-us">Зв'яжіться з нами</p>
              <input type="text" name="name" id="" placeholder="Ваше ім'я"/>
              <input type="email" name="email" id="" placeholder="Ваш email"/>
              <input type="text" name="phone" id="" placeholder="Ваш телефон">
              <button type="submit" class="knopka-1 lg-button-sign" id="8">Відправити</button>
            </form>
          </div>
          ` 

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
                generateHTMLPopUpGood()
              })
              .catch((err)=>{
                console.warn(err)
              })
            })
        }
        
      }
    }
    
    const popupCloseIcon = document.querySelector('.popup_close')
    popupCloseIcon.addEventListener('click',(e)=>{
      popupClose(popup)
      e.preventDefault()
      body.innerHTML = ''
    })
  })
}

function generateHTMLPopUp(item){
  const popupBody = document.querySelector('.popup_body')
  for(let key in card){
    if(key == item){
      popupBody.innerHTML = card[key]
    }
  }
  const popupCloseIcon = document.querySelector('.popup_close')
  const popupButton = document.querySelector('.popup_button')
  generatePopUpInPopUp(popupBody,popupButton)
  if(popupCloseIcon){
    
    popupCloseIcon.addEventListener('click', (e)=>{
      popupClose(popup)
      e.preventDefault()
      popupBody.innerHTML = ''
    })
  }
}

function popupOpen(popup, item){
  if(popup && unlock){
    popup.classList.add('open')
    popup.classList.remove('close')
    generateHTMLPopUp(item)
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
  // const lockPaddingValue = window.innerWidth - document.querySelector('.contact').offsetWidth + 'px'
  // body.style.paddingRight = lockPaddingValue;
  unlock = false;
  body.classList.add('lock')
  setTimeout(function(){
    unlock=true
  },timeout)

}

function bodyUnLock(){
  setTimeout(function(){
    // body.style.paddingRight='0px'
    body.classList.remove('lock')
  },timeout)
}


function generateHTMLPopUpGood(){
  const popupBody = document.querySelector('.popup_body')
  popupBody.innerHTML = ''
  if(hash=='en'){
    popupBody.innerHTML=`<div class="popup_content">
  <a href="" class="popup_close">
    <img src="./img/x.png" alt="" srcset="">
  </a>
  <form class="popup_napolnenie_good">
    <img class="popup_img_good" src="./img/good.png" width="112px" height="112px" alt="" srcset="">
    <p class="popup_text">Thanks for the application</p>
    <span class="popup_span">We will contact you soon</span>
    <a class="popup_button" href="../index.html">Go to home page</a>
  </form>
</div>`
  }else{
    popupBody.innerHTML=`<div class="popup_content">
  <a href="" class="popup_close">
    <img src="./img/x.png" alt="" srcset="">
  </a>
  <form class="popup_napolnenie_good">
    <img class="popup_img_good" src="./img/good.png" width="112px" height="112px" alt="" srcset="">
    <p class="popup_text">Дякуємо за звернення</p>
    <span class="popup_span">Ми зв'яжемося з вами найближчим часом</span>
    <a class="popup_button">Перейти на головну</a>
  </form>
</div>`
  }
  
  popupOpen(popup)
  
  const popupCloseIconGood = document.querySelector('.popup_close')
  const popupRedirect = document.querySelector('.popup_button')

  popupRedirect.addEventListener('click', (e)=>{
    e.preventDefault()
    document.location.href='../index.html'
  })
  
  if(popupCloseIconGood){
    popupCloseIconGood.addEventListener('click', (e)=>{
      e.preventDefault()
      popupClose(popup)
    
      popupBody.innerHTML = ''

    })
  }
}




// // send form
//   $('.telegram-form').on('submit', function (event) {

//     event.stopPropagation();
//     event.preventDefault();
  
//     let form = this,
//         submit = $('.submit', form),
//         data = new FormData(),
//         files = $('input[type=file]')
  
  
//     $('.submit', form).val('Отправка...');
//     // $('input, textarea', form).attr('disabled','');
  
//     data.append( 'name', 		$('[name="name"]', form).val() );
//     data.append( 'phone', 		$('[name="phone"]', form).val() );
//     data.append( 'email', 		$('[name="email"]', form).val() );
//     data.append( 'text', 		$('[name="text"]', form).val() );
//     data.append( 'file', 		$('[name="file"]', form).val() );
   
  
//     files.each(function (key, file) {
//         let cont = file.files;
//         if ( cont ) {
//             $.each( cont, function( key, value ) {
//                 data.append( key, value );
//             });
//         }
//     });
    
//     $.ajax({
//         url: 'ajax.php',
//         type: 'POST',
//         data: data,
//         cache: false,
//         dataType: 'json',
//         processData: false,
//         contentType: false,
//         xhr: function() {
//             let myXhr = $.ajaxSettings.xhr();
  
//             if ( myXhr.upload ) {
//                 myXhr.upload.addEventListener( 'progress', function(e) {
//                     if ( e.lengthComputable ) {
//                         let percentage = ( e.loaded / e.total ) * 100;
//                             percentage = percentage.toFixed(0);
//                         $('.submit', form)
//                             .html( percentage + '%' );
//                     }
//                 }, false );
//             }
  
//             return myXhr;
//         },
//         error: function( jqXHR, textStatus ) {
//             // Тут выводим ошибку
//         },
//         complete: function() {
//             // Тут можем что-то делать ПОСЛЕ успешной отправки формы
//             generateHTMLPopUpGood()
//             console.log('Complete')
//             form.reset() 
//         }
//     });
  
//     return false;
//   });


