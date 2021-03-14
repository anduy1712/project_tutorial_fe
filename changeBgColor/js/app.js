function hexChange(){
    const body = document.querySelector('body');
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','g','h'];
    const Values = document.querySelector('.hexValues');
    var hex = '#';
    for(var i = 0; i < 6;i++)
    {
        var ramdomIndex = Math.floor(Math.random()* hexValues.length);
        hex += hexValues[ramdomIndex];
        
    }
    
    Values.textContent = hex;
    body.style.background = hex;



}



