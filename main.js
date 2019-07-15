var endpoint = "https://www.jsonstore.io/5234f7b5ed523f406fa03b5f254bee8d318f04f2ceac974f32c01103faad58a7";

function geturl(){
    var url = document.getElementById("urlinput").value;
	var url2 = document.getElementById("urlinput2").value;
	var url3 = document.getElementById("urlinput3").value;
   var url_M = [url, url2, url3];
	return url_M;
}

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function genhash(){
    if (window.location.hash == ""){
        window.location.hash = getrandom();
    }
}

function send_request(url) {
	url1 = url[0];
	url2 = url[1];
	url3 = url[2];
    this.url1 = url1;
this.url2 = url2;
this.url3 = url3;
    $.ajax({
        'url': endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.url1),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
$.ajax({
        'url': endpoint + "/" + window.location.hash.substr(2),
        'type': 'POST',
        'data': JSON.stringify(this.url2),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
$.ajax({
        'url': endpoint + "/" + window.location.hash.substr(3),
        'type': 'POST',
        'data': JSON.stringify(this.url3),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}

function shorturl(){
    var urls = geturl();
    genhash();
    send_request(urls);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var hashh = window.location.hash.substr(getRandomInt(1,4));

if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + hashh, function (data) {
        data = data["result"];

        if (data != null) {
            window.location.href = data;
        }

    });
}