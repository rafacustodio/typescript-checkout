import { Basket } from "./basket";

export interface PromotionalRules {
    apply(basket: Basket): boolean;
}