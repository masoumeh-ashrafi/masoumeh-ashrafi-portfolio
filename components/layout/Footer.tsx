export const Footer = () => {
  return (
    <footer className="w-full p-6 text-center border-t border-white/10 mt-auto">
      <p className="text-sm text-white/60">
        © {new Date().getFullYear()} Built with Next.js & Tailwind.
      </p>
    </footer>
  );
};