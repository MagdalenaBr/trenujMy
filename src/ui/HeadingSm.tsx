export default function HeadingSm({
  children,
  textColor = "text-lightAccentColor",
}: {
  children: React.ReactNode;
  textColor?: string;
}) {
  return <h3 className={`font-semibold ${textColor}`}>{children}</h3>;
}
