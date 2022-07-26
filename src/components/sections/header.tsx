import BgPatternMobile from "@/assets/bg-header-mobile.svg";
import BgPatternDesktop from "@/assets/bg-header-desktop.svg";

export function Header() {
  return (
    <header className="relative bg-primary w-full h-[9.75rem]">
      <h1 className="sr-only">Job Listings App</h1>
      <picture>
        <source media="(min-width: 74rem)" srcSet={BgPatternDesktop} />
        <img
          src={BgPatternMobile}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
      </picture>
    </header>
  );
}
