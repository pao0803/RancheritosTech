// productos y Servicios
import React from "react";
import Link from "next/link";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
  EyeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

function NavItem({ children, href, external = false }: NavItemProps) {
  return (
    <li>
      {external ? (
        <a
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium"
        >
          {children}
        </a>
      ) : (
        <Link href={href || "#"} className="flex items-center gap-2 font-medium">
          {children}
        </Link>
      )}
    </li>
  );
}

const NAV_MENU = [
  {
    name: "MISIÓN Y VISIÓN",
    icon: EyeIcon,
    href: "#misionyvision",
  },
  {
    name: "PRODUCTOS Y SERVICIOS",
    icon: DevicePhoneMobileIcon,
    href: "#accountSection",
  },
  {
    name: "PREGUNTAS FRECUENTES",
    icon: CommandLineIcon,
    href: "#preguntas",
   // external: true,
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/image/logotech.png"
            alt="Rancheritos Tech Logo"
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        </Link>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href, external }) => (
            <NavItem key={name} href={href} external={external}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="#formulario">
            
              <Button color={isScrolling ? "gray" : "white"}>Contáctanos</Button>
            
          </Link>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href, external }) => (
              <NavItem key={name} href={href} external={external}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
         
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
