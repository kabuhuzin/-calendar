(function () {
'use strict';
let Weeklist = ['日', '月', '火', '水', '木', '金', '土'];
let EtMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//日付のデータを取得
let cudate = new Date();
let Year = cudate.getFullYear();
let Month = cudate.getMonth();
let cuDate = cudate.getDate();
let Day = cudate.getDay();

cudate.setDate(1);
Day = cudate.getDay();

let HYline = Math.ceil((Day + EtMonth[Month]) / 7);
let list = [];
for (let i = 0; i < 7 * HYline; i++) {
    list[i] = " ";
}
for (let i = 0; i < EtMonth[Month]; i++) {
    list[Day + i] = i + 1;
}

//年月の表示
let h1 = document.getElementById('h1');
h1.innerHTML = `${Year} / ${Month+1} / ${cuDate}`;

//日本時間を取得
function SETtime(){
    let date = new Date();
    let timediff = date.getTimezoneOffset()/60;　//返り値 -9
    let utc = new Date(date.getTime() + timediff)
    let cutime = new Date(utc.getTime() + 9);
    let Hour = ('0' + cutime.getHours()).slice(-2);
    let Minute = ('0' + cutime.getMinutes()).slice(-2);
    let Second = ('0' + cutime.getSeconds()).slice(-2);
    document.getElementById('jptime').innerHTML = `${Hour}:${Minute}:${Second}`;
}
setInterval(SETtime,1000);
    
//表の作成
let tbl = document.getElementById('tbl');
let div = document.createElement('div');
let tr = document.createElement('tr')
let td = document.createElement('td');
let tarea = document.createElement('textarea');
     tarea.setAttribute('rows', '8')
     

for (let i = 0; i < HYline * 2; i++) {
        let clone1 = tr.cloneNode();
        let tblTr = tbl.appendChild(clone1);
    for (let j = 0; j < 7; j++) {
            td.setAttribute('class', 'td' + i);
            let clone2 = td.cloneNode();
            tblTr.appendChild(clone2);
        }
    }

//配列の中に入れなおして、concatでつなげる
let class0 = document.getElementsByClassName('td0');
let class2 = document.getElementsByClassName('td2');
let class4 = document.getElementsByClassName('td4');
let class6 = document.getElementsByClassName('td6');
let class8 = document.getElementsByClassName('td8');

let child = [];
    for (let i = 0; i < 7; i++) {
        child[i] = class0[i];
    }

let child2 = [];
    for (let i = 0; i < 7; i++) {
        child2[i] = class2[i];
    }

let child3 = [];
    for (let i = 0; i < 7; i++) {
        child3[i] = class4[i];
    }

let child4 = [];
    for (let i = 0; i < 7; i++) {
        child4[i] = class6[i];
    }

let child5 = [];
    for (let i = 0; i < 7; i++) {
        child5[i] = class8[i];
    }

let date0 = child.concat(child2);
let date1 = date0.concat(child3);
let date2 = date1.concat(child4);
let date3 = date2.concat(child5);
let date4;


//行が１２にのとき、１１，１２行のクラスを取得、日付を入れる
if(HYline*2 === 12) {
    let class10 = document.getElementsByClassName('td10');
    let child6=[];
        for(let i = 0; i<7; i++){
            child6[i] = class10[i];
        }
    date4 = date3.concat(child6);
        for(let j = 0; j<date4.length; j++){
            date4[j].innerHTML = list[j];
            }
}else if (HYline*2 === 10) {
    for (let i = 0; i < date3.length; i++) {
        date3[i].innerHTML = list[i];
    }
}

let class1 = document.getElementsByClassName('td1');
let class3 = document.getElementsByClassName('td3');
let class5 = document.getElementsByClassName('td5');
let class7 = document.getElementsByClassName('td7');
let class9 = document.getElementsByClassName('td9');

let tdta1 = [];
    for(let i = 0; i < 7; i++){
        tdta1[i] = class1[i];
    }

let tdta3 = [];
    for(let i = 0; i < 7; i++){
        tdta3[i] = class3[i];
    }

let tdta5 = [];
    for(let i = 0; i < 7; i++){
        tdta5[i] = class5[i];
    }

let tdta7 = [];
    for(let i = 0; i < 7; i++){
        tdta7[i] = class7[i];
    }

let tdta9 = [];
    for(let i = 0; i < 7; i++){
        tdta9[i] = class9[i];
    }

let Tadate = tdta1.concat(tdta3);
let Tadate1 = Tadate.concat(tdta5);
let Tadate2 = Tadate1.concat(tdta7);
let Tadate3 = Tadate2.concat(tdta9);
let Tadate4;
    
if(HYline*2 === 12) {
    let class11 = document.getElementsByClassName('td11');
    let tdta11 = [];
        for(let i = 0; i<7; i++){
            tdta11[i] = class11[i]
        }
     Tadate4 = Tadate3.concat(tdta11);
        for(let j = 0; j<Tadate4.length; j++){
            tarea.setAttribute('class','tarea'+j);
            let cloneText = tarea.cloneNode();
            Tadate4[j].appendChild(cloneText);
        }
}else if(HYline*2 === 10) { 
    for(let i = 0; i<Tadate3.length; i++){
        tarea.setAttribute('class','tarea'+i);
        let cloneText = tarea.cloneNode();
        Tadate3[i].appendChild(cloneText);
    }
}
let tareaclass = document.getElementsByClassName('tarea0');
tareaclass[0].innerHTML = `今日の予定\n`+`:\n`+`:\n`;

//セルに色付け
//このコードだと、if文で祝日の日に色付けができないので、手動で色を付ける
//また、現在の日付のときに色付けするが、このコードだと色付けができない　たぶん
 
//日曜日の色付け
let td00 = class0[0];
let td01 = class0[1];
let td02 = class0[2];
let td03 = class0[3];
let td04 = class0[4];
let td05 = class0[5];
let td06 = class0[6];

let td0 = class0[0];
let td2 = class2[0];
let td4 = class4[0];
let td6 = class6[0];
let td8 = class8[0];

td0.style.color = 'tomato';
td2.style.color = 'tomato';
td4.style.color = 'tomato';
td6.style.color = 'tomato';
td8.style.color = 'tomato';

//土曜日の色付け
class0[6].style.color = 'rgb(65, 255, 255)';
class2[6].style.color = 'rgb(65, 255, 255)';
class4[6].style.color = 'rgb(65, 255, 255)';
class6[6].style.color = 'rgb(65, 255, 255)';
class8[6].style.color = 'rgb(65, 255, 255)';

//祝日色付け　12/23 天皇誕生日　24振替休日
class8[0].style.color = 'tomato';
class8[1].style.color = 'tomato';



if(HYline*2 === 10){
    let class10 = document.getElementsByClassName('td10');
    let td10 = class10[0];
    td10.style.color = "tomato";
    class10[6].style.color = "rgb(65, 255, 255)";
}
})();
