// CHOOSE FILE BUTTON
// Gives functionality to 'Choose File'
var button = document.getElementById('fileBtn');
button.addEventListener('click', select);
function select() {
    console.log('Should open file dialog');
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {

        // Getting a hold of the file reference
        var file = e.target.files[0];

        // Setting up the reader
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');

        // Writes string read from file to variable called csvString
        reader.onload = readerEvent => {
            var csvString = readerEvent.target.result;
            /* TEST CODE
             * https://zetcode.com/javascript/exceljs/
            const Excel = require('exceljs');
            const wb = new ExcelJS.Workbook();
            const ws = wb.addWorksheet('file');
            localStorage.csvFile = ws;
            TEST CODE */

            // Stores csvString in the browser
            localStorage.csvText = csvString;
        }

    }
    input.click();
}
        // CHOOSE FILE BUTTON