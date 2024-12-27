/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/customers', 'CustomersController.index')
    Route.post('/customers', 'CustomersController.store')
    Route.get('/customers/:id', 'CustomersController.show')
    Route.put('/customers/:id', 'CustomersController.update')
    Route.delete('/customers/:id', 'CustomersController.destroy')

}).middleware('auth')

Route.group(() => {
    Route.get('/bank-accounts', 'BankAccountsController.index')
    Route.post('/bank-accounts', 'BankAccountsController.store')
    Route.get('/bank-accounts/:id', 'BankAccountsController.show')
    Route.put('/bank-accounts/:id', 'BankAccountsController.update')
    Route.delete('/bank-accounts/:id', 'BankAccountsController.destroy')

}).middleware('auth')

Route.group(() => {
    Route.get('/employees', 'EmployeesController.index')
    Route.post('/employees', 'EmployeesController.store')
    Route.get('/employees/:id', 'EmployeesController.show')
    Route.put('/employees/:id', 'EmployeesController.update')
    Route.delete('/employees/:id', 'EmployeesController.destroy')

}).middleware('auth')

Route.group(() => {
    Route.get('/products', 'ProductsController.index')
    Route.post('/products', 'ProductsController.store')
    Route.get('/products/:id', 'ProductsController.show')
    Route.put('/products/:id', 'ProductsController.update')
    Route.delete('/products/:id', 'ProductsController.destroy')
    Route.put('/update-product-image/:id', 'ProductsController.updateProductImage')

}).middleware('auth')

Route.group(() => {
    Route.get('/sales', 'SalesController.index')
    Route.post('/sales', 'SalesController.store')
    Route.get('/sales/:id', 'SalesController.show')
    Route.put('/sales/:id', 'SalesController.update')
    Route.delete('/sales/:id', 'SalesController.destroy')

}).middleware('auth')


Route.group(() => {

    Route.post("/login", "AuthController.login")
    Route.post("/logout", "AuthController.logout")

})