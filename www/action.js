window.onload = function() {
	var _href = window.location.href;
	var _hero = _href.substring(_href.indexOf("?") + 1);
	//_hero = 'arjjs';
	var _data = eval("__" + _hero);
	var _name = _data.name;
	console.log(_hero);
	
	document.getElementById("js_name").innerHTML = _data.name;
	document.getElementById("js_avatar").src = "./dota_hero_files/" + _hero + ".jpg";
	document.getElementById("js_avatar_big").src = "./dota_hero_files/" + _hero + "_big.jpg";
	document.getElementById("js_hp").innerHTML = _data.hp;
	document.getElementById("js_mp").innerHTML = _data.mp;
	document.getElementById("js_jiadian").innerHTML = _data.jiadian;
	document.getElementById("js_chuzhuang").innerHTML = _data.chuzhuang;
	document.getElementById("js_jineng").innerHTML = _data.jineng;
	
    // 配合
	var _peiheHTML = [];
	var _peihe = _data.peihe;
	for (var i=0;i < _peihe.length;i++) {
		_peiheHTML.push('<li><a target="_self" href="./dota_hero.htm?' + _peihe[i] + '"><img src="./dota_hero_files/' + _peihe[i] + '.jpg"><p>' + _peihe[i] + '</p></a></li>');
	}
	document.getElementById("js_peihe").innerHTML = _peiheHTML.join("");
	
	// 克制
	var _kezhiHTML = [];
	var _kezhi = _data.kezhi;
	for (var i=0;i < _kezhi.length;i++) {
		_kezhiHTML.push('<li><a target="_self" href="./dota_hero.htm?' + _kezhi[i] + '"><img src="./dota_hero_files/' + _kezhi[i] + '.jpg"><p>' + _kezhi[i] + '</p></a></li>');
	}
	document.getElementById("js_kezhi").innerHTML = _kezhiHTML.join("");

	var _xindeHTML = [];
	var _xinde = _data.xinde;
	_xindeHTML.push('<div class="title"><em></em><h3>使用心得</h3></div>');
	for (var i=0;i < _xinde.length;i++) {
		_xindeHTML.push('<p>' + _xinde[i] + '</p>');
	}
	document.getElementById("js_xinde").innerHTML = _xindeHTML.join("");
	
	var _duikangHTML = [];
	var _duikang = _data.duikang;
	_duikangHTML.push('<div class="title"><em></em><h3>如何克制</h3></div>');
	for (var i = 0; i<_duikang.length;i++) {
		_duikangHTML.push('<p>' + _duikang[i] + '</p>');
	}
	document.getElementById("js_duikang").innerHTML = _duikangHTML.join("");
}
