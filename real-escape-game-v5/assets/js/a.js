window.onload = function() {
      r();
      load();
}
function r(){
      i = 3600; }
var a = function(){
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
      function load(){
            i = localStorage.getItem('残り時間',i)
            }
      function y(){
            clearInterval(g);
            localStorage.clear()
            i = 3600;
            localStorage.setItem('残り時間',i)    
      }