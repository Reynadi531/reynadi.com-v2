import {
  Icon,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconProps,
} from '@tabler/icons-react';
import React from 'react';

type IListIcon = {
  name: string;
  handle: string;
  href: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
};

export const IconListJumbotron: IListIcon[] = [
  {
    name: 'LinkedIn',
    handle: 'in/reynadiap',
    href: 'https://www.linkedin.com/in/reynadiap',
    icon: IconBrandLinkedin,
  },
  {
    name: 'X',
    handle: '@reynadi17',
    href: 'https://x.com/reynadi17',
    icon: IconBrandX,
  },
  {
    name: 'Insatgram',
    handle: '@reynadiap',
    href: 'https://www.instagram.com/reynadiap',
    icon: IconBrandInstagram,
  },
  {
    name: 'Discord',
    handle: '@reynadi17',
    href: 'https://discord.com/users/402680485731500032',
    icon: IconBrandDiscord,
  },
  {
    name: 'GitHub',
    handle: '@Reynadi531',
    href: 'https://github.com/reynadi531',
    icon: IconBrandGithub,
  },
  {
    name: 'Email',
    handle: 'rey@reynadi.com',
    href: 'mailto:rey@reynadi.com',
    icon: IconMail,
  },
];
