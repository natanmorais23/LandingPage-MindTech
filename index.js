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