import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IUser } from '../../Models/user/iuser';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ICreatingUser } from '../../Models/user/icreating-user';
import {IUpdatedUser} from '../../Models/user/iupdated-user'
import { CreatingCartItem } from '../../Models/CartItem/creating-cart-item';
import { GetOrder } from '../../Models/Order/get-order';
import { Ilogin } from '../../Models/user/ilogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL!:string
  private isuserlloged!:BehaviorSubject<boolean>;
  constructor(private httpClient:HttpClient) {
    this.URL=environment.serverURL+"/api/user"
    this.isuserlloged=new BehaviorSubject<boolean>(this.userstate)
   
   }

   get userstate():boolean{
      return (localStorage.getItem("token"))?true:false;
   }
   login(email:string,password:string){
      let user:Ilogin={username:email,password:password}
      this.httpClient.post<Ilogin>(environment.serverURL+"/api/Account/Login",user).subscribe({
         next:(data)=>{
            console.log(data);
            
         }
      })
      
      // localStorage.setItem("token",String(usertoken))
      // this.isuserlloged.next(true)
   }
   logout(){
      
      localStorage.removeItem("token")
      this.isuserlloged.next(false)
   }
   registration(user:ICreatingUser):Observable<IUser>{
      return  this.httpClient.post<IUser>(this.URL,user)
   }
   addToMyCart(item:CreatingCartItem):Observable<any>{
      return  this.httpClient.patch(this.URL+"/additemtomycart",item)
   }
   addToMyWishList(LovedProductId:number):Observable<any>{
      return  this.httpClient.patch(this.URL+`/additemtomywishlist/${LovedProductId}`,{})
   }
   getMyOrders():Observable<GetOrder[]>{
    return  this.httpClient.get<GetOrder[]>(this.URL+`/myorders`)
   }
   getUserOrders(userId:number):Observable<GetOrder[]>{
    return  this.httpClient.get<GetOrder[]>(this.URL+`/orders/${userId}`)
   }
   getMyData():Observable<IUser>{
    return  this.httpClient.get<IUser>(this.URL+`/myprofile`)
   }
   updateMyData(user:IUpdatedUser):Observable<IUser>{
    return  this.httpClient.put<IUser>(this.URL+`/myprofile`,user)
   }


}
