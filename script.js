const submitCalc = (() => {
    const submitButton = document.querySelector(".calc");

    submitButton.addEventListener("click", () => {
        const values = calcControls.getValues();
        const diff = calcPercent.calcLoss(values);
        results.pushResult(diff);
        console.log("do you hear me")
    }); 
  
})();


const calcControls = (() => {

    const getValues = () => {
        const start = parseFloat(document.querySelector('input[name="start"]').value);
        const current = parseFloat(document.querySelector('input[name="current"]').value);

        console.log("Start Value:", start);
        console.log("Current Value:", current);
    

        return { start, current };
    }

    return { getValues };
})();

const calcPercent = (() => {
    const calcLoss = (values) => {
        let diff = ((values.start - values.current) / values.start) * 100;
        console.log(diff)
        return diff;
    }

    return { calcLoss };
})();

const results = (() => {
    const pushResult = (final) => {
        const result = document.querySelector(".result");

        const existingResultMessage = document.querySelector(".message");
        if (existingResultMessage) {
            result.removeChild(existingResultMessage);
        }

        const resultMessage = document.createElement("h2");
        resultMessage.classList.add("message");
        resultMessage.textContent = final + "%";
        result.appendChild(resultMessage);
    }

    return { pushResult };
})();