import { useLayoutEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;

  try {
    return JSON.parse(localStorage.getItem("isDarkMode") || "false");
  } catch {
    return false;
  }
};

export default function Header() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useLayoutEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("isDarkMode", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the worlds?</a>
        </h2>

        <p
          className="theme-changer"
          onClick={() => setIsDark((prev) => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsDark((prev) => !prev);
            }
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp; {isDark ? "Light" : "Dark"} Mode
        </p>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Nunito:300,400,500,600,700,800"
          rel="stylesheet"
        />
      </div>
    </header>
  );
}