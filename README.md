There are 5 pages in this application.

A normal user flow would be login -> click on a product -> add to cart -> see cart -> checkout -> view order
Frontend is hosted in [here](https://mycafeteria.vercel.app/) with backend is hosted in `https://backend-mycafeteria.onrender.com` and database hosted on Clever Cloud

1. Login Page
![login page](https://i.imgur.com/3mEUPhb.png)
Currently the login page only supports dummy data with **Username**: john.doe **Password**: 123456

2. Product Page
![product page](https://i.imgur.com/vuFQZw3.png)
This page uses API to display product and product detail. User can filter based on category. Click on a product to open product detail page

3. Product Detail Page
![product detail page](https://i.imgur.com/NUIAxWJ.png)
This page uses API to get product detail. Use the buttons to increase/decrease quantity to add to cart. Click 'Add to Cart' to add the product to cart.

4. Cart Page
![cart page](https://i.imgur.com/szSxvr4.png)
This page uses localstorage to keep the cart contents. User can see the total amount needed to be paid and user can pick a payment method.
Click on 'Place an Order' to be redirected to orders page

5. Orders Page
![orders page](https://i.imgur.com/u6AoAOL.png)
This page displays completed and ongoing orders. You can also access this page by clicking on the avatar icon on the top right corner beside the Log Out button.

By logging out, all cart and order data will be erased.

Considered features:

- Register/Sign Up
- Product search and filter with backend
- Product availability validation
- Customizable orders
    - Adding radio buttons/checkboxes in product detail page to add customization (ex: Exchange rice to fries)
    - Add notes to order
- Validation for cart if product is 0
- Delete from cart
- Kitchen/restaurant side to indicate whether an order has been completed

# MyCafeteria

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
