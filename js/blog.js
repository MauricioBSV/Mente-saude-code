window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/",
    "svgExt": ".svg",
    "source": {"concatemoji":"https:\/\/saudementalempresa.com.br\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.6.2"}
};
/*! This file is auto-generated */
(function(window, document, settings) {
    var supports = {
        everything: true,
        everythingExceptFlag: true
    };
    function loadScript(src) {
        var script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
    }
    loadScript(settings.source.concatemoji);
})(window, document, window._wpemojiSettings);

document.querySelector('.wpr-mobile-toggle').addEventListener('click', function () {
    const mobileMenu = document.querySelector('.wpr-mobile-nav-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.querySelector('.promagnifier').addEventListener('click', function() {
    const input = document.querySelector('.proinput input[type="search"]').value;
    if (input) {
        alert('Searching for: ' + input);
    }
});

const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');
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

const events = [
    'DOMContentLoaded',
    'elementor/lazyload/observe',
];

events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});

// Elementor Pro Frontend Config
var ElementorProFrontendConfig = {
    ajaxurl: "https://saudementalempresa.com.br/wp-admin/admin-ajax.php",
    nonce: "58f954d21f",
    urls: {
        assets: "https://saudementalempresa.com.br/wp-content/plugins/pro-elements/assets/",
        rest: "https://saudementalempresa.com.br/wp-json/"
    },
    shareButtonsNetworks: {
        facebook: { title: "Facebook", has_counter: true },
        twitter: { title: "Twitter" },
        linkedin: { title: "LinkedIn", has_counter: true },
        pinterest: { title: "Pinterest", has_counter: true },
        reddit: { title: "Reddit", has_counter: true },
        vk: { title: "VK", has_counter: true },
        odnoklassniki: { title: "OK", has_counter: true },
        tumblr: { title: "Tumblr" },
        digg: { title: "Digg" },
        skype: { title: "Skype" },
        stumbleupon: { title: "StumbleUpon", has_counter: true },
        mix: { title: "Mix" },
        telegram: { title: "Telegram" },
        pocket: { title: "Pocket", has_counter: true },
        xing: { title: "XING", has_counter: true },
        whatsapp: { title: "WhatsApp" },
        email: { title: "Email" },
        print: { title: "Print" },
        "x-twitter": { title: "X" },
        threads: { title: "Threads" }
    },
    facebook_sdk: { lang: "pt_BR", app_id: "" },
    lottie: {
        defaultAnimationUrl: "https://saudementalempresa.com.br/wp-content/plugins/pro-elements/modules/lottie/assets/animations/default.json"
    }
};

// Elementor Frontend Config
var elementorFrontendConfig = {
    environmentMode: { edit: false, wpPreview: false, isScriptDebug: false },
    i18n: {
        shareOnFacebook: "Compartilhar no Facebook",
        shareOnTwitter: "Compartilhar no Twitter",
        pinIt: "Fixar",
        download: "Baixar",
        downloadImage: "Baixar imagem",
        fullscreen: "Tela cheia",
        zoom: "Zoom",
        share: "Compartilhar",
        playVideo: "Reproduzir vídeo",
        previous: "Anterior",
        next: "Próximo",
        close: "Fechar",
        a11yCarouselWrapperAriaLabel: "Carrossel | Rolagem horizontal: Setas para esquerda e direita",
        a11yCarouselPrevSlideMessage: "Slide anterior",
        a11yCarouselNextSlideMessage: "Próximo slide",
        a11yCarouselFirstSlideMessage: "Este é o primeiro slide",
        a11yCarouselLastSlideMessage: "Este é o último slide",
        a11yCarouselPaginationBulletMessage: "Ir para o slide"
    },
    is_rtl: false,
    breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
    responsive: { breakpoints: { mobile: { label: "Dispositivos móveis no modo retrato", value: 767 } } },
    version: "3.24.6",
    is_static: false,
    experimentalFeatures: { e_font_icon_svg: true },
    urls: { assets: "https://saudementalempresa.com.br/wp-content/plugins/elementor/assets/" }
};

// Ultimate Post Kit Config
var UltimatePostKitConfig = {
    ajaxurl: "https://saudementalempresa.com.br/wp-admin/admin-ajax.php",
    nonce: "20b37b1f91",
    mailchimp: { subscribing: "Subscribing you please wait..." },
    elements_data: { sections: [], columns: [], widgets: [] }
};

// WPR Config
var WprConfig = {
    ajaxurl: "https://saudementalempresa.com.br/wp-admin/admin-ajax.php",
    resturl: "https://saudementalempresa.com.br/wp-json/wpraddons/v1",
    nonce: "7ba54a996a",
    addedToCartText: "was added to cart",
    viewCart: "View Cart"
};
