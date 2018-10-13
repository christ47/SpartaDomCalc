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

          console.log(eval(myString))

          document.getElementById('screen').innerHTML = eval(myString);
      })
      }
  })        //
          //


          document.addEventListener('DOMContentLoaded',function() {
            var clearFunc = document.querySelectorAll('.buttonClear');


              for (var i = 0; i < clearFunc.length; i++) {
              clearFunc[i].addEventListener('click', function(event){

                document.getElementById('screen').innerHTML
                = this.value;
                var cleared = this.value;
                myString == cleared ;
                console.log(cleared);

              }
              )
              }
          })
          // for (var i = 0; i < OpButton.length; i++) {
          //   OpButton[i].addEventListener('click',function(event){
          //     document.getElementById('screen').innerHTML
          //     += this.value;
          //     var Op = this.value;
          //     console.log(Op);
          //     myString += Op;
  //

          //
