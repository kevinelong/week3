function init(){
    const source_number = document.getElementById("source_number");
    const output_results = document.getElementById("output_results");

    function doubleMe(){
        output_results.value = parseFloat( source_number.value ) * 2;
    }
    
    double_button.addEventListener("click", doubleMe);
    // double_button.onclick = doubleMe;
}

// window.onload = init;
document.addEventListener("DOMContentLoaded", init);