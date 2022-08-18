//拓元

//外層選場次，預設為第一場
if(document.querySelector('.btn-next')!=null){
    document.querySelectorAll('.btn-next')[0].click()}
//選座位，預設為第一區，如要改選用All
if(document.querySelector('.select_form_b a')!=null){
    document.querySelector('.select_form_b a').click()}
//驗證碼需自行輸入，後再貼code
if(document.querySelector('.mobile-select')!=null){
    document.querySelector('select').value='1' //張數
    document.querySelector('label').click()
    document.querySelector('.btn-check').click()
}

