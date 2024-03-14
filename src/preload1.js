(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const vyondEmail = "sour.beaver4846@maildrop.cc";
    const vyondPass = "FmD$5J#a-rHugyd";
    const vyondOTP = 848242;

    console.log(process.pid);
    setInterval(() => {
      //   console.log("salam")

      document.querySelectorAll(".wezJt74svBnqaEE3SeiZ")[0].style.display =
        "none";
      document.querySelectorAll(".G_nFWQ39hZv0XxCeAkwA")[0].value = vyondEmail;
      document
        .querySelectorAll(
          "#app > div > div.btgDOBNRGaZBizqStCQ0 > div > form > div.k4RrO7HDuGmpx1_2RiME.oiqA88lxUUJP9QmiiI8H > button"
        )[0]
        .click();
      document.querySelectorAll(".G_nFWQ39hZv0XxCeAkwA")[1].value = vyondPass;
      document
        .querySelector(
          "#app > div > div.btgDOBNRGaZBizqStCQ0 > div > form > div.k4RrO7HDuGmpx1_2RiME.oiqA88lxUUJP9QmiiI8H > button"
        )
        .click();
      document
        .querySelector(
          "#app > div > div.T8Scyzh0So6HdB0_L3oz > div > div > div.gnkOo_MYPvduH8ckQYyx > button.avDWLsRJOK68Ry_otoAs.YC0YoDtioPjc9t0wtr42.Xsagb8QoVi2We7qdrHw_.xkvrxKW6aPJexIpz35JZ"
        )
        .click();
      document.querySelectorAll(".G_nFWQ39hZv0XxCeAkwA")[0].value = vyondOTP;
      document
        .querySelector(
          "#app > div > div.btgDOBNRGaZBizqStCQ0 > div > form > div:nth-child(4) > button"
        )
        .click();

      document.querySelector(
        "#app > div.page > nav > ul.TopBar_menuItem__AUQXo.TopBar_right__coJaz > li > div"
      )
        ? document
            .querySelector(
              "#app > div.page > nav > ul.TopBar_menuItem__AUQXo.TopBar_right__coJaz > li > div"
            )
            .remove()
        : console.clear();
      // Find the script tag with the specific src attribute
      var scriptToRemove = document.querySelector(
        'script[src="https://assets.vyond.com/lyra/vlp/68d5d93cc/js/main.f43a3e02.js"]'
      );

      // Check if the script tag was found
      if (scriptToRemove) {
        // Remove the script tag
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    }, 500);
  });
})();
