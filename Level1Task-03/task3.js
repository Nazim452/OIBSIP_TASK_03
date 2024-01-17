
const calculateTemp = () => {
    let inputTemp = document.querySelector('#temp').value;
    let tempSelected = document.querySelector('#temp_diff');
    // let valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    let valueTemp = temp_diff.options[tempSelected.selectedIndex].value
    let res = document.querySelector("#res")
    const celToFah = (cel) => {
        // 1.2345 = toFixed(1) mens = only - 1.2
        let fahrenhite = ((cel * 9 / 5) + 32).toFixed(1);
        console.log(fahrenhite);
        return fahrenhite;
    }

    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        console.log(celsius);
        return celsius;
    }




    if (valueTemp == 'cel') {
        res.innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        res.innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}











