export class BasicForm
{
  public constructor(
    public id :number,
    public basicinfo_employee_number :number,
    public basicinfo_employee_title : string,
    public basicinfo_employee_name : string,
    public basicinfo_employee_address : string,
    public basicinfo_firstname : string,
    public basicinfo_middlename : string,
    public basicinfo_lastname : string,
    public basicinfo_initial : string,
    public basicinfo_gender : string,
    public basicinfo_dob : string,
    public basicinfo_age : number,
    public basicinfo_official_phone : string,
    public basicinfo_mobile : string,
    public basicinfo_fax : string,
    public basicinfo_official_email : string,
    public basicinfo_personal_email : string,
    public basicinfo_personal2_email : string,
    public basicinfo_personal3_email : string,
    public basicinfo_file : string,
    public personalDetails_birthplace: string,
    public personalDetails_religion: string,
    public personalDetails_caste: string,
    public personalDetails_domicile: string,
    public personalDetails_nationality: string,
    public personalDetails_voterid: string,
    public personalDetails_pan: string,
    public personalDetails_aadhaar: string,
    public personalDetails_marriage_status: string,
    public personalDetails_no_children:  string,
    public personalDetails_marriage_date: string,
    public personalDetails_spouse_name:string,
    public bankDetails_bank_name :string,
    public bankDetails_account_type :string,
    public bankDetails_account_number:string,
    public bankDetails_peyment_type:string,
    public bankDetails_branch_detail:string,
    public bankDetails_ifsc:string,
    public bankDetails_reimbursement_name:string,
    public bankDetails_reimbursement_number:string
   ){}

}




export class employment
{
  public constructor(
    public id :number,
    public eid :number,
    public employment_fromDate: string,
    public employment_toDate: string,
    public employment_company: string,
    public employment_designation: string,
    public employment_relevant: string,
    public employment_nrelevant: string

    ){}

 }



 export class paddress
 {
   public constructor(
    public id :number,
    public addressDetails_address: string,
    public addressDetails_city: string,
    public addressDetails_state: string,
    public addressDetails_country: string,
    public addressDetails_district: string,
    public addressDetails_zip: string,
    public addressDetails_phone1: string,
    public addressDetails_phone2: string,
    public addressDetails_mobile_fax: string,
    public addressDetails_personal_email: string,
    public addressDetails_same_address: string,

    public addressDetails_address1: string,
    public addressDetails_city1: string,
    public addressDetails_state1: string,
    public addressDetails_country1: string,
    public addressDetails_district1: string,
    public addressDetails_zip1: string,
    public addressDetails_phone11: string,
    public addressDetails_phone21: string,
    public addressDetails_mobile_fax1: string,
    public addressDetails_personal_email1: string,


    ){}

  }




  export class quali
 {
   public constructor(
    public id :number,
    public qid :number,
    public qualification_qualification: string,
    public qualification_institute: string,
    public qualification_passing_year: string,
    public qualification_score: string,
    public qualification_qualification_area: string

    ){}
  }





  export class skill
 {
   public constructor(
    public id :number,
    public skid :number,
    public skill_category: string,
    public skill: string,
    public skill_level: string,
    public iscurrent: string,
    public experience: string,
    public remarks: string
    ){}

  }
