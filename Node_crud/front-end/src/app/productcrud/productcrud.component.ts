import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.scss']
})
export class ProductcrudComponent
{
 
 
  ProductArray : any[] = [];
  currentProductID = "";
 
  name: string ="";
  address: string ="";
  phone: string ="";
  
  constructor(private http: HttpClient )
  {
    this.getAllProduct();
  }
  getAllProduct() {
 
    this.http.get("http://127.0.0.1:8000/user/getAll")
    .subscribe((resultData: any)=>
    {
      
        console.log(resultData);
        this.ProductArray = resultData.data;
    });
 
 
  }
 
  setUpdate(data: any)
  {
   this.name = data.name;
   this.address = data.address;
   this.phone = data.phone;
 
   this.currentProductID = data._id;
  
  }
 
  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
 
    };
    
    this.http.patch("http://127.0.0.1:8000/user/update"+ "/"+this.currentProductID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Updateddd")
        this.getAllProduct();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://127.0.0.1:8000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Deletedddd")
        this.getAllProduct();
  
    });
    }
    
  save()
  {
    if(this.currentProductID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
register()
  {
 
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
  };
    this.http.post("http://127.0.0.1:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Add Successfully")
         //this.getAllEmployee();
        this.name = '';
        this.address = '';
        this.phone  = '';
        this.getAllProduct();
    });
  }
}