Add torrents to Deluge via Web API (requires patched deluge-web[\[1](#r1)]
owing to missing functionality & unfixed bugs and ViolentMonkey)

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

# References

* ``Wed, 25 Mar 2020 11:00:50 +0100 [1]`` <a href="https://raw.githubusercontent.com/lalbornoz/AddTorrentsDelugeTransmission/master/deluge-2.0.3%2BAddTorrentsDeluge.patch" id="r1">deluge-2.0.3+AddTorrentsDeluge.patch</a>  

[modeline]: # ( vim: set ff=dos tw=0: )
