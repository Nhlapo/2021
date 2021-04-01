import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Declare_Service } from 'src/app/_service/declare-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  adminForm: FormGroup;
  submitted = false;
  loading = false;
  setError: string;
  returnUrl: string;

  constructor(
    private adminfmBuilder: FormBuilder,
    private admin_service: Declare_Service,
    private router: Router
    

  ) { }

  ngOnInit() {

        /**validation */
        this.adminForm = this.adminfmBuilder.group({
          staffno: [null, [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(9),
            Validators.maxLength(9)]
          ],
          password:[null,[
            Validators.required,
            Validators.minLength(8)
             ]
          ],
          phone: [null, [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(10),
            Validators.maxLength(10)]
          ],
          surname: [null, [
            Validators.required,
            Validators.pattern("[a-zA-Z ]*")]
          ],
          name: [null, [
            Validators.required]
          ],
          gender: [null, [
            Validators.required]
          ]
        });
        /**end  */
  }
  /*
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminForm.invalid) {
      return;
    }
    this.loading = true;

    if (this.adminForm.value.vote_rules) {
      return this.admin_service.de(
        this.adminForm.serialno;
  
        ).subscribe(
        data => {
          if (data.status == 200) {
            this.toastr.success(data.message);
            this.router.navigate([this.returnUrl]);
          } else {
            this.setError = data.message
            this.loading = false;
            this.submitted = false;
          }
        },
        error => {
          // this.alert.error(error);
          this.setError = error.message
          this.loading = false;
          this.submitted = false;
        }
      )
    } else {
      this.setError = "Accept to Terms and Conditions"
      this.loading = false;
      this.submitted = false;
    }
  }
*/
}
