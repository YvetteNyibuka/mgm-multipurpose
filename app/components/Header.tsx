import { ThemeToggle } from "./themes/ThemeToggle";

export function Header() {
  return (
    <header className="p-4 bg-primary text-text-light dark:text-text-dark">
      <h1>My App</h1>
      <ThemeToggle />
    </header>
  );
}
