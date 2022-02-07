import { Basket } from "../basket";
import { PromotionalRules } from "../promotional-rules";

export class TotalDiscount implements PromotionalRules {
    constructor(
        public readonly minValue: number,
        public readonly discount: number
    ) {}

    apply(basket: Basket): boolean {
        return basket.items.reduce(
            (total, item) => total + item.price,
            0
        ) > this.minValue;
    }
}