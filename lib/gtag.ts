export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '', {
    page_path: url
  });
};

interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value: any;
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
