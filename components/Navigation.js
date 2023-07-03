import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  height: 100%;
  margin: 0;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 0 0.3rem;
  color: ${({ active }) => (active ? "var(--primary-color)" : "black")};
  font-weight: bold;
  &:hover {
    border-bottom: 5px dotted var(--primary-color);
  }
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
      <List role="list">
        <li>
          <Link href="/">
            <NavLink active={router.pathname === "/"}>Spotlight</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/art-pieces">
            <NavLink active={router.pathname === "/art-pieces/index.js"}>
              Art Pieces
            </NavLink>
          </Link>
        </li>
      </List>
    </nav>
  );
}
