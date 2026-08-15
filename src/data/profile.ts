import { Profile } from '../types/portfolio';

export const profileData: Profile = {
  name: 'Mohammad Hassieb',
  firstName: 'Mohammad',
  lastName: 'Hassieb',
  techTitle: 'Software Engineer & Developer',
  creativeTitle: 'Graphic Designer & Sports Photographer',
  location: 'Makka al Mokarma Street · Hadaaiek Al Kobba, Cairo, Egypt',
  phone: '+20 01211494107',
  email: 'mohammadhassieb@gmail.com',
  avatarUrl: '/avatar.png',
  cvPath: null, // Set to path when PDF is provided (e.g. '/documents/Mohammad-Hassieb-Resume.pdf')
  availableForHire: true,
  social: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mo-hassieb/',
      label: 'Connect on LinkedIn',
      icon: 'linkedin',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/hassiebb',
      label: 'View GitHub Profile',
      icon: 'github',
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.link/fthmku',
      label: 'Chat on WhatsApp',
      icon: 'whatsapp',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/mhassieb_/',
      label: 'Follow on Instagram',
      icon: 'instagram',
    },
    {
      platform: 'YouTube',
      url: 'https://www.youtube.com/@Mohammad_Hassieb',
      label: 'Subscribe on YouTube',
      icon: 'youtube',
    },
  ],
};
