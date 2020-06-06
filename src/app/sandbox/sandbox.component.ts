import { Component, OnInit } from '@angular/core';
import { MusicKeyService } from '../core/services/music-key.service';

@Component({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.css'],
    providers:[MusicKeyService]
})

export class SandboxComponent {

    displayString = '';
    chromaticScaleSliderValue = '1';
    musicKey: MusicKey;
    renderingMajorKey = true;

    constructor(private musicKeyService: MusicKeyService) { }

    ngOnInit() {
        this.runDeveloperCalculator();

        this.musicKey = this.musicKeyService.getMusicKey(this.chromaticScaleSliderValue);
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

    getchromaticScaleValue(event: MouseEvent) {
        this.chromaticScaleSliderValue = event['target']['value'];
        this.musicKey = this.musicKeyService.getMusicKey(this.chromaticScaleSliderValue);
        console.log(this.musicKey);
    }

    getminorMajorValue() {
        this.renderingMajorKey = !this.renderingMajorKey;     
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

export class MusicKey {
    Root: string;
    minor2nd: string;
    Major2nd: string;
    minor3rd: string;
    Major3rd: string;
    Perfect4th: string;
    diminished5th: string;
    Perfect5th: string;
    minor6th: string;
    Major6th: string;
    minor7th: string;
    Major7th: string;
}
