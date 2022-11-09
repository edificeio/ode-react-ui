export function Card(props: {
  className?: string;
  style?: {
    [item: string]: string;
  };
  children: string;
}) {
  const { className, style, children } = props;

  const mergedStyle = {
    ...style,
    backgroundColor: "#fff",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
  };
  return (
    <div className={className} style={mergedStyle}>
      {children}
    </div>
  );
}
