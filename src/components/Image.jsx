// Lazy load images
import { LazyLoadImage } from 'react-lazy-load-image-component';

function OptimizedImage({ src, alt }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      threshold={100}
      placeholderSrc={lowQualityImage}
    />
  );
} 