var con = document.querySelector('#container');
var love = document.querySelector('i');

con.addEventListener('dblclick',function(){
    
    love.style.transform = 'translate(-50%,-50%) scale(1)';
    love.style.opacity = 0.8 // after double click opacity will be 0 to 0.8
    love.style.color = 'red'

    setTimeout(function(){
        
        love.style.transform = 'translate(-50%,-50%) scale(0)';

    },2000) // set timeout delays the within function 2000 = 2 secs
})
// we can add more set time outs