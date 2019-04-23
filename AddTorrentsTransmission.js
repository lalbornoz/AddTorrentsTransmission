// ==UserScript==
// @description   Add torrents to Transmission via RPC
// @grant         GM.xmlHttpRequest
// @icon          https://raw.githubusercontent.com/transmission/transmission-icons/master/Transmission-Icon-32.png
// @match         https://*.iptorrents.com/*
// @name          Add torrents to Transmission via RPC
// @version       1.1
// ==/UserScript==

/*
 * Tunables
 */
var debug = false;
var downloadDir = "";
var transmissionRpcUrl = "https://username:password@hostname:port/rpc";
var linkOpacity = 0.5;

// {{{ function cbClick(e)
function cbClick(e) {
  if (!e.ctrlKey) {
    e.stopPropagation(); e.preventDefault();
    logDebug("[Transmission] Sending GET request for " + this.href);
    GM.xmlHttpRequest({
      method: "GET",
      responseType : "arraybuffer",
      onreadystatechange: function (r) {
        logDebug("[Transmission] GET request completed, readyState=" + r.readyState + " status=" + r.status);
        if ((r.readyState === 4)
        &&  (r.status === 200)) {
          logDebug("[Transmission] Sending HEAD request to " + transmissionRpcUrl);
          GM.xmlHttpRequest({
            method: "HEAD",
            onload: function (r_) {cbResponse(r.response, r_)},
            url: transmissionRpcUrl
          });
        }
      },
      url: this.href
    });
  }
}
// }}}
// {{{ function cbResponse(torrent, r)
function cbResponse(torrent, r) {
  let args = {
    arguments: {metainfo: btoa(String.fromCharCode(...new Uint8Array(torrent)))},
    method: "torrent-add"};
  let sessionId = r.responseHeaders.split("\n").reduce(
    (acc, rh) => {
      rh = rh.split(": ");
       if (rh[0] === "x-transmission-session-id") {
        return (acc + rh[1]);
      } else {
        return acc;
      }
    }, "");

  if (downloadDir.length) {
    args.arguments["download-dir"] = downloadDir;
  }
  logDebug("[Transmission] HEAD request completed, sending POST request");
  GM.xmlHttpRequest({
    data: JSON.stringify(args),
    headers: {"Accept": "text/xml", "X-Transmission-Session-Id": sessionId},
    method: "POST",
    onload: cbResponsePost,
    url: transmissionRpcUrl
  });
}
// }}}
// {{{ function cbResponsePost(r)
function cbResponsePost(r) {
  logDebug("[Transmission] POST request completed");
  r_ = JSON.parse(r.responseText);
  if ("torrent-added" in r_.arguments) {
    alert("Torrent added successfully as #" + r_.arguments["torrent-added"].id.toString());
  } else if ("torrent-duplicate" in r_.arguments) {
    alert("Duplicate torrent added successfully as #" + r_.arguments["torrent-duplicate"].id.toString());
  } else {
    alert(r_.result);
  }
}
// }}}
// {{{ function logDebug(msg)
function logDebug(msg) {
  if (debug) {
    console.log(msg);
  }
}
// }}}

function main() {
  logDebug("[Transmission] Entry point");
  for (let link of document.links) {
    if (link.href.match(/\.torrent$/i)) {
      link.addEventListener("click", cbClick, true);
      link.style.opacity = linkOpacity;
      logDebug("[Transmission] Registered " + link.href);
    }
  }
}

main();

// vim:expandtab fileformat=dos sw=2 ts=2
