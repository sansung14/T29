setInterval(function(){
    start = new Date();
    document.getElementById("hora").innerText=start.getHours();
    document.getElementById("minuto").innerText=start.getMinutes();
    document.getElementById("segundo").innerText=start.getSeconds();
},1000);
