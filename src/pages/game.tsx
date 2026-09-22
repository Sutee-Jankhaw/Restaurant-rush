import { products } from "../data/product";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import type { Order, OrderItem } from "@/interfaces/order";
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
const [order] = useState<Order>(() => createOrder());
console.log(order)
  return (
    <div>
      <div className="grid grid-cols-5 gap-6">
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
      </div>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>

          <CardContent>
            <p>ราคา : {product.price} บาท</p>
          </CardContent>

          <CardFooter>
            <Button className="w-full">
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