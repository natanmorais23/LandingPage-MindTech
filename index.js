$("#form-contact").submit(function(e){
    var url = "https://mind-tech-backend-production.up.railway.app/api/new-client-and-message";
    $.ajax({
        type: "POST",
        url: url,
        data: $("#form-contact").serialize(),
        success: function(){
            alert("Pedido enviado!");
        }
        
    });
    e.preventDefault();
});

const btnWho = document.getElementById("menu-item-who");
const btnServices = document.getElementById("menu-item-services");
const btnContact = document.getElementById("menu-item-contact");

const btnNavBar = document.getElementById("btn-mobile");
const btnCloseNavBar = document.getElementById("btn-mobile-close");

const mobileMenu = document.getElementById("mobileMenu");

const enterMenuMobile = () => {
    mobileMenu.style.animation = 'enterMenu .8s forwards ease-in-out';
}

const exitMenuMobile = () => {
    mobileMenu.style.animation = 'exitMenu .8s forwards ease-in-out'
    console.log("test")
}

btnWho.addEventListener('click', exitMenuMobile);
btnServices.addEventListener('click', exitMenuMobile);
btnContact.addEventListener('click', exitMenuMobile);

btnNavBar.addEventListener('click', enterMenuMobile);
btnCloseNavBar.addEventListener('click', exitMenuMobile);


const controls = document.querySelectorAll('.control');

let current_item = 0;
const items = document.querySelectorAll('.card');
const maxItems = items.length;
const carouselContainer = document.querySelector('.container');

var interval = setInterval(function(){
    current_item++;
    changeCarouselItem();
    
}, 3000);

const checkIfIsInView = setInterval(function(){
    if(isInViewport(carouselContainer)){
        if(interval==false){
            startTheInterval();
        }
        
    }else{
        clearInterval(interval);
        interval=false;
    }
}, 400);

controls.forEach(control =>{
    control.addEventListener('click', (e)=>{
        isLeft = e.target.classList.contains("arrow-left");
        if(isLeft){
            
            current_item-=1;
                   
        }else{            
            current_item+=1;            
        
        }
        changeCarouselItem();
    })
})

startTheInterval=()=>{
    clearInterval(interval);
    interval = setInterval(function(){
        current_item++;
        changeCarouselItem();
    }, 4000);
}

changeCarouselItem=()=>{    

    if(current_item>=maxItems){
        current_item=0;

    }

    if(current_item<0){
        current_item=maxItems-1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    
    items[current_item].scrollIntoView({            
        behavior: "smooth",            
        block: "nearest"
            
    });
        
    items[current_item].classList.add("current-item");
    startTheInterval();
}



function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}