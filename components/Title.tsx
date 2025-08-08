export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl text-center mb-10 tracking-wider">
      {children}
    </h2>
  );
}
