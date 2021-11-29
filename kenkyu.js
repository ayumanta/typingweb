var p = document.getElementById('text')
var miss = document.getElementById('missLog')
var misstime = document.getElementById('misstime')
var textLists = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'f',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

function Start() {
    alert("タイピング開始")
    let nowTime = new Date(); //  現在日時を得る
    let nowHour = nowTime.getHours(); // 時間を抜き出す
    let nowMin  = nowTime.getMinutes(); // 分数を抜き出す
    let msg = "開始時刻：" + nowHour + ":" + nowMin + "　　　　  " + "20分後に終了ボタンを押してください。再びスタートボタンを押すとリセットされてしまいます。";
    document.getElementById("missLog").innerHTML = msg;
    document.getElementById("misstime").innerHTML = ;
}

function Finish() {
    var content = document.getElementById('misstime').innerText;
    navigator.clipboard.writeText(content);
    //content.ariaSelected();
    //document.execCommand('copy');

    alert("ご協力ありがとうございました。実験データをコピーしましたのでフォームへの入力をお願いします。");
}
var checkTexts = [];

miss.textContent='';

createText();

function createText() {

    var rnd = Math.floor(Math.random() * textLists.length);

    p.textContent = '';
    checkTexts = textLists[rnd].split('').map(function(value){
        var span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        return span;
    });
}

console.log(checkTexts);

document.addEventListener('keydown', keyDown);


function keyDown(e) {
    console.log(e.key);

    if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';

        checkTexts.shift();

        setTimeout(function(){
            console.log("I am the third log after 5 seconds");    
            if(!checkTexts.length) createText();
        },250);
        

        //if(!checkTexts.length) createText();
    }
    else{
        console.log('bad');
        let nowTime = new Date(); //  現在日時を得る
        let nowHour = nowTime.getHours(); // 時間を抜き出す
        let nowMin  = nowTime.getMinutes(); // 分数を抜き出す
        let nowSec  = nowTime.getSeconds(); // 秒数を抜き出す
        let msg = "ミス：" + nowHour + ":" + nowMin + "  ";
        //document.getElementById("misstime").innerHTML = msg;
        var missLogs = document.createElement('span');
        missLogs.innerHTML = msg;
        misstime.appendChild(missLogs);
    }

}
