var endpoint = "https://www.jsonstore.io/53a1d30c87ebcf20fe94b042be1ab6ad581c87ebe44baa7daeb665731f78fb40";
window.has_solved = false;
window.has_solved_index = false;

var correctCaptcha = function(response) {
window.has_solved = true;
};

var correctCaptcha_index = function(response) {
    if (window.location.hash != "") {
        redirect_person();
    }
    else{
        window.has_solved_index = true;
    }
};

function contact_us(){
    var data = $("form[name=algoForm]").serialize();
    if(document.getElementById("message_area").value.trim() == ""){
        alert("Nothing entered!")
    }
    else if(window.has_solved == false){
        alert("Please solve the Captcha");
    }
    else{
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyb2E3kgUvkuK7d4OGIsQ8KkrD4ZUTsW3i0ytYjsg/exec",
            type: "POST",
            data: data,
        })
    alert("Thank you for contacting me!")
    location.reload();
            
        }
}

if(window.location.href == "https://biggestbarnacle1.github.io/index.html"){
    window.location.href = "https://biggestbarnacle1.github.io";
}

function geturl(){
    var lines = $('textarea').val().split('\n');
	return lines;
}

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 35; i++)
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
            'url': endpoint + "/" + window.location.hash.substr(i+5) + "/" + (i+1),
            'type': 'POST',
            'data': JSON.stringify(this.my_url),
            'dataType': 'json',
            'contentType': 'application/json; charset=utf-8'
    })
    }
}

function shorturl(){
    if (window.location.hash == "") {
        var urls = geturl();
        if (urls == "") {
            alert("No links entered!")
        }
        else if(document.getElementById("folderinput").value.trim() == ""){
            alert("No name entered!")
        }
        else if (urls.length > 20) {
            alert("A maximum of 20 links are allowed!")
            
        }
        else if (window.location.hash != ""){
            alert("A link has already been generated!")

        }
        else if (window.has_solved_index == false){
            alert("Please solve the Captcha")

        } else {
            genhash();
            var folder_name = document.getElementById("folderinput").value;
            var encoded_folder = window.btoa(folder_name);
            window.location.hash = "/" + urls.length + "/" + window.location.hash + "@" + encoded_folder;
            send_request(urls);
        }
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
    var hashh = window.location.hash.substr(random_number+4);
    var encode_location = window.location.href.indexOf("@");
    var decoded_folder = window.atob(window.location.href.substring(encode_location+1));

    $.getJSON(endpoint + "/" + hashh + "/" + random_number, function (data) {
        window.data_link = data["result"];
        var lc = window.data_link.indexOf("/", 8)+1;
        var temp_display = window.data_link.substring(0, lc);
        var display_link = temp_display.concat("...");

        document.getElementById("folder_name").innerHTML = decoded_folder;
        document.getElementById("redirect_info").innerHTML = "You are being redirected to:";
        document.getElementById("redirect_info").style.fontSize = "25px";
        document.getElementById("redirect_url").innerHTML = display_link;
        document.getElementById("redirect_url").style.fontSize = "30px";
        document.getElementById("redirect_url").style.color = 'red';
        document.getElementById("button_click").innerHTML = "Solve the Captcha";
        document.getElementById("folderinput").outerHTML = "";
        document.getElementById("folderlinks").outerHTML = "";
        document.getElementById("button_click").style.fontSize = "36px";

    });
}

function redirect_person(){
    setTimeout(function(){
        document.getElementById("button_click").innerHTML = "5";
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
                            window.location.href = window.data_link;
                            }, 1000);
                        
                        }, 1000);
                        
                    
                    }, 1000);
                    
        
            
                }, 1000);
               
       
        }, 1000);
    }, 1000);

}

