document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var hamburgericon = navbarToggler.querySelector("i");

  navbarToggler.addEventListener("click", function () {
    hamburgericon.classList.toggle("fa-bars");
    hamburgericon.classList.toggle("fa-times");
  });

  // Tasbih counter
  let count = 0;

  const counterDisplay = document.getElementById("counterDisplay");
  const increment = document.getElementById("increment");
  const decrement = document.getElementById("decrement");
  const btnReset = document.getElementById("btnReset");

  increment.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
  });
  decrement.addEventListener("click", () => {
    if (counterDisplay.textContent > 0) count--;
    counterDisplay.textContent = count;
  });

  btnReset.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
  });

  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", function () {
      // If the clicked button is collapsed, remove the collapsed class and update aria-expanded
      if (this.classList.contains("collapsed")) {
        this.classList.remove("collapsed");
      }
      // Handle other buttons
      document.querySelectorAll(".accordion-button").forEach((otherButton) => {
        if (otherButton !== this) {
          otherButton.classList.add("collapsed");
        }
      });
    });
  });
// ==================== CARD  ===============================  //
  const name = document.getElementById("name");
  const cardnumber = document.getElementById("cardnumber");
  const expirationdate = document.getElementById("expirationdate");
  const securitycode = document.getElementById("securitycode");
  const output = document.getElementById("output");
  const ccicon = document.getElementById("ccicon");
  const ccsingle = document.querySelector("#ccsingle img");
  const generatecard = document.getElementById("generatecard");

  let cctype = null;

  //Mask the Credit Card Number Input
  var cardnumber_mask = new IMask(cardnumber, {
    mask: [
      {
        mask: "0000 000000 00000",
        regex: "^3[47]\\d{0,13}",
        cardtype: "american express",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}",
        cardtype: "discover",
      },
      {
        mask: "0000 000000 0000",
        regex: "^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}",
        cardtype: "diners",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}",
        cardtype: "mastercard",
      },
      // {
      //     mask: '0000-0000-0000-0000',
      //     regex: '^(5019|4175|4571)\\d{0,12}',
      //     cardtype: 'dankort'
      // },
      // {
      //     mask: '0000-0000-0000-0000',
      //     regex: '^63[7-9]\\d{0,13}',
      //     cardtype: 'instapayment'
      // },
      {
        mask: "0000 000000 00000",
        regex: "^(?:2131|1800)\\d{0,11}",
        cardtype: "jcb15",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(?:35\\d{0,2})\\d{0,12}",
        cardtype: "jcb",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}",
        cardtype: "maestro",
      },
      // {
      //     mask: '0000-0000-0000-0000',
      //     regex: '^220[0-4]\\d{0,12}',
      //     cardtype: 'mir'
      // },
      {
        mask: "0000 0000 0000 0000",
        regex: "^4\\d{0,15}",
        cardtype: "visa",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^62\\d{0,14}",
        cardtype: "unionpay",
      },
      {
        mask: "0000 0000 0000 0000",
        cardtype: "Unknown",
      },
    ],
    dispatch: function (appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, "");

      for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
        let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
        if (number.match(re) != null) {
          return dynamicMasked.compiledMasks[i];
        }
      }
    },
  });

  //Mask the Expiration Date
  var expirationdate_mask = new IMask(expirationdate, {
    mask: "MM{/}YY",
    groups: {
      YY: new IMask.MaskedPattern.Group.Range([0, 99]),
      MM: new IMask.MaskedPattern.Group.Range([1, 12]),
    },
  });

  //Mask the security code
  var securitycode_mask = new IMask(securitycode, {
    mask: "0000",
  });

  // SVGICONS
  let amex = "../assets/img/svg/result (9).svg";
  let visa = "../assets/img/svg/result (10).svg";
  let diners = "../assets/img/svg/result (11).svg";
  let discover = "../assets/img/svg/result (12).svg";
  let jcb = "../assets/img/svg/result (13).svg";
  let maestro = "../assets/img/svg/result (14).svg";
  let mastercard = "../assets/img/svg/result (15).svg";
  let unionpay = "../assets/img/svg/result (16).svg";

  let amex_single = "../assets/img/svg/result (1).svg";
  let visa_single = "../assets/img/svg/result (2).svg";
  let diners_single = "../assets/img/svg/result (3).svg";
  let discover_single = "../assets/img/svg/result (4).svg";
  let jcb_single = "../assets/img/svg/result (5).svg";
  let maestro_single = "../assets/img/svg/result (7).svg";
  let mastercard_single = "../assets/img/svg/result (8).svg";
  let unionpay_single = "../assets/img/svg/result.svg";

  //define the color swap function
  const swapColor = function (basecolor) {
    document.querySelectorAll(".lightcolor").forEach(function (input) {
      input.setAttribute("class", "");
      input.setAttribute("class", "lightcolor " + basecolor);
    });
    document.querySelectorAll(".darkcolor").forEach(function (input) {
      input.setAttribute("class", "");
      input.setAttribute("class", "darkcolor " + basecolor + "dark");
    });
  };

  //pop in the appropriate card icon when detected
  cardnumber_mask.on("accept", function () {
    console.log(cardnumber_mask.masked.currentMask.cardtype);
    switch (cardnumber_mask.masked.currentMask.cardtype) {
      case "american express":
        ccicon.src = amex;
        ccsingle.src = amex_single;
        swapColor("green");
        break;
      case "visa":
        ccicon.src = visa;
        ccsingle.src = visa_single;
        swapColor("lime");
        break;
      case "diners":
        ccicon.src = diners;
        ccsingle.src = diners_single;
        swapColor("orange");
        break;
      case "discover":
        ccicon.src = discover;
        ccsingle.src = discover_single;
        swapColor("purple");
        break;
      case "jcb" || "jcb15":
        ccicon.src = jcb;
        ccsingle.src = jcb_single;
        swapColor("red");
        break;
      case "maestro":
        ccicon.src = maestro;
        ccsingle.src = maestro_single;
        swapColor("yellow");
        break;
      case "mastercard":
        ccicon.src = mastercard;
        ccsingle.src = mastercard_single;
        swapColor("lightblue");

        break;
      case "unionpay":
        ccicon.src = unionpay;
        ccsingle.src = unionpay_single;
        swapColor("cyan");
        break;
      default:
        ccicon.src = "unionpay";
        ccsingle.src = "";
        swapColor("grey");
        break;
    }
  });

  //Generate random card number from list of known test numbers
  const randomCard = function () {
    let testCards = [
      "4000056655665556",
      "5200828282828210",
      "371449635398431",
      "6011000990139424",
      "30569309025904",
      "3566002020360505",
      "6200000000000005",
      "6759649826438453",
    ];
    let randomNumber = Math.floor(Math.random() * testCards.length);
    cardnumber_mask.unmaskedValue = testCards[randomNumber];
  };
  generatecard.addEventListener("click", function () {
    randomCard();
  });

  // CREDIT CARD IMAGE JS
  document.querySelector(".preload").classList.remove("preload");
  document.querySelector(".creditcard").addEventListener("click", function () {
    if (this.classList.contains("flipped")) {
      this.classList.remove("flipped");
    } else {
      this.classList.add("flipped");
    }
  });

  //On Input Change Events
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      document.getElementById("svgname").innerHTML = "John Doe";
      document.getElementById("svgnameback").innerHTML = "John Doe";
    } else {
      document.getElementById("svgname").innerHTML = this.value;
      document.getElementById("svgnameback").innerHTML = this.value;
    }
  });

  cardnumber_mask.on("accept", function () {
    if (cardnumber_mask.value.length == 0) {
      document.getElementById("svgnumber").innerHTML = "0123 4567 8910 1112";
    } else {
      document.getElementById("svgnumber").innerHTML = cardnumber_mask.value;
    }
  });

  expirationdate_mask.on("accept", function () {
    if (expirationdate_mask.value.length == 0) {
      document.getElementById("svgexpire").innerHTML = "01/23";
    } else {
      document.getElementById("svgexpire").innerHTML =
        expirationdate_mask.value;
    }
  });

  securitycode_mask.on("accept", function () {
    if (securitycode_mask.value.length == 0) {
      document.getElementById("svgsecurity").innerHTML = "985";
    } else {
      document.getElementById("svgsecurity").innerHTML =
        securitycode_mask.value;
    }
  });

  //On Focus Events
  name.addEventListener("focus", function () {
    document.querySelector(".creditcard").classList.remove("flipped");
  });

  cardnumber.addEventListener("focus", function () {
    document.querySelector(".creditcard").classList.remove("flipped");
  });

  expirationdate.addEventListener("focus", function () {
    document.querySelector(".creditcard").classList.remove("flipped");
  });

  securitycode.addEventListener("focus", function () {
    document.querySelector(".creditcard").classList.add("flipped");
  });

});
