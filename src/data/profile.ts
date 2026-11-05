import { Profile } from '../types/portfolio';

export const profileData: Profile = {
  name: 'Mohammad Hassieb',
  firstName: 'Mohammad',
  lastName: 'Hassieb',
  techTitle: 'Web & Mobile App Developer',
  creativeTitle: 'Social Media Specialist · Sports Photographer · Graphic Designer',
  location: 'Makka al Mokarma Street · Hadaaiek Al Kobba, Cairo, Egypt',
  phone: '+20 01211494107',
  email: 'mohammadhassieb@gmail.com',
  avatarUrl: '/avatar.png',
  cvPath: null, // Fallback CV path
  techCvPath: null, // Set to '/documents/Mohammad-Hassieb-Tech-CV.pdf' when ready
  creativeCvPath: null, // Set to '/documents/Mohammad-Hassieb-Creative-Portfolio.pdf' when ready
  availableForHire: true,
  militaryStatus: 'Military Service Completed',
  social: [
    {
      platform: 'LinkedIn',
      url: 'www.linkedin.com/in/mohammadhassieb',
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
      url: 'https://www.instagram.com/mhassiebb/',
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
