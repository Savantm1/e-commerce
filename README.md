 Описание проекта:
=====================

О структуре: 
- api - логика работы с сервером;
- assets - картинки, шрифты, иконки;
- components - компоненты;
- Pages - страницы сайта;
- redux - state-manager.

Stack:
  - Back-end: Node.js, express, PostgreSQL,sequelize (Репозиторий https://github.com/Savantm1/e-commerce-backend);
  - Front-end: React, Redux Toolkit.

Данный проект является учебным и имитирует интернет магазин для покупки продуктов и ведения блога с возможностью комментирования постов.

Для стилизации компонентов исользовались различные подходы (styled-component, module.scss);

Информация о добавленных в корзину хранится в localStorage.

Данные о продукции получаются с сервера с помощью axios.

Сайт адаптивный ( до 320px).

Спасибо Petr Bilek - petrbilek.com за бесплатный макет. 

Проект состоит из 5 основных страниц.

### Главная страница
  
С помощью данной страницы осуществляется вся навигация по сайту.


На главной странице присутствуют:
  
  - Секция с блог-постами;
  - Секция с категорией Best Selling Products;
  - Секция с категорией Best From Farmers;
  - Слайдер с отзывами покупателей;
  - Секция с другими блог-постами;
  - Теги.
![alt text](descriptionProject/MainPage-1.PNG )

### Страница категории

  На данной странице можно отсортировать товары по необходимым фильтрам, добавить товары в корзину и перейти на страницу конкретного товара.
  
  При нажатии на List view \ Grid view (по умолчанию) изменяется отображение товаров на странице. 
  

На странице определенной категории присутствуют:
  
  - Секция с фильтрами (логика работы дорабатывается);
  
  - Продукты категории.
  
![alt text](descriptionProject/MainPage-1.PNG )


### Страница товара:

На данной странице представлена детальная информация о товаре и доставке.

Страница состоит из: 
 - Секция с картинками;
 - Информация о количестве;
 - Детальное описание;
 - БЖУ;
 - Другие товары этой категории.

### Страница Блога:

Страница состоит из: 
 - Секция с текстом поста;
 - Блок с формой для добавления коментария;
 - Уже имеющиеся коментарии на странице;
 - Другие посты.

### Остальной контент:
В Header присутствует иконка корзины, к которой можно редактировать данные о заказе( Информация о наполнении корзины хранится в localStorage). Также  присутствует иконка авторизации (функционал дорабатывается).
