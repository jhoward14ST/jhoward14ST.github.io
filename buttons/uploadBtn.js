// UPLOAD BUTTON
// Gives functionality to upload
var button = document.getElementById('uploadBtn');
button.addEventListener('click', upload);
function upload() {
    /* TEST CODE
     * https://zetcode.com/javascript/exceljs/
    var testReader = new FileReader();
    testReader.readAsText(localStorage.csvFile, 'UTF-8');
    testReader.onload = readerEvent => {
        var testString = readerEent.target.result;
        console.log(localStorage.csvFile);
    }
    TEST CODE */

    // Prints csvString to browser console
    console.log(localStorage.csvText);
}
        // UPLOAD BUTTON