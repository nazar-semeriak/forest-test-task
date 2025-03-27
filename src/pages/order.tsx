import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OrderType } from "./orders";
import Order from "@/components/orders/order";
import { Button } from "@/components/ui/button";

export default function OrderPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState<OrderType>({} as OrderType);

  useEffect(() => {
    fetch(`http://localhost:3001/orders/${orderId}`)
      .then((res) => res.json())
      .then((orderItem) => setOrder(orderItem));
  });
  return (
    <div className="flex flex-col gap-4 w-full h-full place-self-start">
      <Order order={order} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-primary-foreground text-xl font-semibold">
          <div>Your Goods:</div>
          <div className="font-bold">1 - 299.99$</div>
        </div>

        <div className="flex flex-col gap-4 items-center py-6 rounded-xl justify-center bg-accent/20 text-primary-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-flex font-bold text-2xl">40,500</span>
            <span className="inline-flex font-semibold px-2 py-1 rounded-full bg-accent/40">
              +1,500
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex font-bold text-2xl">299,99$</span>
            <span className="inline-flex text-accent/40 ">
              <del>749.99$</del>
            </span>
          </div>
        </div>
        <Button variant={"outline"} className="rounded-full">
          Ask ?
        </Button>
      </div>
    </div>
  );
}
