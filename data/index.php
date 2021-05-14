//index.php

<!DOCTYPE html>

<html lang="ja" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>

<body>

<?php
$myfile = fopen("./hoge.txt", "a")  //fileを上書きモードで開く
?>

<?php fwrite($myfile, $_POST['sendPHP']. "\n"); ?>
<?php fwrite($myfile, $_POST['sendPHP2']. "\n"); ?>
<?php
fclose($myfile);
?>

</body>
</html>