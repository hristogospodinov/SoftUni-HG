function search() {
   let target = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('#towns li');


   let matches = 0;
   document.getElementById('result').textContent = '';

   for (const town of towns) {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';      
   }

   for (const town of towns) {
      if (town.textContent.includes(target) && (target != '')) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}
