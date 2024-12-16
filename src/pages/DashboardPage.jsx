import { memo } from 'react';
import { useApp } from '../context/AppContext';
import { THEME_CONFIG, TRANSITION_CLASSES, combineStyles } from '../config/theme';

const DashboardPage = memo(() => {
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
        Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Statistics Cards */}
        <div className={combineStyles(
          'p-6 rounded-lg border',
          styles.card.background,
          styles.border,
          TRANSITION_CLASSES
        )}>
          <h3 className={combineStyles('text-lg font-semibold mb-2', styles.text)}>
            Total Views
          </h3>
          <p className={combineStyles('text-3xl font-bold', styles.text)}>
            1,234
          </p>
        </div>
        
        <div className={combineStyles(
          'p-6 rounded-lg border',
          styles.card.background,
          styles.border,
          TRANSITION_CLASSES
        )}>
          <h3 className={combineStyles('text-lg font-semibold mb-2', styles.text)}>
            Active Users
          </h3>
          <p className={combineStyles('text-3xl font-bold', styles.text)}>
            567
          </p>
        </div>
        
        <div className={combineStyles(
          'p-6 rounded-lg border',
          styles.card.background,
          styles.border,
          TRANSITION_CLASSES
        )}>
          <h3 className={combineStyles('text-lg font-semibold mb-2', styles.text)}>
            Total Links
          </h3>
          <p className={combineStyles('text-3xl font-bold', styles.text)}>
            89
          </p>
        </div>
      </div>
    </div>
  );
});

DashboardPage.displayName = 'DashboardPage';

export default DashboardPage; 