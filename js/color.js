function setting() {
    $("#setMenu").css({"display":"unset","animation":"setting .5s"})
    $("#closeSetting").css({"display":"unset"})
    $("#setting").css({"display":"none"})
}

function closeSetting() {
    $("#setMenu").css({"animation":"closeSetting .5s"})
    $("#closeSetting").css({"display":"none"})
    $("#setting").css({"display":"unset"})
    setTimeout(()=>{$("#setMenu").css({"display":"none"})},400)
}

function changeColor(){
    const backGround = $("body")
    const fonts = $("h1,.capt-td")
    const textarea = $("textarea,.len-display")
    const btn = $("#copy,#reset")

    backGround.css({"background-color":`${$("#backGroundColor").val()}`})
    fonts.css({"color":`${$("#fontsColor").val()}`})
    textarea.css({
        "color":`${$("#textareaColor").val()}`,
        "background-color":`${$("#textareaBack").val()}`,
        "border-color":`${$("#textareaBorder").val()}`
    })
    btn.css({
        "color":`${$("#btnColor").val()}`,
        "background-color":`${$("#btnBack").val()}`
    })
}

function resetColor(){
    $("#backGroundColor").val("#333333")
    $("#fontsColor").val("#ffffff")
    $("#textareaBack").val("#00594c")
    $("#textareaBorder").val("#8B4720")
    $("#textareaColor").val("#ffffff")
    $("#btnBack").val("#aaaaaa")
    $("#btnColor").val("#333333")
    changeColor()
}