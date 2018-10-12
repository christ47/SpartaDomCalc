      document.addEventListener('DOMContentLoaded',function() {

        var calcbuttuns = document.getElementsByClassName('buttonNum');


        calcbuttuns [0].addEventListener('click', function(event){

          var displayedbutton = event.target.id;
          var displayscreen = document.querySelectorAll(' h2')[0];
          document.getElementById('screen').innerHTML = displayedbutton;

          console.log(displayedbutton);


var clear =   document.getElementsByClassName('clear')[0];

        })

      })
      //   switch () {
      //     case expression:
      //
      //       break;
      //     default:
      //
      //   }
      //
      //
      // })
