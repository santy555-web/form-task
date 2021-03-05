import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicForm,employment,paddress,quali,skill } from '../animation/basicform';
import { AnimationService } from '../animation/animation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { date, RxwebValidators } from '@rxweb/reactive-form-validators';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
temp;
  flag3 : boolean = true;
  flag4 : boolean = false;
  flag5 : boolean = false;
  flag6 : boolean = false;
  flag7 : boolean = false;
  flag8 : boolean = false;
  flag9 : boolean = false;
  flag10 : boolean = false;
  flag11 : boolean = false;
  counter:number;
  basicinfo: BasicForm []=[];
  basicinfo_age;
  BasicinfoFrom: FormGroup;
  imagePath:String;

  addressDetails: paddress []=[];

  //isReadonly= false;
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
  sez;
  sez1;
  sez2;
  taskid;
  taskid1;
  taskid2;
  taskid3;
  taskid4;
  taskid5;
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


  constructor(private ang:FormBuilder,
    private data:AnimationService,
    private _actroute:ActivatedRoute,
    private _router:Router ) { }

  ngOnInit(): void {
      /* basic information table start here */
      this.BasicinfoFrom  =  new FormGroup({
      id:new FormControl(),
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
      basicinfo_file: new  FormControl('',[
        RxwebValidators.file({maxFiles:1}),
        RxwebValidators.extension({extensions:[".jpg",".png"]})
      ],),

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
            id:new FormControl(),
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
          //this.addressDetailsFrom.valueChanges.subscribe((x)=> this.updateaddress(x));





      /* Qualification details information end here */
      this.qualificationForm = this.ang.group
      ({
        qualification_details: this.ang.array([]),
      });

      this.qualificationForm.controls['qualification_details'].valueChanges.subscribe(value => {});

      //this.qualificationForm.controls.get['qualification_details'].valueChanges.subscribe((x)=>this.QualificationChange(x));


      /* Employment details information end here */
      this.employmentForm = this.ang.group({
        employment_details: this.ang.array([]),
      });



     /* skill details information start here */
        this.skillDetailsFrom =  this.ang.group({
          skillset_details: this.ang.array([]),
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


            this.taskid = this._actroute.snapshot.params['id'];
            this.data.getBasicFormById(this.taskid).subscribe((x:BasicForm[]) =>
              {
                this.BasicinfoFrom.patchValue({
                  id:x[0].id,
                  basicinfo_employee_number:x[0].basicinfo_employee_number,
                  basicinfo_employee_title:x[0].basicinfo_employee_title,
                  basicinfo_employee_name:x[0].basicinfo_employee_name,
                  basicinfo_employee_address:x[0].basicinfo_employee_address,
                  basicinfo_firstname:x[0].basicinfo_firstname,
                  basicinfo_middlename:x[0].basicinfo_middlename,
                  basicinfo_lastname:x[0].basicinfo_lastname,
                  basicinfo_initial:x[0].basicinfo_initial,
                  basicinfo_gender:x[0].basicinfo_gender,
                  basicinfo_dob:x[0].basicinfo_dob,
                  basicinfo_age:x[0].basicinfo_age,
                  basicinfo_official_phone:x[0].basicinfo_official_phone,
                  basicinfo_mobile:x[0].basicinfo_mobile,
                  basicinfo_fax:x[0].basicinfo_fax,
                  basicinfo_official_email:x[0].basicinfo_official_email,
                  basicinfo_personal_email:x[0].basicinfo_personal_email,
                  basicinfo_personal2_email:x[0].basicinfo_personal2_email,
                  basicinfo_personal3_email:x[0].basicinfo_personal3_email,
                  personalDetails_birthplace:x[0].personalDetails_birthplace,
                  personalDetails_religion:x[0].personalDetails_religion,
                  personalDetails_caste:x[0].personalDetails_caste,
                  personalDetails_domicile:x[0].personalDetails_domicile,
                  personalDetails_nationality:x[0].personalDetails_nationality,
                  personalDetails_voterid:x[0].personalDetails_voterid,
                  personalDetails_pan:x[0].personalDetails_pan,
                  personalDetails_aadhaar:x[0].personalDetails_aadhaar,
                  personalDetails_marriage_status:x[0].personalDetails_marriage_status,
                  personalDetails_no_children:x[0].personalDetails_no_children,
                  personalDetails_marriage_date:x[0].personalDetails_marriage_date,
                  personalDetails_spouse_name:x[0].personalDetails_spouse_name,
                  bankDetails_bank_name:x[0].bankDetails_bank_name,
                  bankDetails_account_type:x[0].bankDetails_account_type,
                  bankDetails_account_number:x[0].bankDetails_account_number,
                  bankDetails_peyment_type:x[0].bankDetails_peyment_type,
                  bankDetails_branch_detail:x[0].bankDetails_branch_detail,
                  bankDetails_ifsc:x[0].bankDetails_ifsc,
                  bankDetails_reimbursement_name:x[0].bankDetails_reimbursement_name,
                  bankDetails_reimbursement_number:x[0].bankDetails_reimbursement_number,
                });
              }
            );


            this.taskid1=this._actroute.snapshot.params['id'];

            this.data.getPaddressById(this.taskid1).subscribe((x:paddress[]) =>
              {
                 this.addressDetailsFrom.patchValue({
                   id:x[0].id,
                   addressDetails_address:x[0].addressDetails_address,
                  addressDetails_city:x[0].addressDetails_city,
                  addressDetails_state:x[0].addressDetails_state,
                  addressDetails_country:x[0].addressDetails_country,
                  addressDetails_district:x[0].addressDetails_district,
                  addressDetails_zip:x[0].addressDetails_zip,
                  addressDetails_phone1:x[0].addressDetails_phone1,
                  addressDetails_phone2:x[0].addressDetails_phone2,
                  addressDetails_mobile_fax:x[0].addressDetails_mobile_fax,
                  addressDetails_personal_email:x[0].addressDetails_personal_email,
                  addressDetails_same_address:x[0].addressDetails_same_address,
                  addressDetails_address1:x[0].addressDetails_address1,
                  addressDetails_city1:x[0].addressDetails_city1,
                  addressDetails_state1:x[0].addressDetails_state1,
                  addressDetails_country1:x[0].addressDetails_country1,
                  addressDetails_district1:x[0].addressDetails_district1,
                  addressDetails_zip1:x[0].addressDetails_zip1,
                  addressDetails_phone11:x[0].addressDetails_phone11,
                  addressDetails_phone21:x[0].addressDetails_phone21,
                  addressDetails_mobile_fax1:x[0].addressDetails_mobile_fax1,
                  addressDetails_personal_email1:x[0].addressDetails_personal_email1,
                });
               }
             );


             this.taskid2=this._actroute.snapshot.params['id'];
             this.data.getQualificationById(this.taskid2).subscribe((x:quali[]) =>
               {
                   for(let i=0; i<=x.length-1;i++)
                   {
                    const control = <FormArray>this.qualificationForm.get('qualification_details');
                    control.push(this.qualification_Group());
                     let item =control.at(i);
                     item.patchValue({
                      qid:x[i].qid,
                      qualification_qualification:x[i].qualification_qualification,
                      qualification_institute:x[i].qualification_institute,
                      qualification_passing_year:x[i].qualification_passing_year,
                      qualification_score:x[i].qualification_score,
                      qualification_qualification_area:x[i].qualification_qualification_area,
                    });
                   }
                });


              this.taskid3=this._actroute.snapshot.params['id'];
             this.data.getEmploymentById(this.taskid3).subscribe((x:employment[]) =>
             {
               for(let i=0; i<=x.length-1;i++)
                {
                 const control = <FormArray>this.employmentForm.get('employment_details');
                 control.push(this.employment_Group());
                  let item =control.at(i);
                  item.patchValue({
                    eid:x[i].eid,
                    id:x[i].id,
                    employment_fromDate:x[i].employment_fromDate,
                    employment_toDate:x[i].employment_toDate,
                    employment_company:x[i].employment_company,
                    employment_designation:x[i].employment_designation,
                    employment_relevant:x[i].employment_relevant,
                    employment_nrelevant:x[i].employment_nrelevant,
                  });
                   }
                });

              this.taskid4=this._actroute.snapshot.params['id'];
             this.data.getSkillById(this.taskid4).subscribe((x:skill[]) =>
             {
                for(let i=0; i<=x.length-1;i++)
                {
                 const control = <FormArray>this.skillDetailsFrom.get('skillset_details');
                 control.push(this.skillset_Group());
                  let item =control.at(i);
                  item.patchValue({
                    skid:x[i].skid,
                    id:x[i].id,
                    skill_category:x[i].skill_category,
                    skill:x[i].skill,
                    skill_level:x[i].skill_level,
                    iscurrent:x[i].iscurrent,
                    experience:x[i].experience,
                    remarks:x[i].remarks,
                  });
                }
             });
  }







 basicinfo_onRegister()
 {
   this.data.editBasicForm(this.BasicinfoFrom.value).subscribe((x)=>
    {
      alert("Data Edited successfully!....");
     // this._router.navigate(['/showdata']);
    });
 }



AgeCalculation(val: Date){
 var today = new Date();
 var year= today.getFullYear();
 var birthDate= new Date(val).getFullYear();
 var a=year-birthDate;
this.BasicinfoFrom.get('basicinfo_age').setValue(a);
}

basicinfo_onFileSelected(event) {
 if (event.target.files){
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload = (event:any ) =>
     {
       this.basicinfo.push(event.target.result);
     }
 }
 }


 onSelectedFile(event)
 {
  if(event.target.files.length>0)
  {
    const file= event.target.files[0];
    this.BasicinfoFrom.get('basicinfo_file').setValue(file);
  }
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
  this.data.editPaddress(this.addressDetailsFrom.value).subscribe((x)=>
  {
    alert("Data Edited successfully!....");
  });
}


addressDetails_onclick()
  {
    this.flag1=true;
    //this.isReadonly=!this.isReadonly;
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
// updateaddress(val:boolean){
// if(val){
//         this.addressDetails_address1 = this.addressDetailsFrom.get('addressDetails_address').value;
//         this.addressDetails_city1 = this.addressDetailsFrom.get('addressDetails_city').value;
//         this.addressDetails_state1 = this.addressDetailsFrom.get('addressDetails_state').value;
//         this.addressDetails_country1 = this.addressDetailsFrom.get('addressDetails_country').value;
//         this.addressDetails_district1 = this.addressDetailsFrom.get('addressDetails_district').value;
//         this.addressDetails_zip1 = this.addressDetailsFrom.get('addressDetails_zip').value;
//         this.addressDetails_phone21 = this.addressDetailsFrom.get('addressDetails_phone2').value;
//         this.addressDetails_phone11 = this.addressDetailsFrom.get('addressDetails_phone1').value;
//         this.addressDetails_mobile_fax1 = this.addressDetailsFrom.get('addressDetails_mobile_fax').value;
//         this.addressDetails_personal_email1 = this.addressDetailsFrom.get('addressDetails_personal_email').value;
//       }
//    else{
//         this.addressDetails_address1 = null;
//         this.addressDetails_city1 = null;
//         this.addressDetails_state1 = null;
//         this.addressDetails_country1 = null;
//         this.addressDetails_district1 = null;
//         this.addressDetails_zip1 = null;
//         this.addressDetails_phone21 = null;
//         this.addressDetails_phone11 = null;
//         this.addressDetails_mobile_fax1 = null;
//         this.addressDetails_personal_email1 = null;
//         }
// }



    //this is for group of array in oninit method
  qualification_Group()
  {
      return this.ang.group
      ({
        id:new FormControl(),
        qid:new FormControl(),
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

      for(var i=0;i<=(this.qualificationForm.get('qualification_details').value).length-1;i++)
      {
        {
          this.data.updateQualification(this.qualificationForm.get('qualification_details').get([this.counter]).value).subscribe((x)=>
          {
            alert("Data Edited Successfully!...");

          }
          );}
          this.counter++;
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
      id:new FormControl(),
      eid:new FormControl(),
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
          this.data.updateEmployment(this.employmentForm.get('employment_details').get([this.counter1]).value).subscribe((x)=>
          {

            alert("Data Edited Successfully!...");
          }
          );}
          this.counter1++;
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
      id:new FormControl(),
      skid:new FormControl(),
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

     for(var i=0;i<=(this.skillDetailsFrom.get('skillset_details').value).length-1;i++)
     {
         this.data.updateSkill(this.skillDetailsFrom.get('skillset_details').get([this.counter2]).value).subscribe((x)=>
         {
          alert("Data Edited Successfully!...");
         });
         this.counter2++;
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






}
