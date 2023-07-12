function count(){
	let txt, en, ws, wn, li;
    
    li = 0
    
    txt = $("#text").val();
    if (txt.match( /\n/g )){
        en = (txt.match( /\n/g )).length
        li = en + 1
    } else if (txt.match( /\S/g )){
        li = 1
    } else {
        li = 0
    };

    ws = txt.replace(/\n/g, "");
    $("#words-sp").val(ws.length);

    wn = txt.replace(/\s|　/g, "");
    $("#words-ns").val(wn.length);

    $("#lines").val(li);
}

function copy(){
    const ctxt = $("#text");
    ctxt.select();
    document.execCommand("copy");
    swal({
        title: "コピー完了",
        icon: "success",
        timer: 1500
    });
}

function reset(){
    $("#words-sp").val(0);
    $("#words-ns").val(0);
    $("#lines").val(0);
    $("#text").val(null);
}