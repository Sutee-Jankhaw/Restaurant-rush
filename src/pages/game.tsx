import { products } from "../data/product";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import type { Order, OrderItem } from "@/interfaces/order";
import type { CartItem } from "@/interfaces/cart";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function Game() {
const createOrder = (): Order => {
  const items: OrderItem[] = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(
      Math.random() * products.length
    );
    const quantity = Math.floor(Math.random() * 3) + 1;

    const product = products[randomIndex];

    const existingItem = items.find(
      item => item.productId === product.id
    );
    if (existingItem) {
      existingItem.quantity += 1
    } else {
        items.push({
        productId: products[randomIndex].id,
        quantity: quantity,
      });
    }
  }
  const newOrder: Order = {
    id: Date.now(),
    items: items,
  };
  return newOrder;
};

const addToCart = (productId: number) => {
  setCart((currentCart) => {
    const existingItem = currentCart.find(
      item => item.productId === productId
    );
    if (existingItem) {
      return currentCart.map(item =>
        item.productId === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      return [
        ...currentCart,
        {
          productId: productId,
          quantity: 1,
        },
      ];
    };
  });
};

const increaseQuantity = (productId: number) => {
  setCart((currentCart) => {
    return currentCart.map(item =>
      item.productId === productId 
      ? {
          ...item,
          quantity: item.quantity + 1,
        }
      : item
    );
  });
}
const decreaseQuantity = (productId: number) => {
  setCart((currentCart) => {
    return currentCart.map(item =>
      item.productId === productId 
      ? {
          ...item,
          quantity: item.quantity - 1,
        }
      : item
    );
  });
}
const removeFromCart = (productId: number) => {
  setCart((currentCart) =>
    currentCart.filter(
      (item) => item.productId !== productId
    )
  );
};
const [cart, setCart] = useState<CartItem[]>([]);
const [order] = useState<Order>(() => createOrder());
console.log(order)
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 m-10">
        <Card>
          <CardHeader>
            <CardTitle>Customer Order</CardTitle>
          </CardHeader>

          <CardContent>
            {order.items.map((item) => {
              const product = products.find(
              product => product.id === item.productId
            );

            if (!product) return null;

            return (
              <div key={item.productId} className="flex items-center gap-4">
                <div>
                  <p className="font-bold">{product.name}</p>
                  <p>ราคา: {product.price} บาท</p>
                  <p>จำนวน: {item.quantity}</p>
                </div>
              </div>
              );
            })}
          </CardContent>
        </Card>
        <Card>
        <CardHeader>
          <CardTitle>Cart</CardTitle>
        </CardHeader>
        <CardContent>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item) => {
              const product = products.find(
                product => product.id === item.productId
              );

              if (!product) return null;

              return (
                <div
                  key={item.productId}
                  className="flex items-center justify-between mb-3"
                >
                  <p className="font-bold">{product.name}</p>
                  <p>จำนวน</p>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </Button>
                  <p>
                    {product.price * item.quantity} บาท
                  </p>
                  <Button
                    variant="destructive"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Delete
                  </Button>
                </div>
                );
              })
            )}
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-3 gap-6 m-10">
        {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>

          <CardContent>
            <p>ราคา : {product.price} บาท</p>
          </CardContent>

          <CardFooter>
            <Button className="w-full" onClick={() => addToCart(product.id)}>
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
      </div>
    </div>
  )
}

export default Game