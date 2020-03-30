# AddTorrentsDeluge.js

Add torrents to Deluge via Web API (requires patched deluge-web&lbrack;[1](https://raw.githubusercontent.com/lalbornoz/AddTorrentsDelugeTransmission/master/deluge-2.0.3%2BAddTorrentsDeluge.patch)&rbrack;&lbrack;[2](https://dev.deluge-torrent.org/ticket/3366)&rbrack;&lbrack;[3](https://dev.deluge-torrent.org/ticket/3367)&rbrack;
owing to missing functionality & unfixed bugs and ViolentMonkey due to 3rd-party
cookies)  
  
Eligible BitTorrent and/or Magnet links will have a clickable progress bar
appended to them and may be queued on-click; refer to their tooltips for a
detailed progress update.  
  
![Screenshot](https://raw.githubusercontent.com/lalbornoz/AddTorrentsDelugeTransmission/master/AddTorrentsDelugeScreenShot.png "Screenshot")
  
This script requires in-script configuration prior to usage. Consult the
following table and set, at minimum, ``delugeDownloadDir``, ``delugeHostId``,
``delugeTorrentDirectory``, ``delugeWebPassword``, and ``delugeWebUrl``.  
  
| Variable name          | Default value                       | Description                                                                                 |
| ---------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------- |
| debug                  | false                               | Print debugging messages to Web console                                                     |
| delugeDownloadDir      | ``"": "/var/lib/deluge/downloads"`` | Ordered dictionary of hostname and domain name keys mapping to download directory pathnames |
| delugeHostId           |                                     | Deluge host identifier (see ``<deluge directory>/.config/deluge/hostlist.conf``             |
| delugeHttpAuthPassword |                                     | HTTP basic access authentication password (optional)                                        |
| delugeHttpAuthUsername |                                     | HTTP basic access authentication username (optional)                                        |
| delugeTorrentDirectory | /var/lib/deluge/torrents            | Torrent directory pathname                                                                  |
| delugeWebPassword      |                                     | Deluge host web password                                                                    |
| delugeWebUrl           | protocol://hostname[:port]/deluge   | URL to deluge-web                                                                           |

# AddTorrentsTransmission.js

Add torrents to Transmission via RPC API
  
Eligible torrent links will have their opacity adjusted as per ``linkOpacity``
and queued on-click; the ``<Ctrl>`` key held on-click inhibits script processing
of torrent links to allow downloading a torrent file.
  
This script requires in-script configuration prior to usage. Consult the
following table and set, at minimum, ``downloadDir``, ``transmissionRpcAuth``,
and ``transmissionRpcUrl``.  
  
| Variable name       | Default value                            | Description                                                                    |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------------------------ |
| debug               | false                                    | Print debugging messages to Web console                                        |
| downloadDir         | ``"": "/absolute/path/to/download/dir"`` | Ordered dictionary of domain name keys mapping to download directory pathnames |
| transmissionRpcAuth |                                          | Double-colon (``:``) separated Transmission RPC username and password          |
| transmissionRpcUrl  | https://hostname:port/rpc                | URL to Transmission RPC                                                        |
| linkOpacity         | 0.5                                      | Opacity of torrent links eligible for one-click queueing                       |

# References

* ``Wed, 25 Mar 2020 11:00:50 +0100 [1]`` <a href="https://raw.githubusercontent.com/lalbornoz/AddTorrentsDelugeTransmission/master/deluge-2.0.3%2BAddTorrentsDeluge.patch" id="r1">deluge-2.0.3+AddTorrentsDeluge.patch</a>  
* ``Mon, 30 Mar 2020 14:02:23 +0200 [2]`` <a href="https://dev.deluge-torrent.org/ticket/3366" id="r2">#3366 (WebApi.add_torrents(): deferred RPC failure results are not propagated) – Deluge</a>  
* ``Mon, 30 Mar 2020 14:02:30 +0200 [3]`` <a href="https://dev.deluge-torrent.org/ticket/3367" id="r3">#3367 (WebApi.add_torrents(): implement in-stream BitTorrent file uploading support) – Deluge</a>  

[modeline]: # ( vim: set ff=dos tw=0: )
