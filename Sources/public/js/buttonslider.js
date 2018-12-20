document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelectorAll('.nextslide ul li'),
        allslide=document.querySelectorAll('.slider ul li');

       for(var i=0; i<btn.length; i++){
           btn[i].addEventListener('click', function () {
               for(var i=0; i<btn.length; i++){
                   btn[i].classList.remove('isactive');
               }
               this.classList.add('isactive');
               //viết hàm chuyển slide
              var kichhoat = this;
              var vitri = 0;
              for( vitri = 0; kichhoat = kichhoat.previousElementSibling; vitri++){}
                  for(var i = 0; i< allslide.length; i++){
                      allslide[i].classList.remove('activesld');
                      allslide[vitri].classList.add('activesld');
                  }
           })
       }
       // đặt thời gian
    autoslider();
       function autoslider() {
           var thoigian = setInterval(function () {
              var indexsl=0;
              var nows =document.querySelector('.slider ul li.activesld');
              for(indexsl=0; nows=nows.previousElementSibling; indexsl++){}
              if(indexsl <= (allslide.length-2)) {
                  for (var i = 0; i < allslide.length; i++) {
                      allslide[i].classList.remove('activesld');
                      btn[i].classList.remove('isactive');
                  }
                  allslide[indexsl].nextElementSibling.classList.add('activesld');
                  btn[indexsl].nextElementSibling.classList.add('isactive');
              }
              else {
                  for (var i = 0; i < allslide.length; i++) {
                      allslide[i].classList.remove('activesld');
                      btn[i].classList.remove('isactive');
                  }
                  allslide[0].classList.add('activesld');
                  btn[0].classList.add('isactive');
              }

           }, 6000);
       }


})
