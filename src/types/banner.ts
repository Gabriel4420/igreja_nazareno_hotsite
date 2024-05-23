export interface bannerImageProps {
  data: Array<{ url: string; alt: string }>;
  file?: Array<{ data: Array<{ alt: string; url: string }> }>;
}
