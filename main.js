const gun = GUN(['wss://marshy-polarized-pocket.glitch.me/gun']);

paste = document.getElementById("paste");

copy = gun.get('test').get('paste_');
paste.oninput = () => { copy.put(paste.value) };
copy.on((data) => { paste.value = data }, true);
