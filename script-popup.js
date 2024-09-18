const certifData = {
    // 1er certif
    1: {
        sections: [
            {
                text: `
                    <h2>Certification HTML 5 - CSS3</h2>
                    <p><strong>OpenClassrooms</strong></p>
                    <p><strong>Lien internet :</strong> <a href="https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3" target="_blank">
                    Open Classrooms</a></p>
                    <p>Dans cette formation, j'ai appris comment utiliser HTML5 et CSS3, les deux langages de programmation à la base de tous les sites web.</p>
                `
            },
            {
                text: `
                    <h3>Pourquoi cette formation ?</h3>
                    <ul>
                        <li>Prendre du savoir et du savoir-faire en liaison avec ma formation en BTS SIO</li>
                        <li>Me servir lors de mon stage</li>
                        <li>Compétences qui me serviront dans mon futur professionnel</li>
                    </ul>
                `
            },
            {
                text: `
                    <h3>Mes objectifs</h3>
                    <ul>
                        <li>Utiliser du code HTML</li>
                        <li>Structurer une page web en HTML</li>
                        <li>Mettre en forme une page web en CSS</li>
                        <li>Organiser les éléments d'une page web grâce au CSS</li>
                        <li>Modifier l'agencement d'une page HTML avec CSS</li>
                        <li>Intégrer des formules dans une page web</li>
                        <li>Adapter une page pour les petites résolutions en CSS</li>
                    </ul>
                `
            },
            {
                text: `
                    <h3>Les outils que j'ai utilisé</h3>
                    <ul>
                        <li>Navigateur WEB</li>
                        <li>Visual Studio Code</li>
                    </ul>
                `
            },
            {
                text: `
                    <h3>Ma progression</h3>
                `,
                images: [
                    "./img/certifs/html-css.png"
                ]
            }
        ]
    },
    //2e Certif
    2: {
        sections: [
            {
                text: `
                    <h2>Adressage réseau et dépannage de base</h2>
                    <p><strong>Formation Skills For All (CISCO)</strong></p>
                    <p><strong>Lien internet :</strong> <a href="#" target="_blank">
                    CISCO (LIEN A RAJOUTER)</a></p>
                    <p>Dans cette formation, j'ai appris comment utiliser HTML5 et CSS3, les deux langages de programmation à la base de tous les sites web.</p>
                `
            },
            {
                text: `
                    <h3>Pourquoi cette formation ?</h3>
                    <ul>
                        <li>Prendre du savoir et du savoir-faire en liaison avec ma formation en BTS SIO</li>
                        <li>Me servir lors de mon stage</li>
                        <li>Compétences qui me serviront dans mon futur professionnel</li>
                    </ul>
                `
            },
            {
                text: `
                    <h3>Mes objectifs</h3>
                    <ul>
                        <li>Apprendre les bases du réseaux</li>
                    </ul>
                `
            },
            {
                text: `
                    <h3>Les outils que j'ai utilisé</h3>
                    <ul>
                        <li>CISCO Packet Tracer</li>
                    </ul>
                `
            },
            {
                text: `
                    <h3>Ma progression</h3>
                `,
                images: [
                    "https://via.placeholder.com/500x300"
                ]
            }
        ]
    },
    3: {
        sections: [
            {
                text: "Voici la description complète pour le Certif 3.",
                images: [
                    "https://via.placeholder.com/500x300"
                ]
            }
        ]
    }
}

// Affichage du popup
const certifs = document.querySelectorAll('.certif');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const closeBtn = document.querySelector('.close-btn');

certifs.forEach(certif => {
    certif.addEventListener('click', function() {
        const certifId = this.getAttribute('data-certif');
        const data = certifData[certifId];

        // Construire le contenu du popup
        let popupHTML = '';
        data.sections.forEach(section => {
            if (section.text) {
                popupHTML += `<div class="popup-text">${section.text}</div>`;
            }
            if (section.images && section.images.length > 0) {
                section.images.forEach(imgSrc => {
                    popupHTML += `<div class="popup-image"><img src="${imgSrc}" alt="Image certif ${certifId}"></div>`;
                });
            }
        });

        popupContent.innerHTML = popupHTML;

        // Afficher le popup
        popup.style.display = 'block';
    });
});

// Fermer le popup
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Fermer le popup en cliquant à l'extérieur
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
