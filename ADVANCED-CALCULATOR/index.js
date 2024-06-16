let display = document.querySelector("#display");

function clearDisplay() {
    display.innerText = "";
}

function deleteChar() {
    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
}

function addChar(char) {
    if (display.innerText == null || display.innerText == "0" || display.innerText === "") {
        display.innerText = char
    } else {
        display.innerText = display.innerText + char
    }
}

function changeSign() {
    if (display.innerText.substring(0, 1) == "-") {
        display.innerText = display.innerText.substring(1, display.innerText.length)
    } else {
        display.innerHTML = "-" + display.innerText
    }
}

function compute() {
    // console.log(display.innerText);
    if (display.innerText == "") {
        alert("Nothing to calculte")
    } else {
        try {
            display.innerText = eval(display.innerText)
        } catch {
            display.innerText = "error"
        }
    }
}

function checkNum() {
    let input = display.innerText;
    for (let i = 0; i < input.length; i++) {
        let ch = input.substring(i, i + 1);
        // console.log(ch);
        if (
            (ch < "0" || ch > "9") &&
            ch != "+" &&
            ch != "-" &&
            ch != "*" &&
            ch != "(" &&
            ch != ")" &&
            ch != "/" &&
            ch != "."
        ) {
            alert("Invalid Entry")
            display.innerText = ""
            return false;
        }
    }
    return true;
}

function sqrt() {
    if (display.innerText == "") {
        alert("Nothing to calculate")
    } else {
        // console.log( display.innerText);
        display.innerText = Math.sqrt(display.innerText)
        // console.log( display.innerText);

    }

}

function degreeToRadian(value) {
    return value * 3.14 / 180;
}

function sin() {
    if (display.innerText == "") {
        alert("Nothing to calculate")
    } else {
        display.innerText = Math.round(Math.sin(degreeToRadian(display.innerText)));
    }

}

function cos() {
    if (display.innerText == "") {
        alert("Nothing to calculate")
    } else {
        display.innerText = Math.round(Math.cos(degreeToRadian(display.innerText)));
    }

}

function tan() {
    if (display.innerText == "") {
        alert("Nothing to calculate")
    } else {
        let tanValue = Math.sin(degreeToRadian(display.innerText)) / Math.cos(degreeToRadian(display.innerText));
        if(tanValue > 1000){
            display.innerText = Infinity
        }else{
            display.innerText = Math.round(tanValue)
        }
    }

}

function ln() {
    if (display.innerText == "") {
        alert("Nothing to calculate")
    } else {
        display.innerText = Math.log(display.innerText)
    }

}

function exp() {
    if (display.innerText == "") {
        alert("Nothing to calculate")
    } else {
        display.innerText = Math.exp(display.innerText)
    }

}

function sqare() {
    if (display.innerText == "") {
        alert("Nothing to calculate")
    } else {
        display.innerText = Math.pow(display.innerText, 2);
    }

}