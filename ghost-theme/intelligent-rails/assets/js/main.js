// Intelligent Rails — Ghost Theme JS

// Show form success/error messages from Ghost Members
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('[data-members-form]');

    forms.forEach(function (form) {
        form.addEventListener('submit', function () {
            var button = form.querySelector('button[type="submit"]');
            if (button) button.textContent = 'Sending...';
        });
    });

    // Ghost will add data-members-success or data-members-error attributes
    // and show/hide elements accordingly. This script handles the button state.
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'attributes') {
                var el = mutation.target;
                if (el.hasAttribute('data-members-success') && el.style.display !== 'none') {
                    el.style.display = 'block';
                }
                if (el.hasAttribute('data-members-error') && el.textContent) {
                    el.style.display = 'block';
                }
            }
        });
    });

    document.querySelectorAll('.ir-form-message').forEach(function (msg) {
        observer.observe(msg, { attributes: true, attributeFilter: ['style'] });
    });
});
