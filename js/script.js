// make varieble
const swicher = document.querySelector('#cbx'),
more = document.querySelector('.more'),
modal = document.querySelector('.modal'),
videos = document.querySelectorAll('.videos__item'),
videosWraper = document.querySelector('.videos__wrapper');
let player;
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
                    }, 20);
                    bindNewModal(card)
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
//open  function open modal

const openModal = () =>{
    modal.style.display = 'block';
}

// close fuunction close modal
const closeModal = ()=>{
    modal.style.display= 'none';
    //when close modal callback 
    player.stopVideo();
}
//bind function modal 
const bindModal= (car) =>{
    car.forEach(item =>{
      item.addEventListener('click', (event)=>{
    event.preventDefault();
    // take wideo id by video 
       const id=item.getAttribute('data-url');
       // callback function 
       loadVideo(id);
    
        openModal();
      })
    })
  
  }
bindModal(videos);
  //one bind card open modal
  const bindNewModal=(cards) =>{
    cards.addEventListener('click', (event)=>{
        event.preventDefault();
        // take wideo id by video 
          const id=cards.getAttribute('data-url');
          loadVideo(id);
      
       
         openModal();
       }) 
}

//close modal
modal.addEventListener('click', event=>{
    let target = event.target;
    event.preventDefault();
    if(!target.classList.contains('modal__body')){
        closeModal();
    }
})


//work with api iframe for show video
   const createVideo = () =>{
           // 2. This code loads the IFrame Player API code asynchronously.
      let tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      setTimeout(()=>{
        player  = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: 'M7lc1UVf-VE',
           
          });
      },1300)
      
   }
   createVideo();
   function loadVideo (id){
    player.loadVideoById({'videoId': `${id}`})
     }