
let flgw = 1;
let flgA = 1;
function DisplayExper(id) {
    let elementweb = document.getElementById(id);

    if (flgw == 0 && id == "web-examp") {
        elementweb.style.display = "none";
        flgw = 1;
    }
    else
        if (flgw == 1 && id == "web-examp") {
            elementweb.style.display = "block";
            flgw = 0;
        }
        else

            if (flgA == 0 && id == "android-examp") {
                elementweb.style.display = "none";

                flgA = 1;

            }
            else
                if (flgA == 1 && id == "android-examp") {
                    elementweb.style.display = "block";
                    flgA = 0;
                }

}

function readMore() {
   var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}