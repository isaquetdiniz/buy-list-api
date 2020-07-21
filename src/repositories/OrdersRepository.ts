import Order from '../models/Order';

class OrdersRepository {
  private orders: Order[];

  constructor() {
    this.orders = [];
  }

  public all(): Order[] {
    return this.orders;
  }

  public create(amount: number, totalPrice: number, product: string): Order {
    const order = new Order(amount, totalPrice, product);

    this.orders.push(order);

    return order;
  }
}

export default OrdersRepository;
