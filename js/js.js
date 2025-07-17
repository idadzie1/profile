
const portfolioData = [
  {
    photo:'./assets/ecommerce.jpg',
    title:'Fully responsive Admin page design with theme mode built from scratch using html, CSS and Javascript'
  },

  {
    photo:'./assets/ecommerce1.jpeg',
    title:'Fully responsive Admin page design with theme mode built from scratch using html, CSS and Javascript'
  },

  {
    photo:'./assets/generic.jpeg',
    title:'Responsive vehicle tracking landing page for s client, built from scratch using html, CSS and vallina Javascript'
  },

  {
    photo:'./assets/Hotel.jpeg',
    title:'Responsive vehicle tracking landing page for s client, built from scratch using html, CSS and vallina Javascript'
  },

  {
    photo:'./assets/ngo.jpeg',
    title:'E-commerce website, Fully responsive. Built from scratch using html, CSS and vallina Javascript'
  },

  {
    photo:'./assets/Travel and Tour.jpeg',
    title:'E-commerce website, Fully responsive. Built from scratch using html, CSS and vallina Javascript'
  },

  {

    photo: './assets/screen5.jpg',
    title: ' A Photo Gallery website'

  },

  {
    photo: './assets/screen1.jpg',
    title:'Fully responsive Admin dash board design with dark and light mode'
  },

  {
    photo: './assets/screen2.jpg',
    title: 'Custome bullt gps tracking website. Resposive'
  },


  {
    photo: './assets/screen3.jpg',
    title: 'gps tracking website'
  },

    {
    photo: './assets/screen7.jpg',
    title: 'Fully responsive Admin dash board design with dark and light mode'
  },


  {
    photo: './assets/screen8.jpg',
    title: 'Fully responsive Admin dash board design with dark and light mode'
  },

  {
    photo: './assets/screen9.jpg',
    title: 'Fully responsive Admin dash board design with dark and light mode'
  }


]

// ====== For Light and Dark team toggling and local storage================

const switcher = document.querySelector('.switcher');

const switchFn = ()=>{
    if(switcher.classList.contains('switch-light')){
    switcher.classList.remove('switch-light');
    switcher.classList.add('switch-dark');
    document.body.classList.toggle('theme');
    localStorage.setItem('mode', 'dark');
    

  } else if(switcher.classList.contains('switch-dark')){
    switcher.classList.remove('switch-dark');
    switcher.classList.add('switch-light');
    document.body.classList.toggle('theme');
    localStorage.setItem('mode', 'light');
  }
}

// ======== local storage ==========================
  const savedTheme = localStorage.getItem('mode');
  if(savedTheme === 'dark'){
    document.body.classList.add('theme')
  }else{
    document.body.classList.remove('theme')
  }




switcher.addEventListener('click', switchFn);


const sunIcon = document.querySelector('.light');
const moonicon = document.querySelector('.dark');

sunIcon.addEventListener('click', switchFn);
moonicon.addEventListener('click', switchFn);











// ============ Huamburger Menu ==============================

const hamburgerIcon = document.querySelector('.hamburgerIcon');
const menuItem = document.querySelector('.menu-class');
const closeIcon = document.querySelector('.closeicon');
const anchors = document.querySelectorAll('.menu-class ul a');

const showMenu =()=>{
 menuItem.classList.add('visible')
}

const hideMenu =()=>{
  menuItem.classList.remove('visible')
}


hamburgerIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu)

anchors.forEach(anchor =>{
  anchor.addEventListener('click', hideMenu)
})




// Assuming portfolioData is already defined as an array of objects [{photo: '...', title: '...'}, ...]

const dataDisplay = document.querySelector('.portfolio-display-item');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let count = 0;

const renderData = () => {
  const { photo, title } = portfolioData[count];
  dataDisplay.innerHTML = `
    <div class="image">
      <img src="${photo}" alt="${title}">
    </div>
    <div class="title">
      <h5>${title}</h5>
    </div>`;
};

const updateButtons = () => {
  prevBtn.disabled = count === 0;
  nextBtn.disabled = count === portfolioData.length - 1;
};

const nextFn = () => {
  if (count < portfolioData.length - 1) {
    count++;
    renderData();
    updateButtons();
    console.log('Forward count:', count);
  }
};

const prevFn = () => {
  if (count > 0) {
    count--;
    renderData();
    updateButtons();
    console.log('Prev count:', count);
  }
};

// Initial load
window.addEventListener('load', () => {
  renderData();
  updateButtons();
});

// Button event listeners
nextBtn.addEventListener('click', nextFn);
prevBtn.addEventListener('click', prevFn);















