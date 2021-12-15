const gun = GUN();

paste = document.getElementById("paste");

copy = gun.get('test').get('paste');
paste.oninput = () => { copy.put(paste.value) };
copy.on((data) => { paste.value = data });
