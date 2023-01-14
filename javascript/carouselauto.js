var counter = 2;
setInterval(function(){
    document.getElementById('radiobtn' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);