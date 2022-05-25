var sub = document.getElementById("submit");
var fname = document.getElementById("fname");
var pass = document.getElementById("pass");
var lname = document.getElementById("lname");
var address = document.getElementById("address");
var mail = document.getElementById("mail");
var phone = document.getElementById("phone");
var accept = 1;
var p=1;



sub.addEventListener("click", function(event){
    var ph = phone.value;
    
    function checkph(str) {
      return /^01(0|1|2|5)\d{8}$/.test(str);
    }  
    
    if (isNaN(ph) || !checkph(ph))
      {
          accept=0;
          phone.className = "ac";
          myFunction1();
        }else{
            phone.className = "textBox";
        }
    var ail=mail.value;
    function checker(str) {
      return /^\w+(.\w+)?@\w+[.](com|org|edu|net)/i.test(str);
    } 
    if(!checker(ail))
    {
      accept=0;
      mail.className = "ac";
      myFunction2();
    }else{
        mail.className = "textBox";
    }

       function onlyCap(str) {
      return /^[A-Z]+$/.test(str);
    }
      function containNum(str) {
        return /[0-9]/.test(str);
      }
      function containWhite(str) {
        return /[' ']/.test(str);
      }

    var chars = pass.value.split("");

    if (!onlyCap(chars[0])) {
        accept=0;
        p=0;
        myFunction("must start with a capital letter");
    }
    if(!containNum(chars) )
    {
        accept = 0;
        p=0;
        myFunction("password must contain a digit");
    }
    if(containWhite(chars) )
    {
        accept = 0;
        p=0;
        myFunction("remove whitespace");
    }
    function containsSpecialChars(str) {
        const specialChars = /[#&_\-*]/;
        return specialChars.test(str);
      }
      if(!containsSpecialChars(chars)){
        accept = 0;
        p=0;
        myFunction("password must contain *-_&#");
      } // pass special
      if(p===0)
      {
        pass.className = "ac";
      }
      else{
          pass.className= "textBox";
      }
        if(accept === 0 )
   {
        event.preventDefault();
   }
   else{
     event.href="index.html";
   }
   accept = 1;
   p=1;
}
  );
  function myFunction(str) {
    var popup = document.getElementById("myPopup1");
    popup.className="show";
    popup.innerHTML=str;
    setTimeout(back, 2000);
  }  function myFunction1() {
    var popup = document.getElementById("myPopup2");
    popup.className="show";
    setTimeout(back2, 2000);
  }
  function back()
  {
      var popup = document.getElementById("myPopup1");
      popup.className="popuptext";
  }
  function back2()
  {
      var popup = document.getElementById("myPopup2");
      popup.className="popuptext";
  }
  function myFunction2() {
    var popup = document.getElementById("myPopup3");
    popup.className="show";
    setTimeout(back3, 2000);
  }
  function back3()
  {
      var popup = document.getElementById("myPopup3");
      popup.className="popuptext";
  }
