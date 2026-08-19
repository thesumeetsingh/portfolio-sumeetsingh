function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/30 md:flex-row">
        <p>© {new Date().getFullYear()} Sumeet Singh</p>

        <p>
          Designed & built with React
        </p>
      </div>
    </footer>
  );
}

export default Footer;