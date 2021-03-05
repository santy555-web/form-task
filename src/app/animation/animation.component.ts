import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AnimationService } from "./animation.service";
import { quali,skill,employment, BasicForm, paddress } from './basicform';
import { EMPTY } from 'rxjs';
import { tap, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  flag3 : boolean = true;
  flag4 : boolean = false;
  flag5 : boolean = false;
  flag6 : boolean = false;
  flag7 : boolean = false;
  flag8 : boolean = false;
  flag9 : boolean = false;
  flag10 : boolean = false;
  flag11 : boolean = false;

  uploadError: string;

  counter:number;
  basicinfo: BasicForm []=[];
  basicinfo_age;
  BasicinfoFrom: FormGroup;
  imagePath:String;

  addressDetails: paddress []=[];
  selectedFile: File;
  isReadonly= false;
  flag1 : boolean = false;
  addressDetails_address1;
  addressDetails_city1;
  addressDetails_state1;
  addressDetails_country1;
  addressDetails_district1;
  addressDetails_zip1;
  addressDetails_phone11;
  addressDetails_phone21;
  addressDetails_mobile_fax1;
  addressDetails_personal_email1;
  addressDetails_same_address1;
  addressDetailsFrom: FormGroup;
  addressDetailsFrom1: FormGroup;
  res5;


  personalDetails: any [] = [];
  personalDetailsFrom: FormGroup;



  bankDetails: any [] = [];
  bankDetailsFrom: FormGroup;



  qualificationDetails: quali [] = [];
  qualificationinvalidNamesArr: any [] = [];
  qualification_qualification;
  qualification_institute;
  qualification_passing_year;
  qualification_score;
  qualification_onChange;
  qualification_qualification_area;
  qualificationForm: FormGroup;
  flag2:boolean = true;
  res;
  res1;
  res2;
  res3;
  res4;
  counter1;
  counter2;
  tes;
  les;
  employmentDetails: employment[]=[];
  employment_fromDate;
  employment_toDate;
  employment_company;
  employment_designation;
  employment_relevant;
  employment_nrelevant;
  employment_duration;
  //flag3:boolean = false;
  employmentForm: FormGroup;




  skillDetails: skill [] = [];
  skillDetailsFrom: FormGroup;


  constructor(private ang:FormBuilder, private data:AnimationService) { }

  ngOnInit(): void {
      /* basic information table start here */
      this.BasicinfoFrom  =  new FormGroup({
      basicinfo_employee_number: new FormControl(null, [Validators.required]),
      basicinfo_employee_title: new FormControl(""),
      basicinfo_employee_name: new FormControl(null, [Validators.required]),
      basicinfo_employee_address: new FormControl(),
      basicinfo_firstname: new FormControl(null, [Validators.required, Validators.minLength(3)  ]),
      basicinfo_middlename: new FormControl(),
      basicinfo_lastname: new FormControl(),
      basicinfo_initial: new FormControl(null, Validators.pattern('[a-zA-Z0-9_]*')),
      basicinfo_gender: new FormControl("Male"),
      basicinfo_dob: new FormControl(null, [Validators.required]),
      basicinfo_age: new FormControl(),
      basicinfo_official_phone: new FormControl(),
      basicinfo_mobile: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
      basicinfo_fax: new FormControl(),
      basicinfo_official_email: new FormControl(null, [Validators.email ]),
      basicinfo_personal_email: new FormControl(null, [Validators.email,Validators.required ]),
      basicinfo_personal2_email: new FormControl(null,[Validators.email ]),
      basicinfo_personal3_email: new FormControl(null,[Validators.email]),
      basicinfo_file: new  FormControl(null, [Validators.required]),

          personalDetails_birthplace: new  FormControl(null, [Validators.required]),
          personalDetails_religion: new  FormControl(""),
          personalDetails_caste: new  FormControl(""),
          personalDetails_domicile: new  FormControl(),
          personalDetails_nationality: new  FormControl("", [Validators.required]),
          personalDetails_voterid: new  FormControl(null,[Validators.minLength(10)]),
          personalDetails_pan: new  FormControl(null, [Validators.required]),
          personalDetails_aadhaar: new  FormControl(null, [Validators.required, Validators.minLength(12)]),
          personalDetails_marriage_status: new  FormControl(""),
          personalDetails_no_children: new  FormControl(null,[Validators.pattern("^[0-7]{1}$")]),
          personalDetails_marriage_date: new  FormControl(),
          personalDetails_spouse_name: new  FormControl(null, Validators.pattern('[a-zA-Z_]*')),

          bankDetails_bank_name: new FormControl(null, [Validators.required]),
          bankDetails_account_type: new FormControl(),
          bankDetails_account_number:new FormControl(null, [Validators.required]),
          bankDetails_peyment_type: new FormControl(null, [Validators.required]),
          bankDetails_branch_detail: new FormControl(),
          bankDetails_ifsc: new FormControl(null, [Validators.required]),
          bankDetails_reimbursement_name: new FormControl(),
          bankDetails_reimbursement_number: new FormControl(),

    });
    this.BasicinfoFrom.get('basicinfo_dob').valueChanges.subscribe((x)=>this.AgeCalculation(x));



    /* Address information table start here */
           this.addressDetailsFrom =  new FormGroup({
            addressDetails_address: new FormControl(null, [Validators.required]),
            addressDetails_city: new FormControl(),
            addressDetails_state: new FormControl(""),
            addressDetails_country: new FormControl(""),
            addressDetails_district: new FormControl(""),
            addressDetails_zip: new FormControl(null, [Validators.pattern("^[0-9]{6}$")]),
            addressDetails_phone1: new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_phone2: new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_mobile_fax: new FormControl(),
            addressDetails_personal_email: new FormControl(null,[Validators.email]),

            addressDetails_same_address: new FormControl(),
            addressDetails_address1: new FormControl(null, [Validators.required]),
            addressDetails_city1: new FormControl(),
            addressDetails_state1: new FormControl(""),
            addressDetails_country1: new FormControl(""),
            addressDetails_district1: new FormControl(""),
            addressDetails_zip1: new FormControl(null, [Validators.pattern("^[0-9]{6}$")]),
            addressDetails_phone11: new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_phone21: new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_mobile_fax1: new FormControl(),
            addressDetails_personal_email1: new FormControl(null,[Validators.email]),
          });
          this.addressDetailsFrom.valueChanges.subscribe((x)=> this.updateaddress(x));





      /* Qualification details information end here */
      this.qualificationForm = this.ang.group
      ({
        qualification_details: this.ang.array([this.qualification_Group()]),
      });

      this.qualificationForm.controls['qualification_details'].valueChanges.subscribe(value => {});

      //this.qualificationForm.controls.get['qualification_details'].valueChanges.subscribe((x)=>this.QualificationChange(x));


      /* Employment details information end here */
      this.employmentForm = this.ang.group({
        employment_details: this.ang.array([this.employment_Group()]),
      });



     /* skill details information start here */
        this.skillDetailsFrom =  this.ang.group({
          skillset_details: this.ang.array([this.skillset_Group()]),
          });


          this.data.getBasicForm().subscribe((data)=>
            {
              this.basicinfo=data;
            });

            this.data.getPaddress().subscribe((data)=>
            {
              this.addressDetails=data;
            });

            this.data.getQualification().subscribe((data)=>
            {
              this.qualificationDetails=data;
            });

            this.data.getEmployment().subscribe((data)=>
            {
              this.employmentDetails=data;
            });

            this.data.getSkill().subscribe((data)=>
            {
              this.skillDetails=data;
            });
  }





 basicinfo_onRegister()
 {
   this.data.addBasicForm(this.BasicinfoFrom.value).subscribe((x)=>
    {
      this.basicinfo.push(this.BasicinfoFrom.value);
      alert("Data Added successfully!....");
      console.log('Basic Information', JSON.stringify(this.BasicinfoFrom.value));
    });
 }


 //QualificationChange(val: string)
 //{
   //this.res5 =this.basicinfo[0].basicinfo_employee_number;
   //this.qualificationForm.get('qualification_details').setValue(this.res5);
  //console.log("angle" ,this.res5);
  //this.qualificationForm.get('qualification_details').get([0,'basicinfo_employee_number']).setValue(this.res5);
  //console.log(this.qualificationForm.get('qualification_details').get([0,'basicinfo_employee_number']).setValue(this.res5));
//}




AgeCalculation(val: Date){
 var today = new Date();
 var year= today.getFullYear();
 var birthDate= new Date(val).getFullYear();
 var a=year-birthDate;
this.BasicinfoFrom.get('basicinfo_age').setValue(a);
}

basicinfo_onSelectedFile(event) {
 if (event.target.files){
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload = (event:any ) =>
     {
       this.basicinfo.push(event.target.result);
     }
 }
 }


//basicinfo_onSelectedFile(event)
 //{
  // if(event.target.files.length>0)
  // {
  //   const file= event.target.files[0];
  //   this.BasicinfoFrom.get('basicinfo_file').setValue(file);
  // }
  //this.selectedFile = event.target.files[0];


 // this.BasicinfoFrom.get('basicinfo_file').updateValueAndValidity()
//}




// basicinfo_onSelectedFile(event, field) {
//   if (event.target.files && event.target.files.length) {
//     const [file] = event.target.files;
//     if (!file.type.startsWith('basicinfo_file')) {
//       this.BasicinfoFrom.get(field).setErrors({
//         required: true
//       });
//     }
//     console.log(file.name);
//   }
// }

 onUpload():void
 {
  console.log(this.selectedFile);

  return this.BasicinfoFrom.get('basicinfo_file').patchValue({
    file: this.selectedFile.name
  });

      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.

      //uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

     //Make a call to the Spring Boot Application to save the image
      // this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      //   .subscribe((response) => {
      //     if (response.status === 200)
      //     {
      //       this.message = 'Image uploaded successfully';
      //     }
      //     else
      //       {
      //           this.message = 'Image not uploaded successfully';
      //       }
      //   });
 }

//this method (basicinfo) is disbled the button upto data is not present in array
basicinfo_OnNextClick()
  {
   if( this.basicinfo.length ==0)
   {
     return true;
   }
  }

basicinfo_OnNextClick1()
{
  this.flag3=false;
  this.flag9=true;
}


personalDetails_OnNextClick1()
  {
    this.flag9=false;
    this.flag10=true;
  }

  personaldetails_OnPreviousClick()
  {
    this.flag3 =true;
    this.flag9 =false;
  }

bankDetails_OnNextClick1()
  {
    this.flag10 =false;
    this.flag4 =true;
  }

  bankdetails_OnPreviousClick()
  {
    this.flag9 =true;
    this.flag10 =false;
  }



addressDetails_onRegister()
{
  this.data.addPaddress(this.addressDetailsFrom.value).subscribe((x:any)=>
  {
  // if(x.affectedValue==1)
   //{
    alert("Data Added successful!....");
    this.addressDetails.push(this.addressDetailsFrom.value);
    //console.log('Current Address',JSON.stringify(this.addressDetails));
   //}
  //else(x.code=='ER_DUP_ENTRY')
  //{
  //alert("Duplicate");
  //}
  });
}


addressDetails_onclick()
  {
    this.flag1=true;
    this.isReadonly=!this.isReadonly;
  }





//this method is disbled upto data is not present in array
addressDetails_OnNextClick()
    {
    if( this.addressDetails.length ==0)
      {
        {return true;}
      }
  }

  addressDetails_OnNextClick1()
  {
    this.flag4=false;
    this.flag5=true;
  }

  addressDetails_OnPreviousClick()
  {
    this.flag10 =true;
    this.flag4 =false;
  }

//update the values for same address details
updateaddress(val:boolean){
if(val && this.addressDetailsFrom.get('addressDetails_same_address').value == true){
  this.addressDetailsFrom.patchValue({
   addressDetails_address1:[this.addressDetailsFrom.get('addressDetails_address').value],
   addressDetails_city1:[this.addressDetailsFrom.get('addressDetails_city').value],
   addressDetails_state1:[this.addressDetailsFrom.get('addressDetails_state').value],
   addressDetails_country1:[this.addressDetailsFrom.get('addressDetails_country').value],
   addressDetails_district1:[this.addressDetailsFrom.get('addressDetails_district').value],
   addressDetails_zip1:[this.addressDetailsFrom.get('addressDetails_zip').value],
   addressDetails_phone11:[this.addressDetailsFrom.get('addressDetails_phone1').value],
   addressDetails_phone21:[this.addressDetailsFrom.get('addressDetails_phone2').value],
   addressDetails_mobile_fax1:[this.addressDetailsFrom.get('addressDetails_mobile_fax').value],
   addressDetails_personal_email1:[this.addressDetailsFrom.get('addressDetails_personal_email').value],
 });

  //       this.addressDetails_address1= this.addressDetailsFrom.get('addressDetails_address').value;
  //       this.addressDetails_city1 = this.addressDetailsFrom.get('addressDetails_city').value;
  //       this.addressDetails_state1 = this.addressDetailsFrom.get('addressDetails_state').value;
  //       this.addressDetails_country1 = this.addressDetailsFrom.get('addressDetails_country').value;
  //       this.addressDetails_district1 = this.addressDetailsFrom.get('addressDetails_district').value;
  //       this.addressDetails_zip1 = this.addressDetailsFrom.get('addressDetails_zip').value;
  //       this.addressDetails_phone21 = this.addressDetailsFrom.get('addressDetails_phone2').value;
  //       this.addressDetails_phone11 = this.addressDetailsFrom.get('addressDetails_phone1').value;
  //       this.addressDetails_mobile_fax1 = this.addressDetailsFrom.get('addressDetails_mobile_fax').value;
  //       this.addressDetails_personal_email1 = this.addressDetailsFrom.get('addressDetails_personal_email').value;
  //     }
  //  else{
  //       this.addressDetails_address1 = null;
  //       this.addressDetails_city1 = null;
  //       this.addressDetails_state1 = null;
  //       this.addressDetails_country1 = null;
  //       this.addressDetails_district1 = null;
  //       this.addressDetails_zip1 = null;
  //       this.addressDetails_phone21 = null;
  //       this.addressDetails_phone11 = null;
  //       this.addressDetails_mobile_fax1 = null;
  //       this.addressDetails_personal_email1 = null;
  //       }
}
else{
        this.addressDetails_address1 = null;
        this.addressDetails_city1 = null;
        this.addressDetails_state1 = null;
        this.addressDetails_country1 = null;
        this.addressDetails_district1 = null;
        this.addressDetails_zip1 = null;
        this.addressDetails_phone21 = null;
        this.addressDetails_phone11 = null;
        this.addressDetails_mobile_fax1 = null;
        this.addressDetails_personal_email1 = null;
        }

}


  qualification_Group()
  {
      return this.ang.group
      ({
        qualification_qualification: new FormControl(null,[Validators.required]),
        qualification_institute:new FormControl (null,[Validators.required]),
        qualification_passing_year: new FormControl (null,[Validators.required]),
        qualification_score: new FormControl (null,[Validators.required]),
        qualification_qualification_area: new FormControl (null,[Validators.required]),
      });
  }

  qualification_onclickFlag(){
    this.flag2 = !this.flag2;
  }


qualification_onAddDetail(): void
  {
   this.counter=0;
   this.res="";
    this.qualificationDetails.push(this.qualificationForm.get('qualification_details').value);

      for(var i=0;i<=(this.qualificationForm.get('qualification_details').value).length-1;i++)
      {
        {
          this.data.addquali(this.qualificationForm.get('qualification_details').get([this.counter]).value).subscribe((x)=>
          {
            alert("Data Added Successfully");
          }
          );}
        //this.res=this.qualificationForm.get('qualification_details').get([this.counter]).value;
        this.counter++;
       // console.log('Qualification Details',this.counter,this.res);
      }
  }

  get qualiArray()
  {
    return<FormArray>this.qualificationForm.get('qualification_details');
  }


  addqualification()
  {
    this.qualiArray.push(this.qualification_Group());
  }

  deletequalification(index)
  {
  this.qualiArray.removeAt(index);
  }


  qualification_myReset()
  {
  this.qualiArray.reset();
  }


qualification_addang() {
  const control = <FormArray>this.qualificationForm.get('qualification_details');
  control.push(this.qualification_Group());
}


qualification_getang(form): Array<any> {
  return form.controls.qualification_details.controls;
}

qualification_Duplicate(quali): boolean {
  let myArray = this.qualification_getang(this.qualificationForm);
  let test = myArray.filter(data => data.controls.qualification_qualification.value == quali && quali != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}


qualification_onSaveDetail(control: AbstractControl)
{
   if (this.qualificationDetails.length == 0)
   {
     alert("Data is not Added...") ;
   }
 }



qualification_OnClickAdd()
 {
  if( this.qualificationDetails.length == 0 )
  {
    return true;
  }
 }

 qualification_OnClickAdd1()
 {
  this.flag5=false;
  this.flag6=true;
 }

 qualification_OnClickPrevious()
 {
  this.flag4=true;
  this.flag5=false;
 }











//this is for group of array in oninit method
employment_Group()
  {
    return this.ang.group
    ({

      employment_fromDate: new  FormControl( null, [Validators.required ]),
      employment_toDate: new  FormControl( null, [Validators.required ]),
      employment_company: new  FormControl(null, [Validators.required]),
      employment_designation: new  FormControl(null, [Validators.required]),
      employment_relevant: new  FormControl(null, [Validators.required]),
      employment_nrelevant: new  FormControl(null, [Validators.required]),
    },
    [this.fromToDateValidation.bind(this)],
    );
  }




//validation it will check value from date value less than or not
  fromToDate(employment_fromDate: string, employment_toDate: string)
  {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[employment_fromDate];
      let t = group.controls[employment_toDate];
      if (f.value > t.value) {
        return {
          dates: "From Date should be less than to Date"
        };
      }
      return {};
    }
  }


  //get details from employee
  employment_getang(form): Array<any> {
  return form.controls.employment_details.controls;
}

Overlapping(fromDate): boolean {
  let myArray = this.employment_getang(this.employmentForm);
  let test = myArray.filter(data => data.controls.employment_toDate.value >= fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false;
  }
}


employment_Duplicate(fromDate): boolean {
  let myArray = this.employment_getang(this.employmentForm);
  let test = myArray.filter(data => data.controls.employment_fromDate.value == fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false;
  }
}

fromToDateValidation(control: AbstractControl):{ [key:string]:boolean}
{
      let myArray = this.employment_getang(this.employmentForm);
      this.tes=myArray.filter(data => data.get('employment_fromDate').value);
      this.les=myArray.filter(data => data.get('employment_toDate').value);
      if ( this.tes>this.les)
      {
        return { lessDate:true};
      }
      return null;
  };





employment_onAddDetail(): void
  {
    this.counter1=0
    this.res1="";
    for(var i=0;i<=(this.employmentForm.get('employment_details').value).length-1;i++)
      {
        {
          this.data.addEmployment(this.employmentForm.get('employment_details').get([this.counter1]).value).subscribe((x)=>
          {
           // console.log("success");
            this.employmentDetails.push(this.employmentForm.get('employment_details').value);
          }
          );}
       // this.res1=this.employmentForm.get('employment_details').get([this.counter1]).value;
        this.counter1++;
        alert("Data Added Successfully!...");
        //console.log('Employment Details',this.counter1,this.res1);
      }

  }


get EmployeeArray()
  {
    return<FormArray>this.employmentForm.get('employment_details');
  }




addemployment()
  {
    this.EmployeeArray.push(this.employment_Group());
  }

deleteemployment(index)
  {
    this.EmployeeArray.removeAt(index);
  }

employment_myReset(index)
  {
    this.EmployeeArray.reset(index);
  }


  employment_onSaveDetail(control: AbstractControl)
    {
      if (this.employmentDetails.indexOf(control.value) >= 0)
       {
         alert("Data is not Added...") ;
       }
       alert("Data is Added Successfully!...");
     }

     employment_OnClickAdd()
    {
     if( this.employmentDetails.length ==0)
     {
       return true;
     }

    }

    employment_OnClickPrevious()
    {
      this.flag5=true;
      this.flag6=false;

    }

    employment_OnClickAdd1()
    {
      this.flag6=false;
      this.flag7=true;

     // this.flag8=false;
      //this.flag9=true;
    }
    /* Employment details information end here */





  /* skill details information start here */


  //this is for group of array in oninit method
  skillset_Group()
    {
      return this.ang.group
      ({
      skill_category: new  FormControl(),
      skill: new  FormControl(),
      skill_level: new  FormControl(""),
      iscurrent: new  FormControl(""),
      experience: new  FormControl(),
      remarks: new  FormControl(),
      });
    }

//start here
skill_onAddDetail(): void {

  this.counter2=0;
  this.res3="";
    //this.skillDetails.push(this.skillDetailsFrom.get('skillset_details').value);
      alert("Data Added Successfully!...");
     for(var i=0;i<=(this.skillDetailsFrom.get('skillset_details').value).length-1;i++)
     {
         this.data.addSkill(this.skillDetailsFrom.get('skillset_details').get([this.counter2]).value).subscribe((x)=>
         {
          // console.log("success");
           this.skillDetails.push(this.skillDetailsFrom.get('skillset_details').value);

         });
         this.counter2++;
       //  this.res3=this.skillDetailsFrom.get('skillset_details').get([this.counter2]).value;
        // console.log('Skill Set Data',this.counter2,this.res3);
     }
}

get skillsetArray()
{
return<FormArray>this.skillDetailsFrom.get('skillset_details');
}

addskillset()
{
this.skillsetArray.push(this.skillset_Group());
}

deleteskillset(index)
{
this.skillsetArray.removeAt(index);
}

myReset(index)
{
this.skillsetArray.reset(index);
}

 //end data
 getang(form): Array<any> {
  return form.controls.skillset_details.controls;
}

skill_Duplicate(skill): boolean {
  let myArray = this.getang(this.skillDetailsFrom);
  let test = myArray.filter(data => data.controls.skill.value == skill && skill != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}


skill_onSaveDetail(control: AbstractControl)
  {
     if (this.skillDetails.indexOf(control.value) >= 0)
     {
       alert("Data is not Added...") ;
     }
     alert("Data is Added Successfully!...");
   }



   skill_onRegister(control: AbstractControl)
   {
      if (this.skillDetails.indexOf(control.value) == 0)
      {
        alert(" Register is Successfully!...");
      }
      alert("Register Successfully!...");
    }



//this method is for button hide and if data present in array then save button will be enable
skill_OnClickAdd()
   {
    if( this.skillDetails.length ==0 )
    {
      return true;
    }

   }

   skill_OnClickPrevious()
   {

    this.flag6=true;
    this.flag7=false;

    //this.flag9=false;
    //this.flag8=true;
   }

   skill_onSubmitDetail()
    {
      this.flag7=false;
      this.flag8=true;
      alert("Data is Added Successfully!...");
    }


  /* skill details information end here */

}
