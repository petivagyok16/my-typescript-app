export interface CartItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly count: number;
}