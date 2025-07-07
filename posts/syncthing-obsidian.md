git@github.com:nbnotabene/obsidian-11ty.git

1. using obsidian to edit markdown
2. using syncthing to syncronize
3. using 11ty for static site generation
4. using NgInx for publishing  

  
to sync automatically when nb not logged in: Enable lingering for user nb  

| Task             | Command                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Install          | `sudo apt install syncthing`<br>/usr/bin/syncthing                                                                       |
| Enable lingering | keep user active on the server - even after logout!<br>sudo loginctl enable-linger nb<br>sudo loginctl disable-linger nb |
| Enable service   | `systemctl --user enable syncthing`                                                                                      |
| Start service    | `systemctl --user start syncthing`                                                                                       |
| Status check     | `systemctl --user status syncthing`                                                                                      |

GUI syncthing runs on `127.0.0.1:8384`

ID: 6fgs5-cmkap
/home/nb/Documents/obsidian/obsidian-11ty

Ubuntu (port 8385):
ssh -L 8385:localhost:8384 nb@digi

LOCAL SERVER for 11ty publishing site
~/Documents/obsidian/obsidian-11ty$ **npm run serve**

Static files in ~/Documents/obsidian/obsidian-11ty/dist