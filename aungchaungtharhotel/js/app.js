// Start Header
// start nav bar

function dropbtn() {
  document.getElementById("mydropdown").classList.toggle("show");
}

function dropfilter() {
  var getsearch, filter, getdropdiv, getlinks, linkvalue;

  getsearch = document.getElementById("search");
  filter = getsearch.value.toUpperCase();
  getdropdiv = document.getElementById("mydropdown");
  getlinks = getdropdiv.getElementsByTagName("a");

  for (var x = 0; x < getlinks.length; x++) {
    linkvalue = getlinks[x].textContent || getlinks[x].innerText;

    if (linkvalue.toUpperCase().indexOf(filter) > -1) {
      getlinks[x].style.display = "block";
    } else {
      getlinks[x].style.display = "none";
    }
  }
}

// end nav bar

// start auto background
function* genfun() {
  var index = 8;

  while (true) {
    yield index++;

    if (index > 13) {
      index = 8;
    }
  }
}

var getgen = genfun();

var getheader = document.querySelector("header");
getheader.style.backgroundImage = `url("./assets/img/banner/banner${
  getgen.next().value
}.jpg")`;

function autoload() {
  getheader.style.backgroundImage = `url("./assets/img/banner/banner${
    getgen.next().value
  }.jpg")`;
}

setInterval(autoload, 2500);
// end auto background
// End Header
