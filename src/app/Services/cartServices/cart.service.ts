import { Injectable } from '@angular/core';
import { UserService } from '../userService/user.service';
import { IUser } from '../../Models/user/iuser';
import { ICartItem } from '../../Models/CartItem/icart-item';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductCart } from '../../Models/CartItem/iproduct-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private URL!: string;
  private cart: ICartItem[] = [];
  constructor(
    private _userService: UserService,
    private httpClient: HttpClient
  ) {
    this.URL = environment.serverURL + '/api/cart';
    if (localStorage.getItem('cart'))
      this.cart = JSON.parse(localStorage.getItem('cart') as string);
    if (_userService.userState)
      this.getUserCart(_userService.User?.nameidentifier as string);

  }

  addToCart(id: number) {
    let indexProdInCart = this.cart.findIndex((val) => val.productId === id);

    let cartItem: ICartItem;

    if (indexProdInCart === -1) {
      cartItem = {
        productId: id,
        quantity: 1,
      };
      this.cart.push(cartItem);
    } else {
      this.cart[indexProdInCart].quantity++;
      cartItem = this.cart[indexProdInCart];
    }

    if (this._userService.userState)
    {
      cartItem.userId = this._userService.User?.nameidentifier;
      this.addCartToApi(cartItem);
    }

    this.addCartToMemory();
  }
  private addCartToMemory() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  private addCartToApi(item: ICartItem) {
    this.httpClient.post<ICartItem>(this.URL, item).subscribe();
  }
  async getUserCart(id: string) {
    await this.httpClient
      .get<ICartItem[]>(this.URL + '/GetUserCart?userId=' + id)
      .subscribe({
        next: (result) => {
          result.forEach((cartItem) => {
            let indexProdInCart = this.cart.findIndex(
              (val) => val.productId === cartItem.productId
            );
            if (indexProdInCart === -1) {
              this.cart.push({
                productId: cartItem.productId,
                quantity: 1,
              });
            } else this.cart[indexProdInCart].quantity = cartItem.quantity;
          });
          this.addCartToMemory();
        }
      });
  }
  getCartProducts(id: string): Observable<IProductCart[]> {
    return this.httpClient.get<IProductCart[]>(this.URL + '/GetCartProducts?userId=' + id);
  }
}
