var endpoint = "https://www.jsonstore.io/bf4e60165117c73916d2fccefab9b9e0b003884543243585393b9f8632b1ce73";

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

    for(var i = 0;i < lines.length;i++){
        my_url = lines[i];
        this.my_url = my_url;
        $.ajax({
            'url': endpoint + "/" + window.location.hash.substr(1) + "-" + (i+1),
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
    else if(document.getElementById("folderinput").value == ""){
        alert("No name entered!")
    }
    else if (urls.length > 99) {
        alert("A maximum of 99 links are allowed!")
        
    }
    else if (window.location.hash != ""){
        alert("A link has already been generated!")

    } else {
        genhash();
        var folder_name = document.getElementById("folderinput").value;
        var encoded_folder = window.btoa(folder_name);
        window.location.hash = "-" + urls.length + "-" + window.location.hash + "@" + encoded_folder;
        send_request(urls);
    }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


if (window.location.hash != "") {

    number = window.location.hash.substring(2,4)
    number = number.replace(/\D/g,'');
    random_number = Math.round(Math.random() * (number-1)) + 1;
    var hashh = window.location.hash.substr(1);
    var encode_location = window.location.href.indexOf("@");
    var decoded_folder = window.atob(window.location.href.substring(encode_location+1));

    $.getJSON(endpoint + "/" + hashh + "-" + random_number, function (data) {
        data = data["result"];

        document.getElementById("folder_name").innerHTML = decoded_folder;
        document.getElementById("redirect_info").innerHTML = "You are being redirected to:";
        document.getElementById("redirect_info").style.fontSize = "25px";
        document.getElementById("redirect_url").innerHTML = data;
        document.getElementById("redirect_url").style.fontSize = "30px";
        document.getElementById("redirect_url").style.color = 'red';
        document.getElementById("button_click").innerHTML = "5";
        document.getElementById("folderinput").outerHTML = "";
        document.getElementById("folderlinks").outerHTML = "";
        document.getElementById("button_click").style.fontSize = "36px";

        if (data != null) {
            setTimeout(function(){
                document.getElementById("button_click").innerHTML = "4";
                setTimeout(function(){
                    document.getElementById("button_click").innerHTML = "3";
                    setTimeout(function(){
                        document.getElementById("button_click").innerHTML = "2";
                        setTimeout(function(){
                            document.getElementById("button_click").innerHTML = "1";
                            setTimeout(function(){
                                document.getElementById("button_click").innerHTML = "0";
                                window.location.href = data;
                                }, 1000);
                            
                            }, 1000);
                            
                        
                        }, 1000);
                        
            
                
                    }, 1000);
                   
           
            }, 1000);

           
        }

    });
}


