import { Component, OnInit } from '@angular/core';
import { inherits } from 'util';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {

    displayString = '';

    constructor() { }

    ngOnInit() {
        this.runDeveloperCalculator();
    }

    runDeveloperCalculator() {
        const dev1: DeveloperReport = { Id: 1, Name: "Dev1", Level: "Senior developer", HourlyRate: 30.5, WorkingHours: 160 };
        const dev2: DeveloperReport = { Id: 1, Name: "Dev2", Level: "Junior developer", HourlyRate: 20, WorkingHours: 150};
        const dev3: DeveloperReport = { Id: 1, Name: "Dev3", Level: "Senior developer", HourlyRate: 30.5, WorkingHours: 180 };

        const devReport1: SeniorDevSalaryCalculator = new SeniorDevSalaryCalculator(dev1);
        const devReport2: JuniorDevSalaryCalculator = new JuniorDevSalaryCalculator(dev2);
        const devReport3: SeniorDevSalaryCalculator = new SeniorDevSalaryCalculator(dev3);

        const devCalculations: BaseSalaryCalculator[] = [
            devReport1,
            devReport2,
            devReport3
        ];

        const calculator = new SalaryCalculator(devCalculations);

        const totalSalaries = calculator.calculateSalaries();

        this.displayString = `The total of all dev salaries are: ${totalSalaries}`;
    }
}

export abstract class BaseSalaryCalculator {
    DeveloperReport: DeveloperReport;

    constructor(developerReport: DeveloperReport) {
        this.DeveloperReport = developerReport;
    }

    abstract CalculateSalary(): number;
}

export class SeniorDevSalaryCalculator extends BaseSalaryCalculator {

    constructor(report: DeveloperReport) {
        super(report);
    }

    CalculateSalary(): number {
        return this.DeveloperReport.HourlyRate * this.DeveloperReport.WorkingHours * 1.2;
    }

}

export class JuniorDevSalaryCalculator extends BaseSalaryCalculator {

    constructor(report: DeveloperReport) {
        super(report);
    }

    CalculateSalary(): number {
        return this.DeveloperReport.HourlyRate * this.DeveloperReport.WorkingHours;
    }
}

export class SalaryCalculator {

    private _developerCalculation: BaseSalaryCalculator[];

    constructor(developerCalculation: BaseSalaryCalculator[]) {
        this._developerCalculation = developerCalculation;
    }

    calculateSalaries(): number {
        let totalSalaries = 0;

        this._developerCalculation.forEach(calculation => {
          totalSalaries += calculation.CalculateSalary();
        });

        return totalSalaries;
    }
  
}

export class DeveloperReport {
    Id: number;
    Name: string;
    Level: string;
    WorkingHours: number;
    HourlyRate: number;
}
