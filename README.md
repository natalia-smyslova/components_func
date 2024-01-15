[![Netology AHJ](https://github.com/natalia-smyslova/components_func/actions/workflows/web.yml/badge.svg)](https://github.com/natalia-smyslova/components_func/actions/workflows/web.yml)    


[![Build status](https://ci.appveyor.com/api/projects/status/2t2ki7r52ajrgq6c/branch/main?svg=true)](https://ci.appveyor.com/project/natalia-smyslova/components-func/branch/main)

[ДЕМО](https://natalia-smyslova.github.io/components_func/)

Страница интернет-магазина
===

Необходимо создать React-компонент `ShopItemFunc` (функциональный компонент), с помощью которого мы могли бы реализовывать представление информации о товарах из нашего каталога на сайте в таком виде (компонент обведён пунктирной линией):
![Внешний вид страницы после реализации компонента](https://github.com/natalia-smyslova/ra16-homeworks/raw/master/components/store-func/res/preview.png)

## Пример использования
```jsx
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

// Внутри компонента App
return (
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
)
```

## Описание компонента

Компонент должен иметь один props `item`, в котором он ожидает объект с информацией о товаре со следующими свойствами:
- `brand` — название производителя товара;
- `title` — название товара;
- `description` — краткое описание товара;
- `descriptionFull` — подробное описание товара;
- `price` — цена товара;
- `currency` — валюта товара.

Компонент должен создавать DOM элемент следующей структуры:
```html
<div class="main-content">
  <h2>Tiger of Sweden</h2>
  <h1>Leonard coat</h1>
  <h3>Minimalistic coat in cotton-blend</h3>
  <div class="description">
    Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.
  </div>
  <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
  <div class="divider"></div>
  <div class="purchase-info">
    <div class="price">£399.00</div>
    <button>Добавить в корзину</button>
  </div>
</div>
```

Соответственно название производителя необходимо подставить в `h2`, название товара в `h1`, краткое описание в `h3`, подробное описание в `div.description`, цену и валюту в `div.price`. При этом символ валюты должен следовать перед ценой, а цена должна быть представлена с двумя числами после запятой.

## Реализация

Реализуйте полноценный проект с помощью create-react-app. Для item можете использовать либо тип `object`, либо вынести item в класс и использовать `instanceOf`.

Используйте расположенный в этом каталоге CSS для стилизации.

**Необязательная часть задачи (со звездочкой)**: задействуйте prop-types в реализации проекта.
