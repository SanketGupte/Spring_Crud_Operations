import { ChangeDetectionStrategy, Component, model, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../employee.module';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse, HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatButtonModule, 
    RouterLink
  ], //include Material modules
  templateUrl: './employee.html',
  styleUrl: './employee.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EmployeeComponent implements OnInit {

  employee: Employee = {
    // id:0,
    name: '',
    contactNumber: '',
    address: '',
    gender: '',
    department: '',
    skills: ''
  }

  skills: string[] = [];

  constructor(private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  checkSkills(skill: string){
    return this.employee.skills != null && this.employee.skills.includes(skill);
  }

  saveEmployee(employeeForm: NgForm): void{
    this.employeeService.saveEmployee(this.employee).subscribe(
      {
        next: (res: Employee) => {
          console.log(res);
          employeeForm.resetForm();
          this.employee.gender = '';
          this.skills = [];
          this.employee.skills = '';
          this.router.navigate(['/employee-list']); // Navigate to employee list after saving
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }

  selectGender(gender: string): void {
    this.employee.gender = gender
  }

  onSkillChange(event: any): void {
    console.log(event);
    if (event.checked) {
      this.skills.push(event.source.value);
    } else {
      this.skills.forEach(
        (skill, index) => {
          if (skill === event.source.value) {
            this.skills.splice(index, 1);
          }
        }
      );
    }
    this.employee.skills = this.skills.toString();
  }
}
