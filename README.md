# Wunder Checkout

The challenge is to implement a checkout system that scan items and apply promotional rules following the example:
```typescript
co = new Checkout(promotional_rules) co.scan(item)
co.scan(item)
price = co.total
```

## Requirements
- NodeJS
- Typescript

## How to set up?
- Clone the project
- Run `npm install`
- Run the tests using `npm run test`

## Description

I'm a full-stack developer more specialised on the backend.

This simple and interesting test made me think how to work with different pricing for the same product or the cart itself, whereas it could also be implemented as a price list, having different prices for the same products and each channel would have its own pricing.  
I've done a simple implementation using the data as a JSON file (mock) and loading that into their own objects in order to apply the discount.  
The testing was done using jest which is a simple testing framework, and had to add babel to the testing so it would work with typescript.