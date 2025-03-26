$(document).ready(function () {
    $("[data-collapse-toggle]").click(function () {
        $("#navbar-multi-level").toggleClass("hidden");
    });

    const $themeToggle = $("#theme-toggle");
    const $themeIconPath = $("#theme-icon-path");

    const setTheme = (isDark) => {
        $("html").toggleClass("dark", isDark);
        $themeIconPath.attr("d", isDark 
            ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
            : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z");
    };
    const isDarkMode = localStorage.getItem("theme") === "dark" || 
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setTheme(isDarkMode);

    $themeToggle.click(function () {
        const newTheme = !$("html").hasClass("dark");
        localStorage.setItem("theme", newTheme ? "dark" : "light");
        setTheme(newTheme);
    });
});
