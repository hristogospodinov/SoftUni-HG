function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const restaurants = {};

      const input = document.querySelectorAll('textarea')[0].value;
      const data = JSON.parse(input);

      for(const row of data) {
         const [restaurantName, workersData] = row.split(" - ");
         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = [];
         }
         const workers = workersData.split(", ")
         for(const worker of workers) {
            const [name, salary] = worker.split(" ");
            
            const currentWorker = {
               name: name,
               salary: Number(salary)
            }
            restaurants[restaurantName].push(currentWorker);
         }
      }

      let bestRestaurant = null;
      let bestAverageSalary = 0;

      for (const [restaurantName, workers] of Object.entries(restaurants)) {
         let totalSalary = 0;

         for (const worker of workers) {
            totalSalary += worker.salary;
         }

         let averageSalary = totalSalary / workers.length;

         const salaries = workers.map(worker => worker.salary);
         const bestSalary = Math.max(...salaries);

         if (averageSalary > bestAverageSalary) {
            bestRestaurant = {
               name: restaurantName,
               workers,
               averageSalary,
               bestSalary
            } ;
            bestAverageSalary = averageSalary;
         }
         
      }
      bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      
      let workersInfo = '';
      for(const worker of bestRestaurant.workers) {
         workersInfo += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
      
      document.querySelector('#workers p').textContent = workersInfo;
   }
}
