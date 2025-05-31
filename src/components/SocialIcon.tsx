import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

interface SocialIconProps {
  name: string;
  size?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, size = 20 }) => {
  switch (name) {
    case 'Github':
      return <Github size={size} />;
    case 'Linkedin':
      return <Linkedin size={size} />;
    case 'Twitter':
      return <Twitter size={size} />;
    case 'Mail':
      return <Mail size={size} />;
    default:
      return <ExternalLink size={size} />;
  }
};

export default SocialIcon;