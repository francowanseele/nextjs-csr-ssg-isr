import clsx from "clsx";
import UnstyledLink from "./UnstyledLink";

export default function CustomLink({ children, className = "", ...rest }) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        "inline-flex items-center font-bold hover:text-primary-400 animated-underline",
        "focus:outline-none focus-visible:text-primary-400 ",
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
