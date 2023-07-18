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

function changeColor() {
    
}