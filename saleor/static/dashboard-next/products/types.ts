export interface AttributeType {
  id: string;
  name: string;
  slug: string;
  values?: Array<{
    name: string;
    slug: string;
  }>;
}

export interface AttributeValueType {
  name: string;
  slug: string;
}

export interface MoneyType {
  amount: number;
  currency: string;
}

export interface ProductImageType {
  id: string;
  sortOrder: number;
  url: string;
}
