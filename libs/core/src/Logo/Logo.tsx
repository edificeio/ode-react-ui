import clsx from "clsx";

interface LogoProps {
  url: string;
  is1d?: boolean;
  translate?: string;
}

export default function Logo({
  url,
  is1d,
  translate = "Retour accueil",
}: LogoProps) {
  const classes = clsx("navbar-brand d-none d-md-block");
  return (
    <a className={classes} href="/" aria-label={translate}>
      <img className="logo" src={url} alt={`logo ${is1d ? "ONE" : "NEO"}`} />
    </a>
  );
}
