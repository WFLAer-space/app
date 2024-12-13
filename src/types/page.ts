export type PageConfig = {
  title: string;          // Sidebar title
  path: string;          // URL path
  component: React.ComponentType;
  layout: {
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';  // Content width
    padding?: 'none' | 'sm' | 'md' | 'lg';                          // Content padding
    spacing?: 'none' | 'sm' | 'md' | 'lg';                         // Content spacing
    header?: {
      title: string;      // Page header title
      description?: string; // Optional description
      actions?: React.ReactNode; // Optional action buttons
    };
  };
  icon?: React.ComponentType;  // Sidebar icon
}; 