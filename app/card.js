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
        return true
    }
    return false
}

//basamak kontrolu
function hasLength(creditCardNumber) {
    var _length = 16;
    if (_length == creditCardNumber.length) {
        return true
    }
    return false
}

//tek veya çift kontrolu
function lastNumberMod2Control(creditCardNumber) {
    if (creditCardNumber[creditCardNumber.length - 1] % 2 == 0) {
    //if (creditCardNumber[15] % 2 == 0) {
        return true;
    }
    return false
}

//karakter toplamı ve kontrolu
function sumNumber(creditCardNumber) {
    var sum = 0
    for (let i = 0; i < creditCardNumber.length; i++) {
        sum += parseInt(creditCardNumber[i]);
    }

    if (sum > 16) {
        return true
    }
    return false
}

//En Az 2 sayı olmalı
function diffiranceNumberControl(creditCardNumber) {

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