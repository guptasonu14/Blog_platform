import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-4 shadow bg-gray-700 fixed w-full z-50">
      <Container>
        <nav className="flex items-center justify-between flex-wrap">
          <div className="mr-4 mb-2 md:mb-0 w-24">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex flex-wrap items-center justify-end ">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="md:ml-4">
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-4 md:px-6 py-2 duration-200 hover:bg-blue-100 rounded-full mb-2 md:mb-0"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
