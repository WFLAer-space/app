import { memo } from 'react';
import { useApp } from '../../context/AppContext';
import { THEME_CONFIG, TRANSITION_CLASSES, combineStyles } from '../../config/theme';

const BasePage = memo(({ 
  children,
  title,
  className,
  variant = 'default' // 'default' | 'card'
}) => {
  const { theme } = useApp();
  const styles = THEME_CONFIG[theme];

  const containerStyles = variant === 'card' 
    ? combineStyles(
        styles.card.background,
        styles.card.border,
        styles.card.shadow,
        'rounded-lg border',
        TRANSITION_CLASSES,
        className
      )
    : combineStyles(
        styles.contentBg,
        TRANSITION_CLASSES,
        className
      );

  return (
    <div className={containerStyles}>
      <div className={variant === 'card' ? 'p-6' : ''}>
        {title && (
          <h2 className={combineStyles(
            'text-2xl font-bold mb-6',
            styles.text
          )}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
});

BasePage.displayName = 'BasePage';

// 导出页面变体组件
export const CardPage = memo((props) => (
  <BasePage {...props} variant="card" />
));

CardPage.displayName = 'CardPage';

export default BasePage; 