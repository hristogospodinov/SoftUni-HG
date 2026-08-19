class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (
            name === "" || name === undefined || name === null ||
            salary === "" || salary === undefined || salary === null ||
            position === "" || position === undefined || position === null ||
            department === "" || department === undefined || department === null ||
            salary < 0
        ) {
            throw new Error('Invalid input!');
        }

        const employee = {
            name,
            salary,
            position
        };

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push(employee);

        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
    }

    bestDepartment() {
        let bestAverageSalary = -Infinity;
        let bestDep = '';

        for (const [department, employees] of Object.entries(this.departments)) {
            let totalSalary = 0;

            for (const employee of employees) {
                totalSalary += employee.salary;
            }

            const averageSalary = totalSalary / employees.length;

            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDep = department;
            }
        }

        this.departments[bestDep].sort((a, b) => {
            if (a.salary === b.salary) {
                return a.name.localeCompare(b.name);
            }

            return b.salary - a.salary;
        });

        let result = `Best Department is: ${bestDep}\n`;
        result += `Average salary: ${bestAverageSalary.toFixed(2)}`;

        for (const employee of this.departments[bestDep]) {
            result += `\n${employee.name} ${employee.salary} ${employee.position}`;
        }

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

