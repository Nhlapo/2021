import { Component, OnInit, Input,Injectable, Inject } from '@angular/core';
import {ItemsService} from '../../items.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Declare_Service } from 'src/app/_service/declare-service.service';



@Component({
  selector: 'app-declare',
  templateUrl: './declare.component.html',
  styleUrls: ['./declare.component.scss']
})
export class DeclareComponent implements OnInit {
  
  /**declare validation variables*/
  adminForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  returnUrl: string;
  error = '';
  /**end validation declare */

  /**register */
  loading = false;
  fac_ID: number;

  fac_id = '';



  @Input ()  itemData = {
    serialNum:  " ", userID: " ", itemDescription: " ", itemType: " ", itemBrand: " ", dateDeclared: " "
  }
  optionsSelect: Array<any>;
  itemType: any;
 
  //constructor(private itemsService: ItemsService) { }

  constructor(
    private adminfmBuilder: FormBuilder,
    private admin_service: Declare_Service,
    private declareitems: Declare_Service,
    @Inject(ItemsService) private itemsService: ItemsService) {
  }

  ngOnInit() {
    /**validation */
    this.adminForm = this.adminfmBuilder.group({
      studentno: [null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(9),
        Validators.maxLength(9)]
      ],
      phone: [null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
        Validators.maxLength(10)]
      ],
      serialno: [null, [
        Validators.required]
      ],
      surname: [null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")]
      ],
      name: [null, [
        Validators.required]
      ],
      itemName: [null, [
        Validators.required]
      ],
      itemType: ["0", [
        Validators.required]
      ]
    });
    /**end  */
   
    this.found_Items_cat();
    

  }
  found_Items_cat() {
    return this.declareitems.get_item_cat().subscribe(
      data => {
        this.itemType = data;
      }
    )
  }
  /**validation */
  saveData() {
    this.submitted = true;
    if (this.adminForm.invalid) {
      return;
    }
    this.invalidLogin = true;
    console.log(this.adminForm.value)
    return this.admin_service.declare(this.adminForm.value).subscribe(
      data => {
        if (data.status == 200) {
          // Succesfully Registered
        }
      },
      invalid => {
        this.invalidLogin;
        this.error = invalid.message;
      }
    )
  
      // if (this.adminForm.controls.studentno.value && this.adminForm.controls.serialno.value &&
      //   this.adminForm.controls.surname.value && this.adminForm.controls.initials.value && this.adminForm.controls.itemName.value) {
  
  
      //   //this.router.navigate(['./admin-dashboard']);
  
      // } else {
      //   this.invalidLogin = true;
      // }
    }
    /*end */
    /*
    onSubmit() {

      this.submitted = true;
  
      // stop here if form is invalid
      if (this.adminForm.invalid) {
        return;
      }
  
      this.loading = true;
      console.log(this.fac_id)
      return this.declareitems.DeclareItem
        (
          this.student_id, this.student_fname, this.student_lname, this.student_password, this.fac_id
        )
        .pipe(first())
        .subscribe(
          data => {
  
            if (data.status == 200) {
  
              this.toastr.success(data.message);
  
              this.router.navigate([this.returnUrl]);
            }
            else {
  
            }
  
          },
          error => {
            this.alert.error(error);
            this.loading = false;
          }
        );
    }
    */
}

