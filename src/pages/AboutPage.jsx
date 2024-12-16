import { memo } from 'react';
import { useApp } from '../context/AppContext';
import { THEME_CONFIG, TRANSITION_CLASSES, combineStyles } from '../config/theme';

const AboutPage = memo(() => {
  const { theme } = useApp();
  const styles = THEME_CONFIG[theme];

  return (
    <div className={combineStyles(
      'p-6 rounded-lg border',
      styles.card.background,
      styles.text,
      styles.border,
      TRANSITION_CLASSES
    )}>
      <h2 className={combineStyles('text-2xl font-bold mb-6', styles.text)}>
        About WFLAer
      </h2>
      
      {/* Introduction */}
      <div className={combineStyles('prose max-w-none', theme === 'dark' ? 'prose-invert' : '')}>
        <p className={combineStyles('text-lg mb-8', styles.text)}>
          WFLAer is a modern web application designed to help you organize and manage your digital life efficiently.
          Built with the latest web technologies, it provides a seamless experience across all devices.
        </p>
      </div>

      {/* Features */}
      <div className="mt-12">
        <h3 className={combineStyles('text-xl font-semibold mb-6', styles.text)}>
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={combineStyles(
            'p-6 rounded-lg border',
            styles.card.background,
            styles.border,
            TRANSITION_CLASSES
          )}>
            <h4 className={combineStyles('text-lg font-semibold mb-3', styles.text)}>
              Modern Design
            </h4>
            <p className={styles.textSecondary}>
              Clean and intuitive interface with dark mode support and responsive layout.
            </p>
          </div>
          
          <div className={combineStyles(
            'p-6 rounded-lg border',
            styles.card.background,
            styles.border,
            TRANSITION_CLASSES
          )}>
            <h4 className={combineStyles('text-lg font-semibold mb-3', styles.text)}>
              Performance
            </h4>
            <p className={styles.textSecondary}>
              Built with React and optimized for speed and efficiency.
            </p>
          </div>
          
          <div className={combineStyles(
            'p-6 rounded-lg border',
            styles.card.background,
            styles.border,
            TRANSITION_CLASSES
          )}>
            <h4 className={combineStyles('text-lg font-semibold mb-3', styles.text)}>
              Customization
            </h4>
            <p className={styles.textSecondary}>
              Personalize your experience with themes and layout options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage; 