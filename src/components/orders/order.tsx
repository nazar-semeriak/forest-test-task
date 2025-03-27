import { OrderType } from "@/pages/orders";
import { Link } from "react-router-dom";

export default function Order({ order }: { order: OrderType }) {
  return (
    <Link to={`/orders/${order.id}`}>
      <li className="flex hover:bg-accent/40 transition-colors hover:cursor-pointer flex-col text-primary-foreground justify-center rounded-xl px-4 py-1  gap-2 w-full bg-accent/20">
        <header className="flex justify-between px-2">
          <div className="flex flex-col">
            <span className="text-accent/40">Transaction ID</span>
            <span>{order.id}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-accent/40">Date</span>
            <span>{order.createdAt}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-accent/40">Status</span>
            <span className="inline-flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full"></div>
              {order.status}
            </span>
          </div>
        </header>
        <hr className="" />
        <footer className="flex justify-between px-2">
          <div className="flex flex-col">
            <span className="text-accent/40">Game Name</span>
            <span>{order.gameName}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-accent/40">Game ID</span>
            <span>{order.gameId}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-accent/40">Amount</span>
            <span>{order.amount} $</span>
          </div>
        </footer>
      </li>
    </Link>
  );
}
