let display = document.querySelector("#display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(function (eachBtn) {
    eachBtn.addEventListener("click", (e) => {
        console.log(e.target.innerText);

        switch (e.target.innerText) {
            case "C": display.innerText = ""; break;
            case "Backspace":
                if (display.innerText) {
                    display.innerText = display.innerText.substring(0, display.innerText.length - 1)
                }; break;
            case "=":
                if (display.innerText == "") {
                    alert("Nothing to calculate");
                } else {
                    try{
                        display.innerText = eval(display.innerText)
                    }catch(error){
                        display.innerText = "Error";
                    }
                };
                break;
            default: display.innerText = display.innerText + e.target.innerText;

        }
    })
})