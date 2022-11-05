var nav = document.querySelector('nav');
      window.addEventListener('scroll',function(){
        if(window.pageYOffset > 10){
          nav.classList.add('bg-danger','shadow');
        }else{
          nav.classList.remove('bg-danger','shadow');
        }
      });