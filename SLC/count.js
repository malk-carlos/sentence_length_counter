function count(){
	var txt, en, ws, wn, li;

    li = 0

    txt = document.getElementById("text").value;
    if (txt.match( /\n/g )){
        en = (txt.match( /\n/g )).length
        li = en + 1
    } else if (txt.match( /\S/g )){
        li = 1
    } else {
        li = 0
    };

    ws = txt.replace(/\n/g, "");
    document.getElementById("words-sp").value = ws.length;

    wn = txt.replace(/\s|　/g, "");
    document.getElementById("words-ns").value = wn.length;

    document.getElementById("lines").value = li;
}

function copy(){
    var ctxt = document.getElementById("text");
    ctxt.select();
    document.execCommand("copy");
    swal({
        title: "コピー完了",
        icon: "success",
        timer: 1500
    });
}

function reset(){
    document.getElementById("words-sp").value = 0;
    document.getElementById("words-ns").value = 0;
    document.getElementById("lines").value = 0;
    document.getElementById("text").value = null;
}