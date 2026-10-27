import { MenuItem } from '../data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface CustomerOrder {
  customerName: string;
  customerPhone: string;
  orderType: 'delivery' | 'pickup';
  deliveryZone: string;
  customAddress: string;
  notes: string;
}
