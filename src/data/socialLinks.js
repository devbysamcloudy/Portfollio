export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/devbysamcloudy',
    icon: 'github',
    username: '@devbysamcloudy',
    primary: true
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/samuel-ng-ang-a-065471391/',
    icon: 'linkedin',
    username: 'Samuel Nganga',
    primary: true
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/kenyan_bullet',
    icon: 'instagram',
    username: '@kenyan_bullet',
    primary: true
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/254785446472',
    icon: 'whatsapp',
    username: '+254 785 446 472',
    primary: true
  },
];

export const getPrimarySocials = () => socialLinks.filter(link => link.primary);