import React from "react";
import { useNavigate } from "react-router-dom";
import "../adminDashboard/adminDashboard.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import "./cashierDashboard.css"

const CashierDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || "Canned Goods"
  );
  const [filteredItems, setFilteredItems] = useState([]);

  const [items] = useState([
    {
      id: 1,
      item_image:
        "https://cdn.shopify.com/s/files/1/0280/7126/4308/products/rsz_argentina-corned-beef-175g-73422-01_600x.png?v=1586878039",
      item_name: "Corned Beef",
      item_price: 50.0,
      item_stocks: 10,
      item_category: "Canned Goods",
    },
    {
      id: 2,
      item_image: "https://m.media-amazon.com/images/I/51ND7fUDw1L.jpg",
      item_name: "Greataste 3-in-1",
      item_price: 25.0,
      item_stocks: 20,
      item_category: "Beverages",
    },
    {
      id: 3,
      item_image:
        "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/en-ph/product-detail-pages/toothpaste/great-regular-flavor-toothpaste-sachet.jpg",
      item_name: "Colgate",
      item_price: 20.0,
      item_stocks: 15,
      item_category: "Toiletries",
    },
    {
      id: 4,
      item_image:
        "https://cdn.shopify.com/s/files/1/0275/0935/8707/products/image_6a2d676c-310a-4987-b167-166da8ba931e_500x500.jpg?v=1589202752",
      item_name: "Mr. Chips",
      item_price: 15.0,
      item_stocks: 5,
      item_category: "Junk Foods",
    },
    {
      id: 5,
      item_image:
        "https://www.officewarehouse.com.ph/__resources/_web_data_/products/products/images/2061.jpg",
      item_name: "Notebook 80 sheets",
      item_price: 10.0,
      item_stocks: 30,
      item_category: "School Supplies",
    },
    {
      id: 6,
      item_image:
        "https://cdn0.woolworths.media/content/wowproductimages/large/601342.jpg",
      item_name: "Jasmine Rice 1kg",
      item_price: 40.0,
      item_stocks: 25,
      item_category: "Rice",
    },
    {
      id: 7,
      item_image:
        "https://www.rebisco.com.ph/789-thickbox_default/choco-mucho-choco.jpg",
      item_name: "Choco Mucho",
      item_price: 15,
      item_stocks: 50,
      item_category: "Candies",
    },
    {
      id: 8,
      item_image:
        "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702558858/906e2dddab0ab25db0a7b2eec77001c0_large.png&width=512&type=webp&quality=90",
      item_name: "Richeese",
      item_price: 8.0,
      item_stocks: 40,
      item_category: "Biscuits",
    },
    {
      id: 9,
      item_image:
        "https://cdn.shopify.com/s/files/1/0418/4516/2151/products/MEGA_SARDINES_TS_155G_1828x.png?v=1603250764",
      item_name: "Mega Sardines",
      item_price: 35.0,
      item_stocks: 10,
      item_category: "Canned Goods",
    },
    {
      id: 10,
      item_image:
        "https://ccjmonlinegrocery.com/wp-content/uploads/2022/08/Coke-Mismo-300ml.jpg",
      item_name: "Coke Mismo 300ml",
      item_price: 20.0,
      item_stocks: 15,
      item_category: "Beverages",
    },
    {
      id: 11,
      item_image:
        "https://www.paparoo.ph/media/catalog/product/cache/d95d2f27b24973bf4b30c69010b78b92/h/e/head_shoulders_cool_menthol_shampoo_sachet_12ml_1.jpg",
      item_name: "Head & Shoulders",
      item_price: 30.0,
      item_stocks: 12,
      item_category: "Toiletries",
    },
    {
      id: 12,
      item_image:
        "https://down-ph.img.susercontent.com/file/5d56afe3aa6b1523cc037444145d7534",
      item_name: "Sweet Corn",
      item_price: 12.0,
      item_stocks: 8,
      item_category: "Junk Foods",
    },
    {
      id: 13,
      item_image:
        "https://www.officewarehouse.com.ph/__resources/_web_data_/products/products/images/1740.jpg",
      item_name: "Eraser",
      item_price: 3.0,
      item_stocks: 25,
      item_category: "School Supplies",
    },
    {
      id: 14,
      item_image: "https://cf.shopee.ph/file/53b1fc1539bb44167aaf0561f12641e9",
      item_name: "Basmati Rice 1kg",
      item_price: 60.0,
      item_stocks: 10,
      item_category: "Rice",
    },
    {
      id: 15,
      item_image:
        "https://sweetavenue.ph/wp-content/uploads/2020/02/bears-500g-1.jpg",
      item_name: "Gummy Bears",
      item_price: 7.0,
      item_stocks: 30,
      item_category: "Candies",
    },
    {
      id: 16,
      item_image:
        "https://www.rebisco.com.ph/599-thickbox_default/rebisco-crackers.jpg",
      item_name: "Crackers",
      item_price: 6.0,
      item_stocks: 20,
      item_category: "Biscuits",
    },
    {
      id: 17,
      item_image:
        "https://images.ctfassets.net/e8bhhtr91vp3/3kitavJjTM8JBPetd0oLxO/b8b43fe44b430671f09248df02ddf062/Product_img.webp?w=800&q=100",
      item_name: "Tea Bags",
      item_price: 10.0,
      item_stocks: 50,
      item_category: "Beverages",
    },
    {
      id: 18,
      item_image:
        "https://salangikopu.com/wp-content/uploads/2020/10/Hearttex-Bathroom-Tissues-Green-Tea-180g-Main.png",
      item_name: "Hearttex Bathroom Tissues",
      item_price: 8.0,
      item_stocks: 20,
      item_category: "Toiletries",
    },
    {
      id: 19,
      item_image:
        "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684702536057/ec7425d0db40ae6dbfbece65bac0be41_large.png&width=512&type=webp&quality=90",
      item_name: "Hunts Pork & Beans",
      item_price: 25.0,
      item_stocks: 10,
      item_category: "Canned Goods",
    },
    {
      id: 20,
      item_image:
        "https://cdn.shopify.com/s/files/1/0338/0694/2253/products/Jackn_JillMiniChocolatePretzels.99oz_front_2048x.jpg?v=1647376799",
      item_name: "Jack 'n Jill Pretzels",
      item_price: 10.0,
      item_stocks: 15,
      item_category: "Junk Foods",
    },
  ]);

  useEffect(() => {
    const filteredItems = items.filter(
      (item) => item.item_category === selectedCategory
    );
    setFilteredItems(filteredItems);
  }, [selectedCategory, items]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category);
  };

  const renderItems = () => {
    if (filteredItems.length === 0) {
      return <p>No items found for the selected category</p>;
    }
    return filteredItems.map((item) => (
      <div key={item.id} className="cashier-grid-item">
        <img className="cashier-item-img" src={item.item_image} alt="" />
        <p>{item.item_name}</p>
        <p>P{item.item_price}</p>
        <button className="add-btn" onClick={() => addItemToCart(item)}>
          Add to Cart
        </button>
      </div>
    ));
  };

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      updatedCartItems.unshift(
        updatedCartItems.splice(existingCartItemIndex, 1)[0]
      );
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems([newItem, ...cartItems]);
    }
  };

  const increaseItemQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseItemQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity === 1) {
      const confirmResult = window.confirm(
        "Are you sure you want to remove this item?"
      );
      if (confirmResult) {
        const filteredCartItems = cartItems.filter(
          (item) => item.id !== itemId
        );
        setCartItems(filteredCartItems);
      }
    } else {
      setCartItems(updatedCartItems);
    }
  };

  const [total, setTotal] = useState(0);
  const [cash, setCash] = useState(0);
  const [change, setChange] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.item_price * item.quantity;
      });
      setTotal(total);
    };

    calculateTotalPrice();
  }, [cartItems]);

  const handleCashInput = (e) => {
    const cashInput = parseFloat(e.target.value);
    setCash(cashInput);
    setChange(cashInput - total);
  };
  const handleFinishClick = () => {
    if (cash < total) {
      window.alert("Cash is not enough.");
    } else {
      setCartItems([]);
      setTotal(0);
      setCash(0);
      setChange(0);
      window.alert("Transaction successful!");
    }
  };

  return (
    <div className="cashier-container">
      <div className="cashier-dashboard-container">
        <div className="cashier-top-bar">
          <div className="cashier-return-btn" onClick={() => navigate(-1)}>
            <IoChevronBackOutline color="#FFFFFF" size="1.5vw" />
            <p>Return to Homepage</p>
          </div>
          <h1 className="cashier-logo">Sari Sari Store</h1>
          <div></div>
        </div>
        <div className="cashier-content-container">
          <div className="cashier-category-container">
            <div className="cashier-btn-container">
              <div
                className={`cashier-category-btn ${
                  selectedCategory === "Canned Goods" ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick("Canned Goods")}
              >
                <p>Canned Goods</p>
              </div>
              <div
                className={`cashier-category-btn ${
                  selectedCategory === "Beverages" ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick("Beverages")}
              >
                <p>Beverages</p>
              </div>
              <div
                className={`cashier-category-btn ${
                  selectedCategory === "Toiletries" ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick("Toiletries")}
              >
                <p>Toiletries</p>
              </div>
              <div
                className={`cashier-category-btn ${
                  selectedCategory === "Junk Foods" ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick("Junk Foods")}
              >
                <p>Junk Foods</p>
              </div>
            </div>
            <div className="cashier-btn-container">
              <div
                className={`cashier-category-btn ${
                  selectedCategory === "School Supplies" ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick("School Supplies")}
              >
                <p>School Supplies</p>
              </div>
              <div
                className={`cashier-category-btn ${
                  selectedCategory === "Rice" ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick("Rice")}
              >
                <p>Rice</p>
              </div>
              <div
                className={`cashier-category-btn ${
                  selectedCategory === "Candies" ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick("Candies")}
              >
                <p>Candies</p>
              </div>
              <div
                className={`cashier-category-btn ${
                  selectedCategory === "Biscuits" ? "selected" : ""
                }`}
                onClick={() => handleCategoryClick("Biscuits")}
              >
                <p>Biscuits</p>
              </div>
            </div>
          </div>
          <div className="cashier-grid-container">
            <div className="cashier-grid-wrapper">{renderItems()}</div>
          </div>
        </div>
      </div>
      <div className="cashier-cart">
        <div className="your-cart">
          <h2>Your Cart</h2>
          <div className="cart-container">
            <div>
              {cartItems.length === 0 ? (
                <div className="cart-items">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      className="cart-item-img"
                      src={item.item_image}
                      alt=""
                    />
                    <div>
                      <p>{item.item_name}</p>
                      <p>P{item.item_price}</p>
                      <div className="qty-container">
                        <div className="add-minus-container">
                          <button
                            onClick={() => decreaseItemQuantity(item.id)}
                            className="add-minus-qty"
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            onClick={() => increaseItemQuantity(item.id)}
                            className="add-minus-qty"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="cashier-input">
            <div className="input-container">
              <p>Total:</p>
              <input
                type="number"
                id="total"
                placeholder="P"
                className="field-input"
                value={total}
                readOnly={true}
              />
            </div>
            <div className="input-container">
              <p>Cash Tendered:</p>
              <input
                type="number"
                id="cash"
                placeholder="Enter cash"
                className="field-input"
                value={cash}
                onChange={handleCashInput}
              />
            </div>
            <div className="input-container">
              <p>Change:</p>
              <input
                type="number"
                id="change"
                placeholder="P"
                className="field-input"
                value={change}
                onChange={() => {}}
                readOnly={true}
              />
            </div>
            <button
              style={{ alignSelf: "center", marginTop: "1vw" }}
              className="add-btn"
              onClick={handleFinishClick}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashierDashboard;