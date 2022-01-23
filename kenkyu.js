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
    let msg = "3分後に終了ボタンを押してください。再びスタートボタンを押すとリセットされてしまいます。";
    document.getElementById("missLog").innerHTML = msg;
    document.getElementById("misstime").innerHTML = " ";
    i = 0;
    collect = 0;
}

function Finish() {
    var content = document.getElementById('misstime').innerText;
    navigator.clipboard.writeText(content);
    //content.ariaSelected();
    //document.execCommand('copy');

    document.getElementById("finish").innerHTML = "ご協力ありがとうございました。実験データをコピーしましたのでフォームへの入力をお願いします。";

    alert("ご協力ありがとうございました。実験データをコピーしましたのでフォームへの入力をお願いします。");
}
var checkTexts = [];

var question = [];

miss.textContent='';

var i = 0;

var collect = 0;

createText();

function createText() {

    var rnd = Math.floor(Math.random() * textLists.length);

    
    if(i > 19){
        p.textContent = '';
        i = 0;
    }
    
    //while(i < 5){
    checkTexts = textLists[rnd].split('').map(function(value){
        var span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        i += 1;

        //createText();

        return span;

    });
//}
}

console.log(checkTexts);

document.addEventListener('keydown', keyDown);


function keyDown(e) {
    console.log(e.key);

    if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';

        checkTexts.shift();

        collect += 1;

        let collectcounter = "正解数:" + collect;

        document.getElementById("collectcount").innerHTML = collectcounter;

        console.log("I am the third log after 5 seconds");    
        if(!checkTexts.length) createText();
        

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
