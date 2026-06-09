import logo from "@/assets/svg/logo.svg";
import { cn } from "@/utils";
import { Link } from "react-router";

function Logo({ className }: { className?: string }) {
  return (
    <Link to={"/"} className={cn(`group/logo ${className}`)}>
      <div className="flex items-center gap-1.5">
        <img
          className="size-8 transition-transform duration-500 ease-out group-hover/logo:scale-110 group-hover/logo:rotate-12"
          src={logo}
          alt="FlowBoard"
        />
        <span className="bg-linear-to-r from-primary to-cyan-500 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
          FlowBoard
        </span>
      </div>
    </Link>
  );
}

export default Logo;
