function count(mode,str){
	let txt, ret, char, noSpace, li, noEmpty;
    li = 0;

    if (mode==='countAll') {
        txt = $("#text").val();
    } else {
        txt = str;
    }

    if (txt.match( /\n/g )){
        ret = (txt.match( /\n/g )).length;
        li = ret + 1;
    } else if (txt.match( /\S/g )){
        li = 1;
    } else {
        li = 0;
    };
    const lines = txt.split(/\n/);  // テキストを改行で分割して配列に格納
    const nonEmptyLines = lines.filter(function(line) {
    return line.trim() !== '';  // 空白行以外の行のみを抽出
    });
    noEmpty = nonEmptyLines.length;  // 空白行を除外した行数を取得
    
    char = txt.replace(/\n/g, "");
    noSpace = txt.replace(/\s|　/g, "");

    if (mode==='countSelection' && char==0 && noSpace==0 && li==0){
        count("countAll");
    } else {
        $("#char").text(char.length);
        $("#char-noSpace").text(noSpace.length);
        $("#lines").text(li);
        $("#lines-noEmpty").text(noEmpty);
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
    $("#char").text(0);
    $("#char-noSpace").text(0);
    $("#lines").text(0);
    $("#lines-noEmpty").text(0);
    $("#text").val(null);
}