function count(){
	var txt, en, ws, wn, sp, li;

    li = 0

    txt = document.getElementById("text").value;
    if (txt.match( /\n/g )){
        en = (txt.match( /\n/g )).length
        li = en + 1
    } else if (txt.match( /\S/g )){
        li = 1
    } else {
        li = 0
    }
    ;

    ws = txt.replace(/\n/g, ""); 
    ws = ws.length;
    document.getElementById("words-sp").value = ws;

    wn = txt.replace(/\s|　/g, "");
    wn = wn.length
    document.getElementById("words-ns").value = wn;

    document.getElementById("lines").value = li;

    console.log(en, sp, ws, wn, li)

}

function copy(){
    var ctxt = document.getElementById("text");
    ctxt.select();
    document.execCommand("copy");
    ctxt.selectedIndex = -1;
}

function reset(){
    document.getElementById("words-sp").value = 0;
    document.getElementById("words-ns").value = 0;
    document.getElementById("lines").value = 0;
    document.getElementById("text").value = null;
}