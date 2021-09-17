window.onunload = function() {};
window.onload = function() {
      r();
      l();
}
function r(){
          i = 360
}
var a = function(){
      i = localStorage.getItem('残り時間')
          i --;
      u = document.getElementById('p')   
u.innerHTML=　'残り'　+ i + '秒';
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
            i = localStorage.getItem('残り時間',i)
            }
     　function y(){
      clearInterval(g)
            i = 3600;
            localStorage.setItem('残り時間',i)    
      }