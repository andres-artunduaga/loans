# Loans Project

## Environment
Angular CLI version 9.1.1.
Node Version: 14.0.0,
NPM Version: 6.14.4

## Commands
Install Project
```
yarn install
```
Start Project
```
yarn start
```
Build Project
```
yarn build
```
Run Tests
```
yarn test
```
Run Lint
```
yarn lint
```

## Notes

* Backend developed using json-server

* Backend serves when running project `yarn start`

* Inital amount can be configured in environment files

* Total amount of money is persisted in the DB and it's loaded when app start

* Edge Case!!: When amount of money is 0, credit creation buttons are disabled

* Edge Case!!: When you want to create a credit but there is not enough money there are a couple of cases that might occur

  * If is in the main list and the user is approved, the user is created and no credits are attached to its account. However the user can create a credit when there is money available. If the user is rejected, a rejected credit is created and the user is not longer available to create new credits.

  * If is inside the user profile, no credits are created if the amount is greater than the funds

* Notifications are needed for Edge cases!
