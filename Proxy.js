
/// Ultraviolet.js
(function(){javascript:winloc = window.location; searchparam = new URLSearchParams(winloc.search); url = searchparam.has('RAW') ? searchparam.get("RAW") : winloc.href.toString(); "http" != url.substring(0, 4) && (url = "https://" + url); winloc.href = "https://reallypurple-node-production.up.railway.app/uv/service/" + encodeURIComponent(url.toString().split("").map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(""));})();

/// Confirm.js
winloc = window.location;
searchparam = new URLSearchParams(winloc.search);
url = searchparam.get("RAW");
if(searchparam.has('RAW') && confirm("*notices error* OwO what's this? A page that is blocked for being too kawaii and "+ searchparam.get("CAT") +"? *Translates url to ultraviolet xor cutely* U- UwU master here's your unblocked webpage nyaaaaaaaaa~~! pls accept my offering to get you to see "+ url +" master!")){
  (function(){
    "http" != url.substring(0, 4) && (url = "https://" + url);
    winloc.href = "https://reallypurple-node-production.up.railway.app/uv/service/" + encodeURIComponent(url.toString().split("").map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(""));})();
}

/// Eurda.js
(function () { var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();

/// AllowPaste.js
document.addEventListener('paste', function(e) {
  e.stopImmediatePropagation();
  return true;
}, true);

/// Ingot.js
(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';document.body.appendChild(a);}())

/// AddLink.js
/*var idk = document.createElement(a);
idk.appendchild(document.createTextNode("Jump to ultraviolet ez"));
idk.setAttribute(href,'(function(){javascript:winloc = window.location; searchparam = new URLSearchParams(winloc.search); url = searchparam.has("RAW") ? searchparam.get("RAW") : winloc.href.toString(); "http" != url.substring(0, 4) && (url = "https://" + url); winloc.href = "https://huapptesthingy.herokuapp.com/service/" + encodeURIComponent(url.toString().split("").map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(""));})();');
document.body.appendchild(idk);
*/
