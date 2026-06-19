function solve() {
   const searchBtn = document.querySelector('#searchBtn');

   searchBtn.addEventListener('click', onSearch);

   function onSearch() {
      const searchText = document.getElementById('searchField').value.toLowerCase();

      const rows = document.querySelectorAll('tbody tr');

      rows.forEach(row => row.classList.remove('select'));

      if (searchText === '') {
         document.getElementById('searchField').value = '';
         return;
      }

      rows.forEach(row => {
         const rowText = row.textContent.toLowerCase();

         if (rowText.includes(searchText)) {
            row.classList.add('select');
         }
      });

      document.getElementById('searchField').value = '';
   }
}