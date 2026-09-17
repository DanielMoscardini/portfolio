export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-mono text-xs text-muted border border-border px-2 py-0.5">
      {children}
    </span>
  );
};
