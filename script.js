function changeBgColor(){
    console.log()
    var letters =  'ABCDEF0123456789'
    var color = '#';
     
    for (var i = 0; i < 6; i++ ){
        var r = Math.floor(Math.random() * 16);
        color = color + letters[r];
    }
    document.body.style.background = color
}