<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Form内容のファイル出力ツール</title>
    <h1>Form内容のファイル出力ツール</h1>
    <script>
        function dispText() {
            var text = "'" +
                document.formname.a001.value + "','" +
                document.formname.a002.value + "','" +
                document.formname.a003.value + "','" +
                document.formname.a004.value + "','" +
                document.formname.a005.value + "'";
            var blob = new Blob([text], { "type": "text/plain" });

            //IEの場合
            if (window.navigator.msSaveBlob) {
                window.navigator.msSaveBlob(blob, "outFileFromWindows.txt");
                //IE以外の場合
            } else {
                document.getElementById("createFile").href = window.URL.createObjectURL(blob);
            }
        }
    </script>
</head>
<body>
    <form name="formname" id="id_form" action="">
        <label id="001">Form1 : </label>
        <input type="text" name="a001" size="30" maxlenglabel="30" value="">
        </br>
        <label id="002">Form2 : </label>
        <input type="text" name="a002" size="30" maxlenglabel="30" value="">
        </br>
        <label id="003">Form3 : </label>
        <input type="text" name="a003" size="30" maxlenglabel="30" value="">
        </br>
        <label id="004">Form4 : </label>
        <input type="text" name="a004" size="8" maxlenglabel="8" value="">
        </br>
        <label id="005">Form5 : </label>
        <input type="text" name="a005" size="30" maxlenglabel="30" value="">
        </br>

        <a id="createFile" href="#" download="outFile.txt" value="ファイル作成" onclick="dispText()">ファイル作成</a>
    </form>
</body>
</html>