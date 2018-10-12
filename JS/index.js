  var myString =""
      document.addEventListener('DOMContentLoaded',function() {

          var calcbuttuns = document.querySelectorAll('.buttonNum');

          var OpButton = document.querySelectorAll('.operator');

          // myNum = 0;
          for (var i = 0; i < calcbuttuns.length; i++) {
            calcbuttuns[i].addEventListener('click',function(event){
              document.getElementById('screen').innerHTML
              += this.value;
              var num1 = this.value;
              // if ('click') {
              // var num1 = document.getElementsByClassName'.buttonNum'.value;
              // console.log(num1);}
              // console.log(num1);
              console.log(num1);
              myString += num1;
            });

          }
            for (var i = 0; i < OpButton.length; i++) {
              OpButton[i].addEventListener('click',function(event){
                document.getElementById('screen').innerHTML
                += this.value;
                var Op = this.value;
                console.log(Op);
                myString += Op;

              // }



            })
          }
          // function equate(myString) {
          //
          //   // document.getElementsByTagName'h2'.innerHTML = eval(myString);
          // }




    });
  document.addEventListener('DOMContentLoaded',function() {
    var equalsign = document.querySelectorAll('.equals');

      for (var i = 0; i < equalsign.length; i++) {
      equalsign[i].addEventListener('click', function(event){

          console.log(eval(myString));

          document.getElementById('screen').innerHTML = eval(myString)
      })
      }
  })        //
          // {
          //
          //   var displayedbutton = event.target.button;
          //
          //   document.getElementById('screen').innerHTML = displayedbutton;
          //
          //   console.log(displayedbutton);

// var clear =   document.getElementsByClassName('clear')[0];



    //   }
    // })
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
