# AddTorrentsDeluge.js

Add torrents to Deluge via Web API (requires patched deluge-web&lbrack;[1](https://raw.githubusercontent.com/lalbornoz/AddTorrentsDelugeTransmission/master/deluge-2.0.3%2BAddTorrentsDeluge.patch)&rbrack;
owing to missing functionality & unfixed bugs and ViolentMonkey due to 3rd-party
cookies)  
  
Eligible BitTorrent and/or Magnet links will have their opacity adjusted as per
``linkOpacity`` and queued on-click; the ``<Ctrl>`` key held on-click inhibits
script processing of BitTorrent and Magnet links to e.g. allow downloading a
BitTorrent file or Magnet protocol handlers to be run.
  
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
| linkOpacity            | 0.5                                 | Opacity of torrent links eligible for one-click queueing                                    |

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

[modeline]: # ( vim: set ff=dos tw=0: )
