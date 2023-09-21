document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('theme-toggl').addEventListener('click', function() {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            document.body.classList.add('pug-mode');
            localStorage.setItem("pref-theme", "pug");
        } else if (document.body.classList.contains('pug-mode')) {
            document.body.classList.remove('pug-mode');
            localStorage.setItem("pref-theme", "light");
        } else {
            document.body.classList.add('dark');
            localStorage.setItem("pref-theme", "dark");
        }
    });
});