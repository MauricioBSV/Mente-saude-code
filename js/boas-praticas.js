window._wpemojiSettings = {
    "baseUrl": "https://s.w.org/images/core/emoji/15.0.3/72x72/",
    "ext": ".png",
    "svgUrl": "https://s.w.org/images/core/emoji/15.0.3/svg/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https://saudementalempresa.com.br/wp-includes/js/wp-emoji-release.min.js?ver=6.6.2"
    }
};

/*! Função auto-gerada */
(function (window, document, settings) {
    /* Script principal para emojis */
    function c(e) {
        try {
            var t = { supportTests: e, timestamp: (new Date).valueOf() };
            sessionStorage.setItem(settings, JSON.stringify(t));
        } catch (e) {}
    }

    /* Mais funções aqui... */
})(window, document, window._wpemojiSettings);

// Placeholder para scripts personalizados

document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector(".proclose svg");
    
    closeButton.addEventListener("click", () => {
        const dataContainer = document.querySelector(".asl_data_container");
        dataContainer.style.display = "none";
    });
});

document.querySelectorAll('.asl_option').forEach(option => {
    option.addEventListener('click', function () {
        const checkbox = this.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Funções de manipulação do botão de busca
    const searchButton = document.querySelector('.promagnifier');
    searchButton.addEventListener('click', () => {
      console.log("Magnifier button clicked.");
    });
  
    // Funções para o fechamento
    const closeButton = document.querySelector('.proclose');
    closeButton.addEventListener('click', () => {
      console.log("Close button clicked.");
    });
  
    // Outras configurações de inicialização ou animações
  });
  
  // Example script for toggling checkbox state
document.querySelectorAll('.asl_option').forEach(option => {
    option.addEventListener('click', () => {
        const checkbox = option.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
    });
});

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

const events = [
    'DOMContentLoaded',
    'elementor/lazyload/observe',
];

events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});

var ElementorProFrontendConfig = {
    ajaxurl: "https://saudementalempresa.com.br/wp-admin/admin-ajax.php",
    nonce: "8bdd5021f6",
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
        x_twitter: { title: "X" },
        threads: { title: "Threads" }
    },
    facebook_sdk: {
        lang: "pt_BR",
        app_id: ""
    },
    lottie: {
        defaultAnimationUrl: "https://saudementalempresa.com.br/wp-content/plugins/pro-elements/modules/lottie/assets/animations/default.json"
    }
};

