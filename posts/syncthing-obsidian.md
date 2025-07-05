1. using obsidian to edit markdown
2. using 11ty for static site generation
3. using syncthing to syncronize
4. using NgInx for publishing  

  
to sync automatically when nb not logged in: Enable lingering for user nb  

|Task|Command|
|---|---|
|Install|`sudo apt install syncthing`|
|Enable lingering|`sudo loginctl enable-linger nb` sudo loginctl disable-linger nb|
|Enable service|`systemctl --user enable syncthing`|
|Start service|`systemctl --user start syncthing`|
|Status check|`systemctl --user status syncthing`|


GUI runs on `127.0.0.1:8384`

ID: 6fgs5-cmkap
/home/nb/Documents/obsidian/obsidian-11ty

Ubuntu (port 8385):
ssh -L 8385:localhost:8384 nb@digi