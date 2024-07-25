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
  href: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
};

export const IconListJumbotron: IListIcon[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/reynadiap',
    icon: IconBrandLinkedin,
  },
  {
    name: 'X',
    href: 'https://x.com/reynadi17',
    icon: IconBrandX,
  },
  {
    name: 'Insatgram',
    href: 'https://www.instagram.com/reynadiap',
    icon: IconBrandInstagram,
  },
  {
    name: 'Discord',
    href: 'https://discord.com/users/402680485731500032',
    icon: IconBrandDiscord,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/reynadi531',
    icon: IconBrandGithub,
  },
  {
    name: 'Email',
    href: 'mailto:rey@reynadi.com',
    icon: IconMail,
  },
];
