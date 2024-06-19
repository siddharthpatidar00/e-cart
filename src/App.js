import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/Product_list';
import CartList from './components/CartList';

function App() {


  const [product, setProduct] = useState([

    {
      url: 'https://data.mascheronistore.com/imgprodotto/snakers-cool-man-white-green_138560_zoom.jpg',
      name: 'PUMA Shoes For Men',
      category: 'Shoes',
      seller: 'PUMA Store',
      price: 1999
    },
    {
      url: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c7c700ea9cf31e97a841f52eb1c0df5b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
      name: 'PUMA Shoes For Men',
      category: 'Shoes',
      seller: 'PUMA Store',
      price: 1999
    },
    {
      url: 'https://www.repertoirefashion.co.uk/images/boss-mens-ribeira-tennis-style-trainers-white-smooth-leather-sneakers-p38674-206345_related.jpg',
      name: 'Sneakers For Mens',
      category: 'Shoes',
      seller: 'Sports Shoe Factory',
      price: 1499,
    },
    {
      url: 'https://images.herzindagi.info/image/2022/May/clothes-to-repeat-fashion-tips.jpg',
      name: 'Fashionable Womens Clothes',
      category: 'Clothes',
      seller: 'Trends',
      price: 1799,
    },
    {
      url: 'https://cdn.firstcry.com/education/2022/11/13120532/Summer-Clothes-Vocabulary-in-English-for-Kids.jpg',
      name: 'Fashionable Kids Clothes',
      category: 'Clothes',
      seller: 'Trends',
      price: 999,
    },
    {
      url: 'https://www.nextdirect.com/nxtcms/resource/blob/5821518/d114a8023263017f86b11c206949508e/shackets-data.jpg',
      name: 'Fashionable Mens Clothes',
      category: 'Clothes',
      seller: 'Trends',
      price: 999,
    },
    {
      url: 'https://i.ytimg.com/vi/drMpzGxgwQE/maxresdefault.jpg',
      name: 'Android Smartwatch',
      category: 'watch',
      seller: 'Samsung',
      price: 3999,
    },
    {
      url: 'https://skmeico.in/cdn/shop/products/watches-1283-analog-digital-sports-watch-for-men-green-1.jpg?v=1705766782',
      name: 'Android Digitalwatch',
      category: 'watch',
      seller: 'Jio Mart',
      price: 2999,
    },
    {
      url: 'https://accessorizelondon.in/cdn/shop/products/MA-59303006001_1.jpg?v=1683285257',
      name: 'Wayfarer Sunglasses',
      category: 'Sunglasses',
      seller: 'Accessorize London',
      price: 1999,
    },
    {
      url: 'https://images-cdn.ubuy.co.in/633b1abdc85b29304d2d1678-baseball-cap-men-women-adjustable-plain.jpg',
      name: 'Fashionable Cap',
      category: 'Cap',
      seller: 'Jio Mart',
      price: 499,
    },
    {
      url: 'https://d2csxpduxe849s.cloudfront.net/media/BBD46EA3-F7E7-441D-8663C747FAEA082D/8BF020E7-2E21-4B55-B08F57A1EBA42E74/webimage-B438FBDA-B551-4BAA-849C8DD51B747660.png',
      name: 'Fashionable Cap',
      category: 'Cap',
      seller: 'Jio Mart',
      price: 499,
    },
    {
      url: 'https://m.media-amazon.com/images/I/51QF5REihTL._AC_UY1100_.jpg',
      name: 'Leather Belt',
      category: 'Belt',
      seller: 'Kaezri',
      price: 999,
    },


  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])


  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>
      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }
    </div>
  );


}







export default App;


// // src/App.js
// import { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import ProductList from './components/Product_list';
// import CartList from './components/CartList';
// import Navbar from './Navbar';  // Import Navbar component

// function App() {
//   const [product, setProduct] = useState([
//     {
//       url: 'https://data.mascheronistore.com/imgprodotto/snakers-cool-man-white-green_138560_zoom.jpg',
//       name: 'PUMA Shoes For Men',
//       category: 'Shoes',
//       seller: 'PUMA Store',
//       price: 1999
//     },
//     {
//       url: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c7c700ea9cf31e97a841f52eb1c0df5b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
//       name: 'PUMA Shoes For Men',
//       category: 'Shoes',
//       seller: 'PUMA Store',
//       price: 1999
//     },
//     {
//       url: 'https://www.repertoirefashion.co.uk/images/boss-mens-ribeira-tennis-style-trainers-white-smooth-leather-sneakers-p38674-206345_related.jpg',
//       name: 'Sneakers For Mens',
//       category: 'Shoes',
//       seller: 'Sports Shoe Factory',
//       price: 1499,
//     },
//     {
//       url: 'https://images.herzindagi.info/image/2022/May/clothes-to-repeat-fashion-tips.jpg',
//       name: 'Fashionable Womens Clothes',
//       category: 'Clothes',
//       seller: 'Trends',
//       price: 1799,
//     },
//     {
//       url: 'https://cdn.firstcry.com/education/2022/11/13120532/Summer-Clothes-Vocabulary-in-English-for-Kids.jpg',
//       name: 'Fashionable Kids Clothes',
//       category: 'Clothes',
//       seller: 'Trends',
//       price: 999,
//     },
//     {
//       url: 'https://www.nextdirect.com/nxtcms/resource/blob/5821518/d114a8023263017f86b11c206949508e/shackets-data.jpg',
//       name: 'Fashionable Mens Clothes',
//       category: 'Clothes',
//       seller: 'Trends',
//       price: 999,
//     },
//     {
//       url: 'https://i.ytimg.com/vi/drMpzGxgwQE/maxresdefault.jpg',
//       name: 'Android Smartwatch',
//       category: 'watch',
//       seller: 'Samsung',
//       price: 3999,
//     },
//     {
//       url: 'https://skmeico.in/cdn/shop/products/watches-1283-analog-digital-sports-watch-for-men-green-1.jpg?v=1705766782',
//       name: 'Android Digitalwatch',
//       category: 'watch',
//       seller: 'Jio Mart',
//       price: 2999,
//     },
//     {
//       url: 'https://accessorizelondon.in/cdn/shop/products/MA-59303006001_1.jpg?v=1683285257',
//       name: 'Wayfarer Sunglasses',
//       category: 'Sunglasses',
//       seller: 'Accessorize London',
//       price: 1999,
//     },
//     {
//       url: 'https://images-cdn.ubuy.co.in/633b1abdc85b29304d2d1678-baseball-cap-men-women-adjustable-plain.jpg',
//       name: 'Fashionable Cap',
//       category: 'Cap',
//       seller: 'Jio Mart',
//       price: 499,
//     },
//     {
//       url: 'https://d2csxpduxe849s.cloudfront.net/media/BBD46EA3-F7E7-441D-8663C747FAEA082D/8BF020E7-2E21-4B55-B08F57A1EBA42E74/webimage-B438FBDA-B551-4BAA-849C8DD51B747660.png',
//       name: 'Fashionable Cap',
//       category: 'Cap',
//       seller: 'Jio Mart',
//       price: 499,
//     },
//     {
//       url: 'https://m.media-amazon.com/images/I/51QF5REihTL._AC_UY1100_.jpg',
//       name: 'Leather Belt',
//       category: 'Belt',
//       seller: 'Kaezri',
//       price: 999,
//     },
//   ]);

//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const addToCart = (data) => {
//     setCart([...cart, { ...data, quantity: 1 }]);
//   };

//   const handleShow = (value) => {
//     setShowCart(value);
//   };

//   return (
//     <div>
//       <Navbar /> {/* Add the Navbar component */}
//       <Header count={cart.length} handleShow={handleShow}></Header>
//       {
//         showCart ?
//           <CartList cart={cart}></CartList> :
//           <ProductList product={product} addToCart={addToCart}></ProductList>
//       }
//     </div>
//   );
// }

// export default App;
