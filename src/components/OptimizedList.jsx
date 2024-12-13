import { memo, useCallback, useMemo } from 'react';

// Memoize expensive components
const ListItem = memo(function ListItem({ data, onAction }) {
  return (
    <div>
      {/* Component content */}
    </div>
  );
});

// Use virtual scrolling for long lists
import { VirtualList } from 'react-window';

function LongList({ items }) {
  return (
    <VirtualList
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <ListItem 
          data={items[index]}
          style={style}
        />
      )}
    </VirtualList>
  );
} 