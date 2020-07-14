// make varieble
const swicher = document.querySelector('#cbx'),
more = document.querySelector('.more'),
modal = document.querySelector('.modal'),
videos = document.querySelector('.videos__item'),
videosWraper = document.querySelector('.videos__wrapper');

// make nav click toggle
const bindSlideTogle = (trigger, boxBody, content, openClass)=>{
let button ={
    'element':document.querySelector(trigger),
    'active':false
}
const box =document.querySelector(boxBody),
boxContent=document.querySelector(content);
button.element.addEventListener('click', ()=>{
    if(button.active == false){
        button.active = true;
        box.style.height = boxContent.clientHeight+'px';
        box.classList.add(openClass);
    }else{
        button.active = false;
        box.style.height = 0+'px';
        box.classList.remove(openClass);

    }
})
}
bindSlideTogle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');
// make swicher function
let nigth = false;
const swichMode = () =>{
    if(nigth === false){
        document.body.classList.add('night');
        document.querySelectorAll('.hamburger > line').forEach((item)=>{
            item.style.stroke='#fff';
        });
        document.querySelectorAll('.videos__item-views').forEach((item)=>{
            item.style.color='#fff'
        })
        document.querySelectorAll('.videos__item-descr').forEach((item)=>{
            item.style.color = '#fff';
        })
        document.querySelector('.header__item-descr').style.color = '#fff';
        document.querySelector('.logo img').src ='logo/youtube_night.svg';
        nigth=true;

    }else{
        document.body.classList.remove('night');
        document.querySelectorAll('.hamburger > line').forEach((item)=>{
            item.style.stroke='#000';
        });
        document.querySelectorAll('.videos__item-views').forEach((item)=>{
            item.style.color='#000'
        })
        document.querySelectorAll('.videos__item-descr').forEach((item)=>{
            item.style.color = '#000';
        })
        document.querySelector('.header__item-descr').style.color = '#000';
        document.querySelector('.logo img').src ='logo/youtube.svg';
        nigth=false;
    }
}
swicher.addEventListener('change', ()=>{
    swichMode();
})

// make load with litle data 
const data = [  ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'], ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов', '#2 Установка spikmi и работа с ветками на Github | Марафон вёрстки Урок 2',  '#1 Верстка реального заказа landing Page | Марафон вёрстки | Артём Исламов'], ['3,6​тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],  ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM'] 
  ];
  //load afteer click
  more.addEventListener('click', ()=>{
      more.remove();
      for(let i= 0; i<data[0].length; i++ ){
        let card = document.createElement('a');
        card.classList.add('videos__item', 'videos__item-active');
        card.setAttribute('data-url', data[3][i]);
        card.innerHTML=`
        <img src="${data[0][i]}" alt="thumb">
        <div class="videos__item-descr">
        ${data[1][i]}
        </div>
        <div class="videos__item-views">
        ${data[2][i]}
        </div>`;
          videosWraper.append(card);
          setTimeout(()=>{
                       card.classList.remove('videos__item-active');
                    }, 20)
                   if(nigth === true){
                    card.querySelector('.videos__item-descr').style.color='#fff';
                    card.querySelector('.videos__item-views').style.color='#fff';
                   }
                }
                sliceTitle('.videos__item-descr', 55)
  })


  //create slice function 
  const sliceTitle  = (selector, count)=>{
      document.querySelectorAll(selector).forEach((item)=>{
          item.textContent.trim()
          if(item.textContent.length < count){
                           return ;
          }else{
              const str = item.textContent.slice(0, count+1)+'...';
              item.textContent=str;
          }
      })

  }
