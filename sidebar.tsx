import { cn } from "../../utils/classname";
import { Component, createSignal, JSX } from "solid-js";
import { BsDeviceSsd, BsDeviceSsdFill } from "solid-icons/bs";
import { twMerge } from "tailwind-merge";
import { logout } from "../../app/credentials";
import { BsPeopleFill } from "solid-icons/bs";
import { RiUserFacesAdminLine } from "solid-icons/ri";
import { CgNotes } from "solid-icons/cg";
import { TbLogout2 } from "solid-icons/tb";
import { FaSolidCircleUser } from "solid-icons/fa";
import { IconTypes } from "solid-icons";
import { OcPeople3 } from "solid-icons/oc";

const links = [
  {
    label: "Devices",
    href: "/devices",
    icon: BsDeviceSsd,
  },
  {
    label: "Partner Management",
    href: "/partner-management",
    icon: OcPeople3,
  },
  {
    label: "Admin Management",
    href: "/admin-management",
    icon: RiUserFacesAdminLine,
  },
  {
    label: "Consumer Logs",
    href: "/consumer-logs",
    icon: CgNotes,
  },
  {
    label: "Logout",
    href: "/login",
    onClick: logout,
    icon: TbLogout2,
  },
];

interface Links {
  label: string;
  href: string;
  icon: IconTypes;
  onClick?: () => void;
}

export const Sidebar: Component<{ children: JSX.Element }> = (props) => {
  const [open, setOpen] = createSignal(false);
  return (
    <div
      class={
        "flex min-h-dvh w-full flex-row rounded-md border border-neutral-200 bg-secondary"
      }
    >
      <div
        class={cn(
          `sticky left-0 top-0 flex h-dvh flex-shrink-0 flex-col px-6 py-10
          ${open() ? "animate-expand" : "animate-collapse"}`,
        )}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div class="flex flex-col gap-2">
          <div class="flex gap-4">
            <img alt="logo" src="/logo-only.png" class="h-auto w-5" />
            <img
              alt="logo"
              src="/logo-sunterra.png"
              class={`h-5 w-auto ${open() ? "opacity-100" : "opacity-0"}
                ${open() ? "inline-block" : "hidden"}`}
            />
          </div>
          <div class="mt-8 flex flex-col gap-4">
            {links.map((link) => (
              <SidebarLink open={open} link={link} />
            ))}
          </div>
        </div>
        <SidebarLink
          class="mt-auto text-neutral-500"
          open={open}
          link={{
            href: "#",
            icon: FaSolidCircleUser,
            label: "Kelvin Anderson",
          }}
        />
      </div>
      <div class="h-full min-h-dvh w-full rounded-l-2xl border border-neutral-200 bg-white p-10">
        {props.children}
      </div>
    </div>
  );
};

export const SidebarLink: Component<{
  open: () => boolean;
  link: Links;
  class?: string;
}> = (props) => {
  return (
    <a
      href={props.link.href}
      onClick={props.link?.onClick}
      class={twMerge(
        "group/sidebar flex items-center justify-start gap-4 py-2",
        props.class,
      )}
    >
      <props.link.icon class="h-5 w-5 flex-shrink-0 text-neutral-600" />
      <span
        class={twMerge(
          `!m-0 inline-block whitespace-pre !p-0 text-sm font-medium text-neutral-700
          transition duration-150 group-hover/sidebar:translate-x-1
          ${props.open() ? "animate-fadeIn" : "animate-fadeOut"}
          ${props.open() ? "inline-block" : "hidden"} `,
          props.class,
        )}
      >
        {props.link.label}
      </span>
    </a>
  );
};
