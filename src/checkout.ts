import { Basket } from "./basket";
import { Item } from "./item";
import { round } from "./number";
import { PromotionalRules } from "./promotional-rules";
import { ItemDiscount } from "./promotional-rules/item-discount";
import { TotalDiscount } from "./promotional-rules/total-discount";

export class Checkout {
    constructor(
        protected basket: Basket,
        protected promotionalRules: Array<PromotionalRules>
    ) { }

    scan(item: Item): boolean {
        this.basket.items.push(item);
        return true;
    }

    get total(): number {
        let price = this.basket.items.reduce(
            (price, item) => {
                let itemRule: any = this.promotionalRules.find(
                    (rule) => rule instanceof ItemDiscount && rule.id === item.id
                );
                if (itemRule?.apply(this.basket)) {
                    return price + (item.price - itemRule.discount);
                }
                return price + item.price;
            },
            0
        );
        let totalRule: any = this.promotionalRules.find(
            (rule) => rule instanceof TotalDiscount
        );
        if (totalRule?.apply(this.basket)) {
            return round(price - (price * totalRule.discount), 2);
        }
        return round(price, 2); 
    }
}