// 送fnNextStep(callmode)    callmode='C'，nResult自動為1
//接著引發nBoolStep觸發哪個階段的事件 nNowBoolStep=2 (導向價格選擇頁面)

//抓取可選擇座位，保存值


//fnSetSeatPrice() 保存


//當沒有選擇座位時，fnSelect不存在

fnNextStep(callmode)              
if (callmode == "C"){
    nResult = 1;     }   //要走這裡 callmode==C,nResult=1

    nResult = $("ifrmBookStep").contentWindow.fnSelect(); 

    if (nResult == 1)
        // 예매 프로세스 화면 로딩 이미지처리 // 預售流程畫面加載圖像處理
        $("ifrmBookStep").contentWindow.location.href = "/Global/Play/Book/loading.asp?LanguageType=G2003";

        //예매케이스에 따른 step 이동 //根據預售盒移動step


        nResult == 1
        if (nNowBookStep == 1){
            fnOpenBookSeat();   // 좌석선택 오픈 選擇座位開放
        }else if (nNowBookStep == 2){
            fnOpenBookPriceDiscount();  // 가격/할인선택 오픈 價格/折扣選擇開放
        }else if (nNowBookStep == 3){
            fnOpenBookDelivery();   // 배송선택/주문자확인 오픈 配送選擇/訂單確認開啓
        }else if (nNowBookStep == 4){
            fnOpenBookPayment();    // 결제하기 오픈 開始結算
        }else if (nNowBookStep == 5){
            fnOpenBookConfirm();   } // 예매처리 오픈 預售開放





    function fnSelect(){
		//선택된 갯수를 검증한다. 驗證選中的數量
		if(fnCheckCntExclusive()){          
			//이용자정보 동의 체크 用戶信息同意確認
			if(UserAgreeCertify()){
				// 상품별 인증 체크 產品認證檢查
				if(GoodsPriceGradeCertify()){
				
					fnSetSeatPrice();	//선택한 가격정보 main 저장 保存選中的價格信息
					fnSetDiscount();	//선택한 할인정보 main 저장 保存選中的折扣信息

					if("Y" == "Y") {
						fnSetCoupon();	//선택한 쿠폰정보 main 저장 保存選中的庫碰
					}

					return 1;
				
				}else{			
					return 0;
				}
			}else{			
				return 0;
			}
		}else{
			fnRollBack();
			return 0;
		}
	}





//좌석데이타입력 座席輸入
function fnSetSeatElement(idx, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12){
    //選擇1個座位時，因不生成參數排列，用空白("")代替。
    // BookComfirm 步驟中，空白("")爲空字符串("")，在圓復後輸入到cart。
    if (fnTrim(v0) == ""){  v0 = " ";}
    if (fnTrim(v1) == ""){  v1 = " ";}
    if (fnTrim(v2) == ""){  v2 = " ";}
    if (fnTrim(v3) == ""){  v3 = "0";}
    if (fnTrim(v4) == ""){  v4 = " ";}
    if (fnTrim(v5) == ""){  v5 = " ";}
    if (fnTrim(v6) == ""){  v6 = " ";}
    if (fnTrim(v7) == ""){  v7 = " ";}
    if (fnTrim(v8) == ""){  v8 = " ";}
    if (fnTrim(v9) == ""){  v9 = " ";}
    if (fnTrim(v10) == ""){ v10 = " ";}
    if (fnTrim(v11) == ""){ v11 = " ";}
    if (fnTrim(v12) == ""){ v12 = " ";}

    fnCreateParameter("formBook", "PGType", v0);
    fnCreateParameter("formBook", "SeatGrade", v1);
    fnCreateParameter("formBook", "PriceGrade", v2);
    fnCreateParameter("formBook", "SalesPrice", v3);
    fnCreateParameter("formBook", "DblDiscountOrNot", v4);
    fnCreateParameter("formBook", "GroupId", v5);
    fnCreateParameter("formBook", "SeatGradeName", v6);
    fnCreateParameter("formBook", "PriceGradeName", v7);
    fnCreateParameter("formBook", "BlockNo", v8);
    fnCreateParameter("formBook", "Floor", v9);
    fnCreateParameter("formBook", "RowNo", v10);
    fnCreateParameter("formBook", "SeatNo", v11);
    fnCreateParameter("formBook", "VoucherCode", " ");
    fnCreateParameter("formBook", "VoucherSalesPrice", "0");
    fnCreateParameter("formBook", "DiscountCode", v12);

}




//座位的資訊
//class = stySeat 可選
<img src="//ticketimage.globalinterpark.com/ticketimage/TMGSNAS/TMGS/S/S_90.gif" 
id="SID153" 
class="stySelectSeat" 
style="left: 406px; top: 283px;" 
onclick="javascript: SelectSeat('SID153', '1', '객석1층', 'B구역 입장번호', '465', '002')" 
seatinfo="" ri="" ci="" sa="" rg="" sn="465" value="N" alt=""></img>


//try
//nNowBookStep
// 5 = 結帳
// 4 = 會員資訊
// 3 = 張數確認
// 2 = 選位 

if(nBookStep=='1'){ //選日期
    //window[0].document.querySelector('#CellPlayDate').click()
    document.querySelector('#CellPlayDate').click()
    window.parent.document.querySelector('.btn a').click()
}
else if(nNowBookStep=='2'){ //選座位
    window[1][0].document.querySelector('.stySelectSeat').click()

    window[1].document.querySelector('.btnWrap a').click()
}
else if(nNowBookStep=='3'){ //選張數
    window[0].document.querySelector('select').value='1'
    window[0].document.querySelector('select').onchange()
    window[0].document.querySelector('select').onfocus
    window[1].parent.document.querySelector('#SmallNextBtnLink').click()

}
else if(nNowBookStep=='4'){ //填資料
    let name = window[0].document.querySelector('#MemberName')
    let year = window[0].document.querySelector('#BirYear')
    let month = window[0].document.querySelector('#BirMonth')
    let day = window[0].document.querySelector('#BirDay')
    let phone = window[0].document.querySelector('#PhoneNo')
    let mbphone = window[0].document.querySelector('#HpNo')
    name.value = 'HANG NING'
    year.value = '1992'
    month.value= '08'
    day.value ='09'
    phone.value = '886910630809'
    mbphone.value = '886910630809'
    window.parent.document.querySelector('.btn a').click()
}
else{
    window[1].document.querySelector('.capchaLayer').style.display='none'
    window[1].document.querySelector('#divRecaptchaWrap').style.display='none'
}


let btn = window.parent.document.querySelector('.btnWrap a')
btn.click()

let count = document.querySelector('select')
count.value = '1'

let btn2 = window.parent.document.querySelector('.btn a')
btn2.click()

let name = document.querySelector('#MemberName')
let year = document.querySelector('#BirYear')
let month = document.querySelector('#BirMonth')
let day = document.querySelector('#BirDay')
let phone = document.querySelector('#PhoneNo')
let mbphone = document.querySelector('#HpNo')
name.value = 'HANG NING'
year.value = '1992'
month.value= '08'
day.valie ='09'
phone.value = '886910630809'
mbphone.value = '886910630809'

let btn3 = window.parent.document.querySelector('.btn a')
btn3.click()


SelectSeat(me, SeatGrade, Floor, RowNo, SeatNo, Block)

//找不到fnSelect()，必須要點選btn才可以進入下個頁面
//fnNextStep(C) 會帶出fnSetNextImage(P)而且觸發$("ifrmBookStep").contentWindow.fnSelect()
//fnSetNextImage(P)

let next = document.getElementById('LargeNextBtn')


//拆成兩個頁面做串聯
//$("divBookSeat")
//$("divBookMain")
//$("ifrmBookStep").context
//divBookMain>ifrmBookStep>LargeNextBtn

//parent = ifrmSeat
//parent.parent =wndBooking_Global

//document.querySelector('.btnWrap').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentNode
//.btnWrap
//.inner
//.seatR
//.contWrap
//.wrap
//name="frmSeat"
//body
//html

let next1 = document.querySelector('[name=ifrmSeat]')

let next2 = document.querySelector('.btnWrap')

document.querySelector('.btnWrap a').click()

