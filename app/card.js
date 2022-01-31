function validCreditCard(creditCardNumber) {
    console.log(creditCardNumber)

    debugger

    if (!creditCardNumber) {
        return false
    }

    if (checkNumber(creditCardNumber) == false) {
        return false
    }

    if (hasLength(creditCardNumber) == false) {
        return false
    }

    debugger
    if (diffiranceNumberControl(creditCardNumber) == false) {
        return false
    }

    if (lastNumberMod2Control(creditCardNumber) == false) {
        return false
    }

    if (sumNumber(creditCardNumber) == false) {
        return false
    }

    return true
}

//tur kontrolu
function checkNumber(creditCardNumber) {
    if (isNaN(creditCardNumber) == false) {
        //alert("Sayıdır");
        return true
    }
    //alert("Sayı değildir")
    return false
}

//basamak kontrolu
function hasLength(creditCardNumber) {
    var _length = 16;
    if (_length == creditCardNumber.length) {
        //alert(`Tüm değerlerin toplamı ${sum}' olmuştur ve 16'dan büyüktür`)
        return true
    }
    //alert(`Tüm değerlerin toplamı ${sum}' olmuştur ve 16'dan küçüktür`)
    return false
}

//tek veya çift kontrolu
function lastNumberMod2Control(creditCardNumber) {
    if (creditCardNumber[creditCardNumber.length - 1] % 2 == 0) {
        //alert(`${creditCardNumber[15]} değerinin modu 0'dır ve çifttir`)
        return true;
    }
    //alert(`${creditCardNumber[15]} değerinin modu 1'dır ve tektir`)
    return false
}

//karakter toplamı ve kontrolu
function sumNumber(creditCardNumber) {
    var sum = 0
    //let numArr = [];
    for (let i = 0; i < creditCardNumber.length; i++) {
        sum += parseInt(creditCardNumber[i]);
        //  sum += numArr[i]  
    }

    if (sum > 16) {
        //alert("16 dan büyüktür")
        return true
    }
    //alert("16 dan büyük olması gerekmektedir")
    return false
}

//En Az 2 sayı olmalı
function diffiranceNumberControl(creditCardNumber) {
    debugger
    var firstNumber = null;
    for (let i = 0; i < creditCardNumber.length; i++) {

        var number = parseInt(creditCardNumber[i]);
        if (firstNumber == null) {
            firstNumber = number;
        }
        else {
            if (firstNumber != number) {
                return true
            }
        }
    }
    return false
}