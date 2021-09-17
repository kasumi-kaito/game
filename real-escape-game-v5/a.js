window.onunload = function() {};
i = null
function x(){
      i = localStorage.getItem('残り時間')
      if(i === null){
            i = 3600;
            localStorage.setItem('残り時間',i)
      }
}
var a = function(){
      i = localStorage.getItem('残り時間')
          i --;
      u = document.getElementById('p')   
u.innerHTML =　'残り'　+ i + '秒';
     if(i < 600){
     u.className = 't'
     }
     if(i==0){ 
           clearInterval(g);
      }
            localStorage.setItem('残り時間',i)   
}
 g = setInterval(a,1000)
      function l(){
            i = localStorage.getItem('残り時間')
            }
     　function y(){
      clearInterval(g)
            i = 3600;
            localStorage.setItem('残り時間',i)    
      }
     