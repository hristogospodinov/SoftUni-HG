function solve() {
   let total = 0;
   let products = new Set();
   let textShown = '';
   let buttons = document.getElementsByClassName('add-product');
   let output = document.getElementsByTagName('textarea')[0];
   let checkoutButton = document.getElementsByClassName('checkout')[0];

   for (let button of buttons) {
      button.addEventListener('click', addProduct);
   }

   checkoutButton.addEventListener('click', checkout);

   function addProduct(event) {
      let mainElement = event.target.parentElement.parentElement;
      let name = mainElement.getElementsByClassName('product-title')[0].textContent;
      let price = Number(mainElement.getElementsByClassName('product-line-price')[0].textContent);
      total += price;
      products.add(name);
      textShown += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;  
      output.value = textShown;    
   }  

   function checkout() {
      let finalList = [...products].join(', ');
      textShown += `You bought ${finalList} for ${total.toFixed(2)}.`;
      output.value = textShown; 
      for (let button of buttons) {
         button.disabled = true;
      }
      checkoutButton.disabled = true;
   }
}