import Order from "@/components/orders/order";
import { ArrowLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface OrderType {
  id: string;
  createdAt: string;
  status: "Success" | "Pending" | "Rejected";
  gameName: string;
  gameId: number;
  amount: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    fetch("/api/orders", { method: "GET" })
      .then((response) => response.json())
      .then((res: OrderType[]) => setOrders(res));
  }, []);
  return (
    <div className="flex flex-col gap-4 w-full h-full place-self-start">
      <h1 className="flex gap-2 items-center text-secondary">
        <Link
          to="/"
          className="hover:bg-accent/20 p-1 rounded-xl transition-colors"
        >
          <ArrowLeftIcon />
        </Link>
        Orders
      </h1>
      <ul className="flex flex-col gap-2">
        {orders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </ul>
    </div>
  );
}
