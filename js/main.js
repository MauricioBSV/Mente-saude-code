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

const events = ['DOMContentLoaded', 'elementor/lazyload/observe'];

events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});

const renderTemplate = (templateId, data) => {
    const template = document.getElementById(templateId).innerHTML;
    return _.template(template)(data); // Utiliza template engine como underscore ou lodash
};

// Exemplo de uso
const headerHTML = renderTemplate('tmpl-elementor-templates-modal__header', { closeType: 'skip' });
document.querySelector('.header-container').innerHTML = headerHTML;
