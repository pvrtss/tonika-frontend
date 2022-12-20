import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderWrap, Logo, UserIco, UserIcoWrap } from "./Header.style";

import { HeaderProps } from "./Header.types";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrap>
      <Link to="/home/">
        <Logo />
      </Link>
      <Menu as="div">
        <div>
          <Menu.Button>
            <UserIcoWrap>
              <UserIco />
            </UserIcoWrap>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                  )}
                >
                  Ваш профиль
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={() => {fetch("/api/logout/")
                  //     .then((res) => res.json()) !!! handle global user state
                      .then(() => navigate('/login'));}}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                  )}
                >
                  Выход
                </p>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </HeaderWrap>
  );
};
