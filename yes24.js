






// 設置：刷新間隔
timeout = prompt('頁面刷新間隔（每10豪秒）：');
// 初始化變量
count = 0; // 已刷新次數
current = location.href; // 當前頁面鏈接
if (timeout > 0) setTimeout('reload()', 10 * timeout);
else location.replace(current);
// 自動重載頁面
function reload() {
    // 刷新頁面，更新刷新次數
    setTimeout('reload()', 1000 * timeout);
    count++;
    console.log(`每${timeout}秒自動刷新，刷新次數：${count}`);
    // 創建frame，保證刷新的是frame內容，而不會在刷新整個頁面後清除掉本頁執行代碼，停止刷新
    fr4me = '<frameset cols=\'*\'>\n<frame id src=\'' + current + '\'/>';
    fr4me += '</frameset>';
    checkInfo()
    // 刷新嵌套的frame
    with (document) {
        write(fr4me);
        void (close());
    }
}
// 檢查是否滿足條件
function checkInfo() {
    if (document.querySelector('[data-year]') != null) {
        document.querySelectorAll('[data-year]')[0].click()
        document.querySelector('.rn-bb03').click()
    }
}





//每秒刷新頁面，自動打開售票窗口

let time = 1000
//外部standby階段(每1秒跑一次)
let standby = setInterval(() => {
    let count = 0
    current = location.href
    fr4me = '<frameset cols=\'*\'>\n<frame id src=\'' + current + '\'/>';
    fr4me += '</frameset>';
    if (document.querySelector('[data-year]') == null) {
        count++;
        console.log(`每${time / 1000}秒自動刷新，刷新次數：${count}`);
        with (document) {
            write(fr4me);
            void (close());
        }
    }
    else {
        clearInterval(standby)
        document.querySelectorAll('[data-year]')[0].click()
        document.querySelector('.rn-bb03').click()
    }
}, 1 * time)



//不刷新，僅點擊賣票頁
let time =100
let standby = setInterval(()=>{
    if(document.querySelector('.rn-bb03')!= null){
        letmein()
        clearInterval(standby)
    }
    else{ console.log(`每${time/1000}秒找1次`)}
},1*time)

function letmein(){
    if(document.querySelector('[data-year]')==null){document.querySelector('.rn-bb03').click()}
    else{document.querySelectorAll('[data-year]')[0].click()
    document.querySelector('.rn-bb03').click()
}}




//操作說明:
//1.整點刷新頁面成功打開售票視窗後，F12打開console區塊，貼入程式碼+enter
//2.購票流程共有5個頁面，每進入一個頁面就貼一次程式碼+enter，直到信用卡結帳頁面時改為手動操作
//3.當頁面無跳轉或是出現彈跳視窗，按enter把彈跳關掉，並再次貼程式碼+enter
//4.至票區頁面時，會自動逐區抓票，不須操作
//5.當撞票時把彈跳視窗關掉，程式碼會自動再去下區抓票
//6.可隨時切回手動，勿按F5避免購票流程歸零

//參數區域
//date為購票日期，第一天為0、第二天為1、第三天為2...
//speed為票區逐區抓票速度，預設1000為每秒跨一次區域，建議勿調整
let date = 0; 
let speed = 1000;
window.alert = function () { }
//選日期
if (document.querySelector('[name=ifrmSeatFrame]') == null) {
    if (document.querySelector('#ulSeatSpace li') == null) {
        document.querySelectorAll('.select a ')[date].click()
        //if(document.querySelector('#selSeatClass')!=null){document.querySelector('#selSeatClass').value=1}
    }
    else { document.querySelector('#StepCtrlBtn01 a').click() }
}

//選座位: 如Array沒展開就先選區域，再選位子
else {
    if (document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelector('#divSeatArray').children.length == 0) {
        let num = 0
        getarea(num)
        let getticket = setInterval(() => {
            if (document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelector('[grade]') == null) {
                num++
                getarea(num)
            } else {
                document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelector('[grade]').click()
                document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelector('.booking').parentElement.click()
                if(document.querySelector('#step03').style.display == 'block'){clearInterval(getticket)}
                else{num++
                    getarea(num)}
            }

        }, 1*speed)

        function getarea(area) {
            if (document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelectorAll('area')[area] != null) {
                document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelectorAll('area')[area].click()
            }
            else { num = 0 }
        }
    }
}
//確認張數
if (document.querySelector('#step03').style.display == 'block') {
    document.querySelectorAll('#StepCtrlBtn03 a')[1].click()
}
//填資料(要等待資料長出來)
if (document.querySelector('#step04').style.display == 'block') {
    //document.querySelector('#ordererMobile1').value=phone
    if (document.querySelector('#deliveryUserName').value != '') { document.querySelectorAll('#StepCtrlBtn04 a')[1].click() }
}
//付款方式(無摺優先>信用卡)
if (document.querySelector('#step05').style.display == 'block') {
    //document.querySelectorAll('#paymethodPos input')[1].click()
    if (document.getElementsByName('rdoPays')[2] != null) {
        document.getElementsByName('rdoPays')[2].click()
        document.querySelector('#selBank').value = '49'
    }
    else {
        document.getElementsByName('rdoPays')[1].click()
    }
    document.querySelector('#cbxCancelFeeAgree').checked = true
    document.querySelector('#chkinfoAgree').checked = true
    //document.querySelector('#cbxUserInfoAgree').click()
    //document.querySelector('#cbxCancelFeeAgree').click()
    document.querySelectorAll('#StepCtrlBtn05 a')[1].click()
}





//Global
//每秒刷新頁面，自動打開售票窗口

let time = 1000
//外部standby階段(每1秒跑一次)
let standby = setInterval(() => {
    let count = 0
    current = location.href
    fr4me = '<frameset cols=\'*\'>\n<frame id src=\'' + current + '\'/>';
    fr4me += '</frameset>';
    if (document.querySelector('#hlkPurchase') == null) {
        count++;
        console.log(`每${time / 1000}秒自動刷新，刷新次數：${count}`);
        with (document) {
            write(fr4me);
            void (close());
        }
    }
    else {
        clearInterval(standby)
        document.querySelector('#hlkPurchase').click()
    }
}, 1 * time)





//操作說明:
//1.整點刷新頁面成功打開售票視窗後，F12打開console區塊，貼入程式碼+enter
//2.購票流程共有5個頁面，每進入一個頁面就貼一次程式碼+enter，直到信用卡結帳頁面時改為手動操作
//3.當頁面無跳轉或是出現彈跳視窗，按enter把彈跳關掉，並再次貼程式碼+enter
//4.至票區頁面時，會自動逐區抓票，不須操作
//5.當撞票時把彈跳視窗關掉，程式碼會自動再去下區抓票
//6.可隨時切回手動，勿按F5避免購票流程歸零

//參數區域
//date為購票日期，第一天為0、第二天為1、第三天為2...
//phone為電話資料，更新國際手機號碼，記得''勿刪除
//speed為票區逐區抓票速度，預設1000為每秒跨一次區域，建議勿調整
let date = 0; 
let phone = '886910630809'
let speed = 1000;

window.alert = function () { }
//選日期
if (document.querySelector('[name=ifrmSeatFrame]') == null) {
    if (document.querySelector('#ulSeatSpace li') == null) {
        document.querySelectorAll('.select a ')[date].click()
        //if(document.querySelector('#selSeatClass')!=null){document.querySelector('#selSeatClass').value=1}
    }
    else { document.querySelector('#StepCtrlBtn01 a').click() }
}

//選座位: 如Array沒展開就先選區域，再選位子
else {
    if (document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelector('#divSeatArray').children.length == 0) {
        let num = 0
        getarea(num)
        let getticket = setInterval(() => {
            if (document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelector('[grade]') == null) {
                num++
                getarea(num)
            } else {
                document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelector('[grade]').click()
                document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelector('.booking').parentElement.click()
                if(document.querySelector('#step03').style.display == 'block'){clearInterval(getticket)}
                else{num++
                    getarea(num)}
                
            }

        }, 1*speed)

        function getarea(area) {
            if (document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelectorAll('area')[area] != null) {
                document.querySelector('[name=ifrmSeatFrame]').contentDocument.querySelectorAll('area')[area].click()
            }
            else { num = 0 }
        }
    }
}
//確認張數
if (document.querySelector('#step03').style.display == 'block') {
    document.querySelectorAll('#StepCtrlBtn03 a')[1].click()
}
//填資料
if (document.querySelector('#step04').style.display == 'block') {
    document.querySelector('#ordererMobile1').value = phone
    document.querySelectorAll('#StepCtrlBtn04 a')[1].click()
}
//付款方式
if (document.querySelector('#step05').style.display == 'block') {
    document.querySelectorAll('#paymethodPos input')[1].click()
    document.querySelector('#cbxUserInfoAgree').click()
    document.querySelector('#cbxCancelFeeAgree').click()
    document.querySelectorAll('#StepCtrlBtn05 a')[1].click()
}










let card1 = '1234'
let card2 = '5678'
let card3 = '1111'
let card4 = '2222'
let month = '08'
let year = '22'

//結帳
if (document.querySelector('#CardBtn') != null) {
    document.querySelector('#inputAll').click()
    document.querySelectorAll('#cardCodeEctSelect li')[14].click() //預設visa
    document.querySelector('#CardBtn').click()
}
//信用卡
if (document.querySelector('#CardGlobalBtn') != null) {
    document.querySelector('#jGlobalCardNumber1').value = card1
    document.querySelector('#jGlobalCardNumber2').value = card2
    document.querySelector('#jGlobalCardNumber3').value = card3
    document.querySelector('#jGlobalCardNumber4').value = card4
    document.querySelector('[name=cardMonth]').value = month
    document.querySelector('[name=cardYear]').value = year
    document.querySelector('#CardGlobalBtn').click()
}





