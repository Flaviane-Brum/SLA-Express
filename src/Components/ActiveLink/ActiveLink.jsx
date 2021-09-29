import { useRouter } from "next/router";
import useMedia from "../../Hooks/useMedia";
function ActiveLink({ children, href }) {
  const mobile = useMedia("(max-width:40rem)");
  const router = useRouter();

  const style = {
    color: router.asPath === href ? "#1fa4e5" : "#fb1",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
