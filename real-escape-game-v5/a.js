window.onload = function() {a();}
i = 3600;
var a = function(){
          i --;
      u = document.getElementById('p')   
u.innerHTML=　'残り'　+ i + '秒';
     if(i < 600){
     u.className = 't'
     }
     if(i==0){
      clearInterval(a);
      }
}

setInterval(a,1000)