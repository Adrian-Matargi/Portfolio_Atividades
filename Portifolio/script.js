document.addEventListener('DOMContentLoaded', function() {
    const btnSenai = document.getElementById('btn-senai');
    const btnBosch = document.getElementById('btn-bosch');

    btnSenai.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionSenai = document.getElementById('activities-senai');
        sectionSenai.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    btnBosch.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionBosch = document.getElementById('activities-bosch');
        sectionBosch.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});