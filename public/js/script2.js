$(document).ready(function () {
    var found = false;
    var json = JSON.parse(localStorage.getItem("CH"));
    console.log(json);
    var descendents = document.getElementById('container').getElementsByTagName('INPUT');
    for (var i = 0; i < descendents.length; ++i) {
        var e = descendents[i];
        if (e.type == "text") {
                found = false;
            for (var j = 0; j < json.answers.length; j++) {
                var ans = json.answers[j];
                if (ans.id == e.id) {
                    e.value = ans.answer;
                    found = true;
                }
            }
                if (found == false) {
                    $(e.parentNode).remove();
                    i--;
                }
        }
        if (e.type == "checkbox" || e.type == "radio") {
                found = false;
            for (var j = 0; j < json.answers.length; j++) {
                var ans = json.answers[j];
                if (ans.id == e.id) {
                    e.checked = true;
                    found = true;
                }
            }
                if (found == false) {
                    $(e.parentNode).remove();
                    i--;
                }
        }
    }
    
    var descendents = document.getElementById('container').getElementsByTagName('INPUT');
    for (var i = 0; i < descendents.length; ++i) {
        descendents[i].disabled = "true";
    }

});
