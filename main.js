var endpoint = "https://www.jsonstore.io/5234f7b5ed523f406fa03b5f254bee8d318f04f2ceac974f32c01103faad58a7";

function geturl(){
    var lines = $('textarea').val().split('\n');
	return lines;
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

function send_request(lines) {

    $.ajax({
        'url': endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.lines.length),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
    for(var i = 0;i < lines.length;i++){
        my_url = lines[i];
        this.my_url = lines[i];
        $.ajax({
            'url': endpoint + "/" + window.location.hash.substr(i+1) + "-" + (i+1),
            'type': 'POST',
            'data': JSON.stringify(this.my_url),
            'dataType': 'json',
            'contentType': 'application/json; charset=utf-8'
    })
    }
}

function shorturl(){
    var urls = geturl();
    if (urls == "") {
        alert("No links entered!")
    }
    else {
    genhash();
    send_request(urls);
    }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

if (window.location.hash != "") {
    var hashh_number = window.location.hash.substr(1);

    $.getJSON(endpoint + "/" + hashh_number, function (data) {
        data = data["result"];

    });
    random_number = getRandomInt(1,data);
    var hashh = window.location.hash.substr(random_number);

    $.getJSON(endpoint + "/" + hashh + "-" + random_number, function (data) {
        data = data["result"];

        if (data != null) {
            window.location.href = data;
        }

    });
}

