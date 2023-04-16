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