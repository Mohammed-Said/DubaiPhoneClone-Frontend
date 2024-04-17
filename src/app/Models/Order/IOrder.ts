export interface IOrder {
  status: string;
  totalPrice: number;
  orderedAt: Date;
  deliveredOn: Date;
  address: string;
  city: string;
  shippingMethod: string;
  store?: string;
  firstName: string;
  lastName: string;
  phone: string;
  userId: string;
}
