export type PageType = 'home' | 'about' | 'products' | 'vision' | 'why' | 'contact';

export interface IndustryCard {
  id: string;
  title: string;
  items: string[];
  iconName: string;
  image: string;
  layoutStyle: 'full' | 'split' | 'grid' | 'featured' | 'minimal';
}

export interface FeaturedProduct {
  id: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  specs: string[];
}

export interface BusinessStat {
  value: string;
  label: string;
}

export interface WhyPreviewItem {
  title: string;
  description: string;
}

export interface WhyChooseUsPageItem {
  id: string;
  title: string;
  description: string;
  supportingText: string;
  iconName: string;
  image: string;
}

export interface Testimonial {
  image: string;
  quote: string;
  name: string;
  designation: string;
  company: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface MissionPoint {
  title: string;
  iconName: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
