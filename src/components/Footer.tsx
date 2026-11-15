export function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-lockup">
        <img
          className="lp-mark"
          src="/brand/nexaut-mark.png"
          alt=""
          width={28}
          height={28}
        />
        <span className="nx-title text-base leading-none text-foreground">NEXAUT</span>
      </div>
      <p>Inteligência que transforma. © {new Date().getFullYear()}</p>
    </footer>
  );
}
