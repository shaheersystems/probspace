import { Avatar } from "../components/ui/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "../components/ui/dropdown";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "../components/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "../components/ui/sidebar";
import { StackedLayout } from "../components/ui/stacked-layout";
import {
  ArrowRightStartOnRectangleIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import Logo from "../components/Logo";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/ui/button";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Questions", url: "/questions" },
  {
    label: "Companies",
    url: "/companies",
  },
  { label: "Changelog", url: "/changelog" },
  {
    label: "Feedback",
    url: "/feedback",
  },
];
function AppLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <div>
      <StackedLayout
        navbar={
          <Navbar className={"px-2"}>
            <Logo />
            <NavbarDivider className="max-lg:hidden" />
            <NavbarSection className="max-lg:hidden">
              {navItems.map(({ label, url }) => (
                <Link
                  className={`text-sm dark:text-white dark:hover:bg-zinc-800 px-4 py-2 hover:bg-zinc-300 rounded-md ${
                    pathname === url
                      ? "dark:bg-zinc-900 font-semibold  bg-zinc-200 "
                      : ""
                  }`}
                  key={label}
                  to={url}
                >
                  {label}
                </Link>
              ))}
            </NavbarSection>
            <NavbarSpacer />
            <NavbarSection>
              <NavbarItem href="/search" aria-label="Search">
                <MagnifyingGlassIcon />
              </NavbarItem>
              <Button color="blue" className="cursor-pointer">
                <PlusIcon />
                Contribute
              </Button>
              <Dropdown>
                <DropdownButton as={NavbarItem}>
                  <Avatar src="" initials={"MS"} />
                </DropdownButton>
                <DropdownMenu className={`min-w-64`} anchor="bottom end">
                  <DropdownItem href="/my-profile">
                    <UserIcon />
                    <DropdownLabel>My profile</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/settings">
                    <Cog8ToothIcon />
                    <DropdownLabel>Settings</DropdownLabel>
                  </DropdownItem>
                  <DropdownItem href="/share-feedback">
                    <LightBulbIcon />
                    <DropdownLabel>Share feedback</DropdownLabel>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem href="/logout">
                    <ArrowRightStartOnRectangleIcon />
                    <DropdownLabel>Sign out</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarSection>
          </Navbar>
        }
        sidebar={
          <Sidebar>
            <SidebarHeader>
              <Logo />
            </SidebarHeader>
            <SidebarBody>
              <SidebarSection>
                {navItems.map(({ label, url }) => (
                  <SidebarItem key={label} href={url}>
                    {label}
                  </SidebarItem>
                ))}
              </SidebarSection>
            </SidebarBody>
          </Sidebar>
        }
      >
        {children}
      </StackedLayout>
    </div>
  );
}

export default AppLayout;
