import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicForm,employment,paddress,quali,skill} from "./basicform";
@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  url1:string= "http://localhost:3000/form/"
  url2:string= "http://localhost:3000/paddress/"
 // url3:string= "http://localhost:3000/saddress/"
  url4:string= "http://localhost:3000/qualification/"
  url5:string= "http://localhost:3000/employment/"
  url6:string= "http://localhost:3000/skill/"

  constructor(private data:HttpClient) { }

    getBasicForm()
    {
      return this.data.get<any>(this.url1);
    }
    getBasicFormById(id)
    {
      return this.data.get(this.url1+id);
    }

    addBasicForm(items:BasicForm)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      let body=JSON.stringify(items);
      return this.data.post(this.url1, body, {headers:head}  );
    }

    deleteBasicForm(id)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      return this.data.delete(this.url1+id, {headers:head} );
    }

    editBasicForm(items:BasicForm)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      let body =JSON.stringify(items);
      return this.data.put(this.url1+items.id,body, {headers:head} );
    }


    getPaddress()
    {
      return this.data.get<any>(this.url2);
    }
    getPaddressById(id)
    {
      return this.data.get(this.url2+id);
    }

    addPaddress(items:paddress)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      let body=JSON.stringify(items);
      return this.data.post(this.url2, body, {headers:head}  );
    }

    deletePaddress(id)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      return this.data.delete(this.url2+id, {headers:head} );
    }

    editPaddress(items:paddress)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      let body =JSON.stringify(items);
      return this.data.put(this.url2+items.id,body, {headers:head} );
    }

    getQualification()
    {
      return this.data.get<any>(this.url4);
    }
    getQualificationById(id)
    {
      return this.data.get(this.url4+id);
    }

    addquali(item:quali)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      let body=JSON.stringify(item);
      return this.data.post(this.url4, body, {headers:head}  );
    }


    deleteQualification(id)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      return this.data.delete(this.url4+id, {headers:head} );
    }

    updateQualification(items:quali)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      let body =JSON.stringify(items);
      return this.data.put(this.url4+items.qid,body, {headers:head} );
    }

    getEmployment()
    {
      return this.data.get<any>(this.url5);
    }
    getEmploymentById(id)
    {
      return this.data.get(this.url5+id);
    }

    addEmployment(items:employment)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      let body=JSON.stringify(items);
      return this.data.post(this.url5, body, {headers:head}  );
    }


    deleteEmployment(id)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      return this.data.delete(this.url5+id, {headers:head} );
    }

    updateEmployment(items:employment)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      let body =JSON.stringify(items);
      return this.data.put(this.url5+items.eid, body, {headers:head} );
    }


    getSkill()
    {
      return this.data.get<any>(this.url6);
    }
    getSkillById(id)
    {
      return this.data.get(this.url6+id);
    }

    addSkill(items:skill)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      let body=JSON.stringify(items);
      return this.data.post(this.url6, body, {headers:head}  );
    }


    deleteSkill(id)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      return this.data.delete(this.url6+id, {headers:head} );
    }

    updateSkill(items:skill)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      let body =JSON.stringify(items);
      return this.data.put(this.url6+items.skid,body, {headers:head} );
    }

}
