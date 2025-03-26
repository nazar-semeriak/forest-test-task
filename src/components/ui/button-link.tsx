import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink({
  children,
  href,
  className,
  ...props
}: Props) {
  return (
    <Link
      to={href}
      className={clsx(
        "h-10 w-full sm:w-80 flex justify-center items-center bg-secondary hover:bg-accent/80 rounded-full transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
