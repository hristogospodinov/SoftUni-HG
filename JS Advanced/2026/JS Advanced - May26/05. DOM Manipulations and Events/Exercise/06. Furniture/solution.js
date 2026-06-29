function solve() {
  let [inputArea, outputArea] = document.querySelectorAll('textarea');
  let [generateBtn, buyBtn] = document.querySelectorAll('button');
  let tbody = document.querySelector('tbody');
  
  generateBtn.addEventListener("click", generateTable);
  buyBtn.addEventListener("click", buyItems);

  function generateTable() {
    let listOfItems = JSON.parse(inputArea.value);
    
    for (let item of listOfItems) {
      let tr = document.createElement('tr');
      let imgtd = document.createElement('td');
      let img = document.createElement('img');
      img.src = item.img;
      imgtd.appendChild(img);
      tr.appendChild(imgtd);

      tr.appendChild(addParagraph(item.name));
      tr.appendChild(addParagraph(item.price));
      tr.appendChild(addParagraph(item.decFactor));

      let checkboxTd = document.createElement('td');
      let checkBoxInput = document.createElement('input');
      checkBoxInput.type = "checkbox";
      checkboxTd.appendChild(checkBoxInput);
      tr.appendChild(checkboxTd);

      tbody.appendChild(tr);     
    }
    inputArea.value = '';
  }

  function addParagraph(text) {
    let td = document.createElement('td');
    let p = document.createElement('p');
    p.textContent = text;
    td.appendChild(p);
    return td;
  }  

  function buyItems() {
    let checkboxes = tbody.querySelectorAll('[type="checkbox"]');
    let totalPrice = 0;
    let itemsBought = [];
    let decFactor = 0;
    for(let checkbox of checkboxes) {
      if (checkbox.checked) {
        let row = checkbox.parentElement.parentElement;
        let [name, price, decFact] = row.querySelectorAll('td p');
        itemsBought.push(name.textContent);
        totalPrice += Number(price.textContent);
        decFactor += Number(decFact.textContent);
      }
    }
    if (itemsBought.length > 0) {
      decFactor /= itemsBought.length;
    }

    outputArea.value = `Bought furniture: ${itemsBought.join(", ")}\n`;
    outputArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputArea.value += `Average decoration factor: ${decFactor}`
  }
}