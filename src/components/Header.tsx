import { Component, createSignal, mergeProps } from "solid-js";
import menuIcon from "../assets/icons/icon-menu.svg";
import closeIcon from "../assets/icons/icon-close.svg";
import HeaderUserInfo from "./HeaderUserInfo";

export default function Header() {
  const [expanded, setExpanded] = createSignal(false);

  const toggleMenu = () => setExpanded((exp) => !exp);

  return (
    <header class="wrapper relative pt-5 pb-7 px-6 flex items-center gap-4 md:gap-14 sm:border-b sm:border-b-gray-900 sm:py-0">
      <button
        aria-controls="primary-nav"
        aria-expanded={expanded()}
        onClick={toggleMenu}
        class="translate-y-[2px] sm:hidden"
      >
        <img src={menuIcon} alt="" aria-hidden="true" />
        <span class="sr-only">Toggle Menu</span>
      </button>
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
      <div
        class="fixed bg-black/75 inset-0 transition-opacity duration-300 ease-in-out sm:hidden sm:pointer-events-none"
        classList={{
          "opacity-100": expanded(),
          "opacity-0": !expanded(),
          "pointer-events-none": !expanded(),
        }}
      ></div>
      <nav
        id="primary-nav"
        class="z-50 fixed left-0 top-0 bottom-0 bg-white min-w-[250px] p-6 flex flex-col gap-[3.25rem] transition-transform duration-200 ease-in-out sm:bg-none sm:static sm:translate-x-0 sm:p-0 sm:pt-10 sm:gap-8"
        classList={{ ["-translate-x-full"]: !expanded() }}
      >
        <button
          aria-controls="primary-nav"
          aria-expanded={expanded()}
          onClick={toggleMenu}
          class="sm:hidden"
        >
          <img src={closeIcon} alt="" aria-hidden="true" />
          <span class="sr-only">Close Menu</span>
        </button>
        <ul class="flex flex-col gap-5 sm:flex-row md:gap-8">
          <NavItem text="Collections" />
          <NavItem text="Men" />
          <NavItem text="Women" />
          <NavItem text="About" />
          <NavItem text="Contact" />
        </ul>
      </nav>
      <div className="ml-auto">
        <HeaderUserInfo />
      </div>
    </header>
  );
}

const NavItem: Component<{ text: string; href?: string }> = (props) => {
  const itemProps = mergeProps({ href: "#" }, props);

  return (
    <li class="sm:flex">
      <a
        class="text-lg text-gray-100 font-bold sm:text-sm sm:font-normal sm:text-gray-400 sm:hover:text-gray-100 sm:pb-11 sm:border-b-2 sm:border-orange-500/0 sm:hover:border-orange-500 sm:focus:border-orange-500"
        href={itemProps.href || "#"}
      >
        {itemProps.text}
      </a>
    </li>
  );
};
