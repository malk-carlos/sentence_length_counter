$(document).ready(function() {
  // ユーザーエージェントを取得
  var userAgent = navigator.userAgent.toLowerCase();

  // スマートフォンかタブレットの場合
  if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    // スマートフォン用スタイルシートを適用する
    $('link[rel="stylesheet"]').attr('href', './css/mobile.css');
  } else {
    // PC用スタイルシートを適用する
    $('link[rel="stylesheet"]').attr('href', './css/pc.css');
  }
});