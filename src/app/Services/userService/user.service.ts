import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IUser } from '../../Models/user/iuser';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ICreatingUser } from '../../Models/user/icreating-user';
import { IUpdatedUser } from '../../Models/user/iupdated-user';
import { CreatingCartItem } from '../../Models/CartItem/creating-cart-item';
import { GetOrder } from '../../Models/Order/get-order';
import { Ilogin } from '../../Models/user/ilogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL!: string;
  private AccountURL!: string;
  private isUserLoggedIn!: BehaviorSubject<boolean>;
  constructor(private httpClient: HttpClient,private router:Router) {
    this.URL = environment.serverURL + '/api/user';
    this.AccountURL = environment.serverURL + '/api/Account';

    this.isUserLoggedIn = new BehaviorSubject<boolean>(this.userState);
  }

  get userState(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  get UserLoggedIn(): BehaviorSubject<boolean> {
    return this.isUserLoggedIn;
  }
  login(email: string, password: string){
    let user: Ilogin = { username: email, password: password };
    this.httpClient
      .post<Ilogin>(this.AccountURL + '/Login', user)
      .subscribe({
        next: (data:any) => {
          if (data.status) {
            localStorage.setItem("token",data.token);
            this.isUserLoggedIn.next(true);
            this.router.navigate(['/']);
          }
        },
      });
  }
  logout() {
    localStorage.removeItem('token');
    this.isUserLoggedIn.next(false);
  }
  registration(user: ICreatingUser){
    // debugger;
    console.log(this.AccountURL+'/SignUp', user);
     this.httpClient.post<ICreatingUser>(this.AccountURL+'/SignUp', user).subscribe({next:()=>this.router.navigate(['/login']),});
  }
  addToMyCart(item: CreatingCartItem): Observable<any> {
    return this.httpClient.patch(this.URL + '/additemtomycart', item);
  }
  addToMyWishList(LovedProductId: number): Observable<any> {
    return this.httpClient.patch(
      this.URL + `/additemtomywishlist/${LovedProductId}`,
      {}
    );
  }
  getMyOrders(): Observable<GetOrder[]> {
    return this.httpClient.get<GetOrder[]>(this.URL + `/myorders`);
  }
  getUserOrders(userId: number): Observable<GetOrder[]> {
    return this.httpClient.get<GetOrder[]>(this.URL + `/orders/${userId}`);
  }
  getMyData(): Observable<IUser> {
    return this.httpClient.get<IUser>(this.URL + `/myprofile`);
  }
  updateMyData(user: IUpdatedUser): Observable<IUser> {
    return this.httpClient.put<IUser>(this.URL + `/myprofile`, user);
  }
}
