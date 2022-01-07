import { Component, createSignal, mergeProps } from "solid-js";
import menuIcon from "../assets/icons/icon-menu.svg";
import closeIcon from "../assets/icons/icon-close.svg";
import HeaderUserInfo from "./HeaderUserInfo";

export default function Header() {
  const [expanded, setExpanded] = createSignal(false);

  const toggleMenu = () => setExpanded((exp) => !exp);

  return (
    <header class="relative pt-5 pb-7 px-6 flex items-center gap-4">
        <button
          aria-controls="primary-nav"
          aria-expanded={expanded()}
          onClick={toggleMenu}
          class="translate-y-[2px]"
        >
          <img src={menuIcon} alt="" aria-hidden="true" />
          <span class="sr-only">Toggle Menu</span>
        </button>
      {/* <div>
      </div> */}
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
      <div
        class="fixed bg-black/75 inset-0 transition-opacity duration-300 ease-in-out"
        classList={{
          "opacity-100": expanded(),
          "opacity-0": !expanded(),
          "pointer-events-none": !expanded(),
        }}
      ></div>
      <nav
        id="primary-nav"
        class="z-50 fixed left-0 top-0 bottom-0 bg-white min-w-[250px] p-6 flex flex-col gap-[3.25rem] transition-transform duration-200 ease-in-out"
        classList={{ ["-translate-x-full"]: !expanded() }}
      >
        <div>
          <button
            aria-controls="primary-nav"
            aria-expanded={expanded()}
            onClick={toggleMenu}
          >
            <img src={closeIcon} alt="" aria-hidden="true" />
            <span class="sr-only">Close Menu</span>
          </button>
        </div>
        <ul class="flex flex-col gap-5">
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
    <li class="text-lg text-gray-100 font-bold">
      <a href={itemProps.href || "#"}>{itemProps.text}</a>
    </li>
  );
};
