export type headerNavItemsType = {
  title: string;
  route: string;
  keywords?: string[];
  otherOptions: {
    isActive: boolean;
    data: { title: string; route: string; isLive: boolean }[];
  } | null;
  isVisible: boolean;
}[];

export type footerNavItemsTypes = {
  title: string;
  otherOptions: {
    title: string;
    route: string;
    isPriority: boolean;
  }[];
}[];

export const headerNavItems: headerNavItemsType = [
  {
    title: "Home",
    route: "/",
    keywords: ["/"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Properties",
    route: "/properties",
    keywords: [""],
    otherOptions: null,
    isVisible: true,
  },
  {
    title: "Developers",
    route: "/developers",
    keywords: [""],
    otherOptions: null,
    isVisible: true,
  },
  {
    title: "Mortgage Banks",
    route: "/mortgage-banks",
    keywords: [""],
    otherOptions: null,
    isVisible: true,
  },
  {
    title: "Consult an Expert",
    route: "/consult-an-expert",
    keywords: [""],
    otherOptions: null,
    isVisible: true,
  },
];

export const footerNavItems: footerNavItemsTypes = [
  {
    title: "Developers",
    otherOptions: [
      {
        title: "Join as a Developer",
        route: "/join-as-a-developer",
        isPriority: true,
      },
    ],
  },
  {
    title: "Banks",
    otherOptions: [
      {
        title: "Join as a Bank",
        route: "/join-as-a-bank",
        isPriority: true,
      },
    ],
  },

  {
    title: "Legal",
    otherOptions: [
      {
        title: "Privacy Policy",
        route: "/privacy-policy",
        isPriority: false,
      },
      {
        title: "Terms & Conditions",
        route: "/terms-and-conditions",
        isPriority: false,
      },
    ],
  },

  {
    title: "Contact Us",
    otherOptions: [
      {
        title: "info@giddaa.com",
        route: "/",
        isPriority: false,
      },
      {
        title: "WhatsApp",
        route: "/",
        isPriority: false,
      },
      {
        title: "Book a Meeting",
        route: "/",
        isPriority: true,
      },
      {
        title: "+234 809 762 1791",
        route: "/",
        isPriority: true,
      },
    ],
  },

  {
    title: "Site Navigation",
    otherOptions: [
      {
        title: "Properties",
        route: "/",
        isPriority: false,
      },
      {
        title: "Developers",
        route: "/",
        isPriority: false,
      },
      {
        title: "Banks",
        route: "/",
        isPriority: false,
      },
    ],
  },
];
