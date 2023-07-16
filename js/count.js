function count(mode,str){
	let txt, en, ws, wn, li;
    li = 0;

    if (mode==='countAll') {
        txt = $("#text").val();
    } else {
        txt = str;
    }

    if (txt.match( /\n/g )){
        en = (txt.match( /\n/g )).length;
        li = en + 1;
    } else if (txt.match( /\S/g )){
        li = 1;
    } else {
        li = 0;
    };
    
    ws = txt.replace(/\n/g, "");
    wn = txt.replace(/\s|　/g, "");

    if (mode==='countSelection' && ws==0 && wn==0 && li==0){
        count("countAll");
    } else {
        $("#words-sp").text(ws.length);
        $("#words-ns").text(wn.length);
        $("#lines").text(li);
    }
}

function checkKeyup(event) {
    if (event.shiftKey && (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      countSelection();
    }
}

function checkMousedown() {
    $(document).on("mouseup",countSelection);
}

function countSelection() {
    const selectedText = $("#text").val().substring($("#text")[0].selectionStart, $("#text")[0].selectionEnd);
    count("countSelection",selectedText);
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
    $("#words-sp").text(0);
    $("#words-ns").text(0);
    $("#lines").text(0);
    $("#text").val(null);
}