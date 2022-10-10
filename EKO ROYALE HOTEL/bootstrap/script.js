var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["seria"] = document.getElementById("seria").value;
    formData["ProductName"] = document.getElementById("ProductName").value;
    formData["Quantity"] = document.getElementById("Quantity").value;
    formData["Price"] = document.getElementById("Price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("StoreRecord").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.seria;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ProductName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Quantity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Price;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> |
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("seria").value = "";
    document.getElementById("ProductName").value = "";
    document.getElementById("Quantity").value = "";
    document.getElementById("Price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("seria").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ProductName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.seria;
    selectedRow.cells[1].innerHTML = formData.ProductName;
    selectedRow.cells[2].innerHTML = formData.Quantity;
    selectedRow.cells[3].innerHTML = formData.Price;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("StoreRecord").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("seria").value == "") {
        isValid = false;
        document.getElementById("SeriaValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("SeriaValidationError").classList.contains("hide"))
            document.getElementById("SeriaValidationError").classList.add("hide");
    }
    return isValid;
}