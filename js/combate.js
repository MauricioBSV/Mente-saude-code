window._wpemojiSettings = {
    "baseUrl": "https://s.w.org/images/core/emoji/15.0.3/72x72/",
    "ext": ".png",
    "svgUrl": "https://s.w.org/images/core/emoji/15.0.3/svg/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https://saudementalempresa.com.br/wp-includes/js/wp-emoji-release.min.js?ver=6.6.2"
    }
};

/*! This file is auto-generated */
(function (window, document, _wpemojiSettings) {
    var supports = {
        everything: true,
        everythingExceptFlag: true
    };

    function c(e) {
        try {
            var t = { supportTests: e, timestamp: (new Date()).valueOf() };
            sessionStorage.setItem("wpEmojiSettingsSupports", JSON.stringify(t));
        } catch (e) { }
    }

    function t(e) {
        var script = document.createElement("script");
        script.src = e;
        script.defer = true;
        document.head.appendChild(script);
    }

    if (!_wpemojiSettings.supports) {
        t(_wpemojiSettings.source.concatemoji);
    }
})(window, document, window._wpemojiSettings);

document.addEventListener('DOMContentLoaded', function() {
    // Handle form submissions
    document.querySelector('form[name="options"]').addEventListener('submit', function(event) {
        event.preventDefault();
        let filters = {};
        let formData = new FormData(event.target);

        // Collect filter values
        formData.forEach((value, key) => {
            if (!filters[key]) {
                filters[key] = [];
            }
            filters[key].push(value);
        });

        // Process filters (e.g., send to server or apply to search results)
        console.log('Selected filters:', filters);
    });
    
    // Apply filter effects (e.g., Gaussian blur)
    let blurFilter = document.getElementById('aslblur');
    let noBlurFilter = document.getElementById('no_aslblur');
    
    document.querySelectorAll('.asl_option input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', function() {
            let svgFilter = checkbox.checked ? blurFilter : noBlurFilter;
            document.querySelector('.results').style.filter = `url(#${svgFilter.id})`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Search magnifier button click
    document.querySelector('.promagnifier').addEventListener('click', function() {
        let searchInput = document.querySelector('.orig');
        console.log('Search for:', searchInput.value);
    });
});

<script type='text/javascript'>
const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
    const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyloadBackground = entry.target;
                if (lazyloadBackground) {
                    lazyloadBackground.classList.add('e-lazyloaded');
                }
                lazyloadBackgroundObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px 0px 200px 0px' });
    lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
    });
};

const events = ['DOMContentLoaded', 'elementor/lazyload/observe'];
events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});
</script>

<script id="wd-asl-ajaxsearchlite-js-before">
window.ASL = {
    wp_rocket_exception: "DOMContentLoaded",
    ajaxurl: "https://saudementalempresa.com.br/wp-admin/admin-ajax.php",
    // Other configurations...
};
</script>

<script src="https://saudementalempresa.com.br/wp-content/plugins/ajax-search-lite/js/min/plugin/optimized/asl-prereq.js?ver=4765" id="wd-asl-ajaxsearchlite-js"></script>
<script src="https://saudementalempresa.com.br/wp-content/plugins/ajax-search-lite/js/min/plugin/optimized/asl-core.js?ver=4765" id="wd-asl-ajaxsearchlite-core-js"></script>
