import { memo, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useToast } from '../context/ToastContext';
import { useVirtualizer } from '@tanstack/react-virtual';
import debounce from 'lodash/debounce';
import * as Icons from 'lucide-react';
import { linksData } from '../data/links';
import { THEME_CONFIG, TRANSITION_CLASSES, combineStyles } from '../config/theme';

// 访问级别配置
const ACCESS_LEVEL_CONFIG = {
  green: {
    label: '无需VPN访问',
    color: 'text-green-400 dark:text-green-300',
    bgColor: 'bg-green-50/10 dark:bg-green-500/10',
    borderColor: 'border-green-200 dark:border-green-500/20',
    icon: Icons.ShieldCheck
  },
  yellow: {
    label: '可直接访问，但使用VPN可显著提速',
    color: 'text-yellow-500 dark:text-yellow-300',
    bgColor: 'bg-yellow-50/10 dark:bg-yellow-500/10',
    borderColor: 'border-yellow-200 dark:border-yellow-500/20',
    icon: Icons.ShieldAlert
  },
  red: {
    label: '需要VPN访问',
    color: 'text-red-400 dark:text-red-300',
    bgColor: 'bg-red-50/10 dark:bg-red-500/10',
    borderColor: 'border-red-200 dark:border-red-500/20',
    icon: Icons.ShieldX
  }
};

const SearchBar = memo(({ value, onChange }) => {
  const { theme } = useApp();
  const styles = THEME_CONFIG[theme];
  
  const handleChange = debounce((e) => {
    onChange(e.target.value);
  }, 300);

  return (
    <div className="w-full md:w-96 relative">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Icons.Search className={combineStyles('w-5 h-5', styles.textSecondary)} />
      </div>
      <input
        type="text"
        placeholder="搜索链接、标签或描述..."
        defaultValue={value}
        onChange={handleChange}
        className={combineStyles(
          'w-full pl-12 pr-4 py-3 rounded-xl border',
          styles.card.background,
          styles.text,
          styles.border,
          'focus:outline-none focus:ring-2 focus:ring-blue-500',
          'placeholder:text-gray-400',
          TRANSITION_CLASSES
        )}
      />
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

const AccessLevelLegend = memo(() => {
  const { theme } = useApp();
  const styles = THEME_CONFIG[theme];

  return (
    <div className={combineStyles(
      'flex flex-wrap gap-4 p-4 rounded-xl border',
      styles.card.background,
      styles.text,
      styles.border,
      TRANSITION_CLASSES
    )}>
      {Object.entries(ACCESS_LEVEL_CONFIG).map(([level, config]) => {
        const IconComponent = config.icon;
        return (
          <div 
            key={level}
            className={combineStyles(
              'flex items-center gap-2 px-4 py-2 rounded-lg border',
              config.bgColor,
              config.borderColor,
              'backdrop-blur-sm',
              'transition-all duration-200'
            )}
          >
            <IconComponent className={config.color} />
            <span className={combineStyles(
              'text-sm font-medium',
              config.color
            )}>
              {config.label}
            </span>
          </div>
        );
      })}
    </div>
  );
});

AccessLevelLegend.displayName = 'AccessLevelLegend';

const LinkCard = memo(({ link, onTagClick }) => {
  const { theme } = useApp();
  const showToast = useToast();
  const styles = THEME_CONFIG[theme];
  const [isActive, setIsActive] = useState(false);
  
  const IconComponent = Icons[link.icon] || Icons.Link;
  const accessConfig = ACCESS_LEVEL_CONFIG[link.accessLevel];
  const AccessIcon = accessConfig.icon;

  const handleCopyLink = useCallback(async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(link.url);
      showToast('链接已复制到剪贴板', 'success');
    } catch (err) {
      showToast('复制失败，请重试', 'error');
    }
  }, [link.url, showToast]);

  const handleVisitLink = useCallback((e) => {
    e.stopPropagation();
    window.open(link.url, '_blank');
  }, [link.url]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isActive && !e.target.closest(`[data-card-id="${link.url}"]`)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isActive, link.url]);

  const isTouchDevice = 'ontouchstart' in window;

  return (
    <div
      data-card-id={link.url}
      onClick={() => isTouchDevice && setIsActive(true)}
      className={combineStyles(
        'p-6 rounded-xl border relative group cursor-pointer overflow-hidden',
        styles.card.background,
        styles.border,
        'transition-all duration-300',
        TRANSITION_CLASSES
      )}
    >
      {/* Base content */}
      <div className="relative z-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={combineStyles(
              'p-3 rounded-xl',
              theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
              'group-hover:scale-105',
              'transition-transform duration-500 ease-out'
            )}>
              <IconComponent className={combineStyles('w-6 h-6', styles.textSecondary)} />
            </div>
            <div>
              <h4 className={combineStyles('text-lg font-semibold', styles.text)}>
                {link.name}
              </h4>
              <p className={combineStyles('text-sm mt-1', styles.textSecondary)}>
                {link.description}
              </p>
            </div>
          </div>
          <AccessIcon 
            className={`w-5 h-5 flex-shrink-0 ${accessConfig.color}`}
            title={accessConfig.label}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {link.tags.map((tag) => (
            <button
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                onTagClick(tag);
              }}
              className={combineStyles(
                'px-3 py-1.5 text-sm rounded-lg',
                theme === 'dark' ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100',
                styles.textSecondary,
                'transition-all duration-200',
                TRANSITION_CLASSES
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Glass effect overlay */}
      <div 
        className={combineStyles(
          'absolute inset-0 z-10',
          'opacity-0 scale-105',
          'group-hover:opacity-100 group-hover:scale-100',
          'transition-all duration-500 ease-out',
          isActive && 'opacity-100 scale-100'
        )}
      >
        <div className={combineStyles(
          'absolute inset-0',
          'backdrop-blur-[6px]',
          theme === 'dark' ? 'bg-black/30' : 'bg-white/30',
          'transition-all duration-500 ease-out'
        )} />
      </div>

      {/* Action buttons */}
      <div 
        className={combineStyles(
          'absolute left-1/2 top-1/2 -translate-x-1/2',
          'flex gap-4 items-center',
          'opacity-0 -translate-y-[60%] scale-90',
          'group-hover:opacity-100 group-hover:-translate-y-1/2 group-hover:scale-100',
          'transition-all duration-500 ease-out delay-100',
          isActive && 'opacity-100 -translate-y-1/2 scale-100',
          'z-20'
        )}
      >
        <button
          onClick={handleCopyLink}
          className={combineStyles(
            'p-3 rounded-xl',
            theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90',
            'backdrop-blur-sm shadow-lg',
            'hover:scale-110 active:scale-95',
            'transition-all duration-300',
            styles.text
          )}
          title="复制链接"
        >
          <Icons.Copy className="w-5 h-5" />
        </button>
        <button
          onClick={handleVisitLink}
          className={combineStyles(
            'p-3 rounded-xl',
            theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90',
            'backdrop-blur-sm shadow-lg',
            'hover:scale-110 active:scale-95',
            'transition-all duration-300',
            styles.text
          )}
          title="访问链接"
        >
          <Icons.ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
});

LinkCard.displayName = 'LinkCard';

const CategorySection = memo(({ category, links, onTagClick }) => {
  const { theme } = useApp();
  const styles = THEME_CONFIG[theme];

  return (
    <div className="mb-12">
      <h3 className={combineStyles(
        'text-2xl font-bold mb-6',
        styles.text
      )}>
        {category}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {links.map((link) => (
          <LinkCard 
            key={link.url} 
            link={link}
            onTagClick={onTagClick}
          />
        ))}
      </div>
    </div>
  );
});

CategorySection.displayName = 'CategorySection';

const LinksCollectionPage = memo(() => {
  const { theme } = useApp();
  const styles = THEME_CONFIG[theme];
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(null);

  // 处理搜索
  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // 处理标签点击
  const handleTagClick = useCallback((tag) => {
    setSearchTerm(tag);
  }, []);

  // 过滤链接
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return linksData.categories;

    const searchLower = searchTerm.toLowerCase();
    return linksData.categories.map(category => ({
      ...category,
      links: category.links.filter(link => 
        link.name.toLowerCase().includes(searchLower) ||
        link.description.toLowerCase().includes(searchLower) ||
        link.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    })).filter(category => category.links.length > 0);
  }, [searchTerm]);

  return (
    <div className={combineStyles(
      'min-h-screen',
      styles.background,
      TRANSITION_CLASSES
    )}>
      <div 
        ref={containerRef}
        className={combineStyles(
          'container mx-auto px-4 py-8',
          styles.text,
          TRANSITION_CLASSES
        )}
      >
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className={combineStyles('text-3xl font-bold', styles.text)}>
              链接收藏
            </h2>
            <SearchBar 
              value={searchTerm} 
              onChange={handleSearch}
            />
          </div>
          <AccessLevelLegend />
        </div>

        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <CategorySection
              key={category.name}
              category={category.name}
              links={category.links}
              onTagClick={handleTagClick}
            />
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <Icons.Search className={combineStyles('w-16 h-16 mx-auto mb-4', styles.textSecondary)} />
            <p className={combineStyles('text-xl', styles.textSecondary)}>
              未找到匹配的链接
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

LinksCollectionPage.displayName = 'LinksCollectionPage';

export default LinksCollectionPage; 