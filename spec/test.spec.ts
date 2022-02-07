import products from "../data/products.json";
import promotions from "../data/promotions.json";
import { Basket } from "../src/basket";
import { Checkout } from "../src/checkout";
import { Item } from "../src/item";
import { PromotionalRules } from "../src/promotional-rules";
import { ItemDiscount } from "../src/promotional-rules/item-discount";
import { TotalDiscount } from "../src/promotional-rules/total-discount";

test("scan an item", () => {
    let checkout = new Checkout(
        new Basket(),
        []
    );
    expect(
        checkout.scan(new Item(products[0].id, products[0].name, products[0].price))
    ).toBeTruthy();
});

test("basked has total", () => {
    let checkout = new Checkout(
        new Basket(),
        []
    );
    checkout.scan(new Item(products[0].id, products[0].name, products[0].price));
    expect(checkout.total).toBeGreaterThan(0);
});

test("testing checkout ending price of 29.65", () => {
    let rules: Array<PromotionalRules> = [];
    console.log(promotions);
    promotions.forEach((promotion) => {
        if (promotion.type === "item" && promotion.id) {
            rules.push(new ItemDiscount(promotion.id, promotion.minItems, promotion.discount));
        } else if (promotion.type === "total" && promotion.minValue) {
            rules.push(new TotalDiscount(promotion.minValue, promotion.discount));
        }
    });
    let item1 = new Item(products[0].id, products[0].name, products[0].price);
    let item2 = new Item(products[1].id, products[1].name, products[1].price);
    let item3 = new Item(products[2].id, products[2].name, products[2].price);

    let checkout = new Checkout(new Basket(), rules);
    checkout.scan(item1);
    checkout.scan(item2);
    checkout.scan(item3);

    expect(checkout.total).toBe(29.65);
});

test("testing checkout ending price of 9.93", () => {
    let rules: Array<PromotionalRules> = [];
    promotions.forEach((promotion) => {
        if (promotion.type === "item" && promotion.id) {
            rules.push(new ItemDiscount(promotion.id, promotion.minItems, promotion.discount));
        } else if (promotion.type === "total" && promotion.minValue) {
            rules.push(new TotalDiscount(promotion.minValue, promotion.discount));
        }
    });
    let item1 = new Item(products[0].id, products[0].name, products[0].price);
    let item2 = new Item(products[1].id, products[1].name, products[1].price);

    let checkout = new Checkout(new Basket(), rules);
    checkout.scan(item2);
    checkout.scan(item1);
    checkout.scan(item2);

    expect(checkout.total).toBe(9.93);
});

test("testing checkout ending price of 31.44", () => {
    let rules: Array<PromotionalRules> = [];
    console.log(promotions);
    promotions.forEach((promotion) => {
        if (promotion.type === "item" && promotion.id) {
            rules.push(new ItemDiscount(promotion.id, promotion.minItems, promotion.discount));
        } else if (promotion.type === "total" && promotion.minValue) {
            rules.push(new TotalDiscount(promotion.minValue, promotion.discount));
        }
    });
    let item1 = new Item(products[0].id, products[0].name, products[0].price);
    let item2 = new Item(products[1].id, products[1].name, products[1].price);
    let item3 = new Item(products[2].id, products[2].name, products[2].price);

    let checkout = new Checkout(new Basket(), rules);
    checkout.scan(item2);
    checkout.scan(item1);
    checkout.scan(item2);
    checkout.scan(item3);

    expect(checkout.total).toBe(31.44);
});