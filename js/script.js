 //for accordion in footer in mobile responsive
    var acc = document.getElementsByClassName("sections");
var i;
 
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
 
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
 
        //   Toggle between hiding and showing the active panel
        var section = this.nextElementSibling;
        if (section.style.display === "block") {
            section.style.display = "none";
        } else {
            section.style.display = "block";
        }
    });
}


//for move to top (scroll btn)button in body 
const scrollBtn = document.getElementById("scrollTopBtn");
 
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
 
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


//to stop the body scrolling when the menu container of hamburger is open
document.addEventListener('DOMContentLoaded', function(){
    var sidemenu = document.getElementById('menu');
    var body = document.body;
    sidemenu.addEventListener('change' , function(){
        if(sidemenu.checked){
            body.classList.add('menu-items-open');
        }else{
            body.classList.remove('menu-items-open');
        }
    });
});



//for changing the currency when the country is changed
const countryCurrencyMap= {
    IN:'INR - Indian Rupee',
    US:'USD - Us Dollar',
    JP:'JPY- Japanese yen',
    GB:'GBP - British Pound Sterling',
};



function updateCurrency(){
const countrySelect = document.getElementById("country");
const currencySelect = document.getElementById("currency");
const selectedCountry=countrySelect.value;

currencySelect.innerHTML = '';

      if (selectedCountry && countryCurrencyMap[selectedCountry]) {
        const currencyValue = countryCurrencyMap[selectedCountry];
        const currencyCode = currencyValue.split(' ')[0];

        const option = document.createElement('option');
        option.value = currencyCode;
        option.textContent = currencyValue;

        currencySelect.appendChild(option);
      } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = '--Currency--';
        currencySelect.appendChild(option);
      }
    }

function updateCurrency1() {
    const countrySelect1 = document.getElementById("country1");
    const currencySelect1 = document.getElementById("currency1");
    const selectedCountry1 = countrySelect1.value;

    currencySelect1.innerHTML = '';

    if (selectedCountry1 && countryCurrencyMap[selectedCountry1]) {
        const currencyValue1 = countryCurrencyMap[selectedCountry1];
        const currencyCode = currencyValue1.split(' ')[0];

        const option = document.createElement('option');
        option.value = currencyCode;
        option.textContent = currencyValue1;

        currencySelect1.appendChild(option);
    } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = '--Currency--';
        currencySelect1.appendChild(option);
    }
}






//for dialog box in header li in desktop view
function myfunction() {
  var x = document.getElementById("click");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function myfunction1() {
  var x1 = document.getElementById("click1");
  if (x1.style.display === "none") {
    x1.style.display = "flex";
  } else {
    x1.style.display = "none";
  }
}

function myfunction2() {
  var x2 = document.getElementById("click2");
  if (x2.style.display === "none") {
    x2.style.display = "flex";
  } else {
    x2.style.display = "none";
  }
}




//in search section to change the heading according to li
const buttons = document.querySelectorAll('.list');
    const selectedText = document.getElementById('select');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const size = button.getAttribute('data-size');
        selectedText.textContent = `${size}`;
      });
    });





//opening the dropdown when the signin button is clicked
function dropdown(){
  const content=document.getElementById("drop");
  if(content.style.display == "block"){
    content.style.display ="none";
  }
  else{
    content.style.display="block";
  }
}
window.onclick=function(event){
  if(!event.target.matches('.dropdown')){
    document.getElementById('#drop').style.display="none";
  }
}


//to stop the body moving when sigin box is opened
    function dropdown() {
  const modal = document.getElementById("drop");

  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  } else {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    body.style.filter="blur(1)"
  }
}

document.getElementById("cancel").addEventListener("click", () => {
  dropdown();
});