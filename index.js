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


btnNavBar.addEventListener('click', enterMenuMobile);
btnCloseNavBar.addEventListener('click', exitMenuMobile);