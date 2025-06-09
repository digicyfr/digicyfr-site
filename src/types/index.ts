export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gradient: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Stat {
  number: string;
  label: string;
}
