import { Api } from './components/base/Api';
import { AppAPI } from './components/Communications/App';
import { Cart } from './components/Models/Cart';
import { Catalog } from './components/Models/Catalog';
import { Customer } from './components/Models/Customer';
import './scss/styles.scss';
import { API_URL } from './utils/constants';
import { apiProducts } from './utils/data';

// Проверка каталога

const productsModel = new Catalog();
productsModel.setItems(apiProducts.items); 
productsModel.setCurrentItem(apiProducts.items[2]); 

console.log('Массив товаров из каталога: ', productsModel.getItems());
console.log('Товар по id: ', productsModel.getItemById("854cef69-976d-4c2a-a18c-2aa45046c390"));
console.log('Выбранный товар из каталога: ', productsModel.getCurrentItem());

// Проверка корзины

const productsCart = new Cart();
productsCart.addToCart(productsModel.getItemById("854cef69-976d-4c2a-a18c-2aa45046c390"));
productsCart.addToCart(productsModel.getItemById("b06cde61-912f-4663-9751-09956c0eed67"));

console.log('Массив товаров из корзины: ', productsCart.getCartList());
console.log('Сумма товаров в корзине: ', productsCart.getCartSum());
console.log('Кол-во товаров в корзине: ', productsCart.getCartCount());

console.log('Доступен ли товар с id "854cef69-976d-4c2a-a18c-2aa45046c390":', productsCart.getItemAvailability("854cef69-976d-4c2a-a18c-2aa45046c390"));

console.log('Доступен ли товар с id "b06cde61-912f-4663-9751-09956c0eed67":', productsCart.getItemAvailability("b06cde61-912f-4663-9751-09956c0eed67"));

productsCart.removeFromCart(productsModel.getItemById("b06cde61-912f-4663-9751-09956c0eed67"))

console.log('Новый массив товаров из корзины: ', productsCart.getCartList());

productsCart.emptyCart();

console.log('Очищенный массив товаров из корзины: ', productsCart.getCartList());

// Проверка пользователя

const customer = new Customer();

console.log('Начальные данные покупателя: ', customer.getUser());

customer.setUser({ email: 'example@mail.ru', phone: '+78005553535', address: 'Москва, ул. Ленина, 1' });
console.log('После полей: ', customer.getUser());

customer.setUser({ 
    email: 'newExample@mail.ru', 
    phone: '+79999999999',
    payment: 'card'
});
console.log('Новый массив данных покупателя: ', customer.getUser());

console.log('Ошибки валидации при заполненных полях: ', customer.validateUser());
console.log('Данные верны? ', customer.isValid());

customer.setUser({ email: '', address: '' });
console.log('После очистки части данных покупателя: ', customer.getUser());

console.log('Ошибки валидации: ', customer.validateUser());
console.log('Данные верны? ', customer.isValid());

customer.removeUser();
console.log('Очищеный массив покупателя: ', customer.getUser());

// Проверка Api приложения

const api = new Api(API_URL);
const appApi = new AppAPI(api);

appApi.getProductList()
    .then(data => {
        productsModel.setItems(data.items);
        console.log('Каталог товаров с сервера: ', productsModel.getItems());
    })
    .catch(error => {
        console.error('Ошибка при загрузке товаров: ', error);
    });