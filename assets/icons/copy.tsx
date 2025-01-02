import Icon from '@/components/Icon';

const CopyIcon = ({ className, title }: { className?: string, title?: string }) => (
  <div title={title}>
    <Icon  className={className}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2"/><path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/></g>
    </Icon>
  </div>
);

export default CopyIcon; 