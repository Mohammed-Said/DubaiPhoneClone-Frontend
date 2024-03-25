import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IUser } from '../../models/user/iuser';
import { Observable } from 'rxjs';
import { ICreatingUser } from '../../models/user/icreating-user';
import {IUpdatedUser} from '../../models/user/iupdated-user'
import { CreatingCartItem } from '../../models/CartItem/creating-cart-item';
import { GetOrder } from '../../models/Order/get-order';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL!:string
  constructor(private httpClient:HttpClient) {
    this.URL=environment.serverURL+"/api/user"
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
