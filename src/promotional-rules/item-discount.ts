import { Basket } from "../basket";
import { PromotionalRules } from "../promotional-rules";

export class ItemDiscount implements PromotionalRules {
    constructor(
        public readonly id: number,
        public readonly minItems: number,
        public readonly discount: number
    ) {}

    apply(basket: Basket): boolean {
        return basket.items.filter(
            (item) => item.id === this.id
        ).length >= this.minItems;
    }
}