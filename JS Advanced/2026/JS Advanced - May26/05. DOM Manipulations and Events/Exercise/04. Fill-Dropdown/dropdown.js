function addItem() {
    let list = document.getElementById('menu');
    let newItemField = document.getElementById('newItemText');
    let newValueField = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = newItemField.value;
    option.value = newValueField.value;
    list.appendChild(option);
    newItemField.value = '';
    newValueField.value = '';    
}