
/// Ultraviolet.js
(function(){javascript:winloc = window.location; searchparam = new URLSearchParams(winloc.search); url = searchparam.has('RAW') ? searchparam.get("RAW") : winloc.href.toString(); "http" != url.substring(0, 4) && (url = "https://" + url); winloc.href = "https://huapptesthingy.herokuapp.com/service/" + encodeURIComponent(url.toString().split("").map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(""));})();

/// AddLink.js
var idk = document.createElement(a);
idk.appendchild(document.createTextNode("Jump to ultraviolet ez"));
idk.setAttribute(href,'(function(){javascript:winloc = window.location; searchparam = new URLSearchParams(winloc.search); url = searchparam.has("RAW") ? searchparam.get("RAW") : winloc.href.toString(); "http" != url.substring(0, 4) && (url = "https://" + url); winloc.href = "https://huapptesthingy.herokuapp.com/service/" + encodeURIComponent(url.toString().split("").map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(""));})();');
document.body.appendchild(idk);
