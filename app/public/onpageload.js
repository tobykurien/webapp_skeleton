if (window.LiveReload) {
    LiveReload.reloader.reloadPage = function() {
        window.location.href = window.location.href;
    }
}
