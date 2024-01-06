var tablinks = document.getElementsByClassName("tab-links")
        var tabcontents = document.getElementsByClassName("tab-contents")

        function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwUgz_x0-Ddx6KeaZFnCAS_VXjDCmMfN2QA3m-x-gBJqUuYDtqOUCKDD2QkGga9hDO_2g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  document.addEventListener("DOMContentLoaded", function() {
    var parallax = document.querySelector(".parallax-section");
    var aboutSection = document.querySelector("#about");

    window.addEventListener("scroll", function() {
        var scrolled = window.pageYOffset;
        var rate = scrolled * 0.5; // Adjust the speed of the parallax effect

        // Applying the transform to create the parallax effect for the parallax section
        parallax.style.transform = "translateY(" + rate + "px)";

        // Applying the transform to create the parallax effect for the about section
        aboutSection.style.transform = "translateY(" + (rate * 0.2) + "px)"; // Adjust the speed of the parallax effect for the about section
    });
});