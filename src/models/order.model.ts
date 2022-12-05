import {Entity, model, property} from '@loopback/repository';

@model()
export class UserInfo extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  userId: string;
  @property({type: 'string'})
  name: string;
  @property({type: 'string'})
  email: string;
  @property({type: 'string'})
  phone: string;
}

@model()
export class Products extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  productId: string;
  @property({type: 'string'})
  name: string;
  @property({type: 'number'})
  quantity: number;
  @property({type: 'number'})
  price: number;
}

@model()
export class MOP extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  mopId: string;
  @property({type: 'string'})
  name: string;
}

@model()
export class Discount extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  discountId: string;
  @property({type: 'string'})
  code: string;
}

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'},
  })
  id: string;

  @property({type: 'object'})
  customer: UserInfo;

  @property({type: 'string'})
  shippingAddress: string;

  @property({type: 'date'})
  orderedDate: Date;

  @property({type: 'date'})
  deliveryDate: Date;

  @property({type: 'boolean', default: false})
  isDelivered: boolean;

  @property({type: 'array', itemType: 'object'})
  products: Products[];

  @property({type: 'object', required: true})
  modeOfPayment: MOP;

  @property({type: 'number', required: true})
  subTotal: number;

  @property({type: 'object'})
  discountCode?: Discount;

  @property({type: 'string', default: '0%'})
  discount: string;

  @property({type: 'number', required: true})
  total: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order; // & OrderRelations;
