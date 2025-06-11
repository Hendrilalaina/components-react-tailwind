export const DarkMode = () => {
  const preferredDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    document.body.classList.add(storedTheme);
  } else {
    document.body.classList.add(preferredDarkTheme ? "dark" : "light");
  }

  const toggleMode = () => {
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";

    if (currentTheme === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Dark mode / Light mode</h1>
      <p>This page adapts to system's color scheme preference</p>
      <button className="button" onClick={toggleMode}>
        Toggle mode
      </button>
    </div>
  );
};
