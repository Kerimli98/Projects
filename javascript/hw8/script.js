let script = document.getElementsByTagName("script");
let Input = document.getElementById("price");
let body = document.querySelector("body");


Input.addEventListener("focus", function (focus) {
    Input.style.border = "3px solid green";

    let removeWarning = document.querySelector(".empty-warning");
    body.removeChild(removeWarning);

});

Input.addEventListener("focus", function (focusOther) {
    let nanWarning = document.querySelector(".nan-warning");
    body.removeChild(nanWarning);
});

Input.addEventListener("blur", function () {
    if (Input.value.length === 0) {
        Input.style.borderColor = "red";
        let emptyWarning = document.createElement("span");
        emptyWarning.classList.add("empty-warning");
        emptyWarning.innerHTML = "Field is empty";
        body.append(emptyWarning);
        script.before(emptyWarning);
    } else if (isNaN(Input.value)) {
        Input.style.borderColor = "red";
        let notNumWarning = document.createElement("span");
        notNumWarning.classList.add("nan-warning");
        notNumWarning.innerHTML = "Value is Not a number";
        body.append(notNumWarning);
        script.before(notNumWarning);

    } else {
        Input.style.borderColor = "gray";
        let addedPrice = document.createElement("div");
        addedPrice.classList.add("added-price");

        body.append(addedPrice);
        let spanTxt = document.createElement("span");
        spanTxt.innerHTML = `Current Price is : ${Input.value}`;
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "remove all";

        removeBtn.addEventListener("click", function (removePrice) {
            document.querySelector(".added-price").remove();
            Input.value = ""
        });

        addedPrice.appendChild(spanTxt);
        addedPrice.appendChild(removeBtn);
        script.before(addedPrice);
    }

});
