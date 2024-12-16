import { memo } from 'react';
import { useApp } from '../context/AppContext';
import { THEME_CONFIG, TRANSITION_CLASSES, combineStyles } from '../config/theme';
import { CardPage } from '../components/common/BasePage';

const FeatureCard = memo(({ title, description }) => {
  const { theme } = useApp();
  const styles = THEME_CONFIG[theme];

  return (
    <div className={combineStyles(
      styles.card.background,
      styles.card.hover,
      'p-4 rounded-lg',
      TRANSITION_CLASSES
    )}>
      <h3 className={combineStyles('text-lg font-semibold mb-2', styles.text)}>
        {title}
      </h3>
      <p className={styles.textSecondary}>
        {description}
      </p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';

const HomePage = memo(() => {
  const features = [
    {
      title: '快速链接',
      description: '访问您常用的资源和工具。'
    },
    {
      title: '仪表盘',
      description: '查看您的个性化仪表盘，包含关键指标和更新。'
    },
    {
      title: '关于',
      description: '了解更多关于平台和其功能的信息。'
    }
  ];

  return (
    <CardPage title="欢迎使用 WFLAer">
      <div className="space-y-4">
        <p className="text-lg">
          这是您的个人仪表盘，用于管理和组织您的数字生活。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </CardPage>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage; 