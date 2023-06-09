// Variable comprenant le contenu de code source du footer
const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>

body {
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

footer {
  background-color: #34EDC2;
  color: black;
  font-size: 16px;
}
footer * {
  font-family: "latoregular", "sans-serif";
  box-sizing: border-box;
  border: none;
  outline: none;
}
.row {
  padding: 1em 1em;
}
.row.primary {
  display: grid;
  grid-template-columns: 4fr 3fr 3fr;
  align-items: strech;
}
.column {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  min-height: 15em;
}
h3 {
  width: 100%;
  text-align: left;
  color: black;
  font-size: 1.4em;
  white-space: nowrap;
}
h1 {
  width: 100%;
  text-align: left;
  color: white;
  font-size: 1.4em;
  white-space: nowrap;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
li:not(:first-child) {
  margin-top: 0.8em;
}
ul li a {
  color: black;
  text-decoration: none;
}
ul li a:hover {
  color: #2a8ded;
}

.about p {
  text-align: justify;
  line-height: 2;
  margin: 0;
}
input,
button {
  font-size: 1em;
  padding: 1em;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
}
button {
  background-color: #c7940a;
  color: #ffffff;
}
div.social {
  display: flex;
  justify-content: flex-start;
  font-size: 2.4em;
  flex-direction: row;
  margin-top: 0.5em;
}
.social i {
  color: #bac6d9;
  margin: 0.2em;
}

.copyright {
  padding: 0.3em 1em;
  background-color: #25262e;
}
.copyright .localisation{
  font-size: 0.9em;
  text-align: left;
  color: lightgray;
}

.copyright p {
  font-size: 0.9em;
  text-align: center;
  color: white;
}

.Stars {
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times; /*make sure ★ appears correctly */
  line-height: 1;
  border-radius: 3px;
  border: 0.1rem solid #000;
  background-color: var(--star-backgroundcard);
  
  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.Rating {
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times; /*make sure ★ appears correctly */
  border-radius: 3px;
  padding: 0.2em;
  border: 0.1rem solid #000;
  background-color: #34EDC2;

}
.Ratingp{
  font-size: 0.7em;
  color: #000;
  margin: 0;

}

@media screen and (max-width: 992px) {
  .row.primary {
    display: grid;
    grid-template-columns: 4fr 3fr 3fr;
    align-items: strech;
  }

}

@media screen and (max-width: 768px) {
  .row.primary {
    grid-template-columns: 1fr;
  }

}

@media screen and (max-width: 576px) {
  .row.primary {
    grid-template-columns: 1fr;
  }

}


</style>

<!-- pieds de page du site internet mettant en avant les informations relatives a la dite societe -->
<footer>
<div class="row primary">
    <div class="column about">

        <h1>SIGITRAG</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        </p>
    </div>

    <div class="column statistiques">
        <h3>Statistiques</h3>
        <ul>
          <li>
            <a>Services livrés :</a>
          </li>
          <li>
            <div class="Rating">
              <p class="Ratingp">
                3265
              </p>
            </div>
          </li>
          <li>
            <a>Satisfaction client :</a>
          </li>
          <li>
            <div class="Stars" style="--rating: 2.9;" aria-label="Rating of this product is 2.3 out of 5."></div>
          </li>
      </ul>
    </div>

    <div class="column links">
        <h3>A propos de SIGITRAG</h3>
        <ul>
            <li>
              <a href="index.html#ancrepouraboutyou">Qui sommes nous ?</a>
            </li>
            <li>
              <a href="index.html#ancrepourservices">Nos Services</a>
            </li>
            <li>
              <a href="index.html#ancrepournouschoisir">Pourquoi nous choisir ?</a>
            </li>
            <li>
              <a href="index.html#ancrepouraboutyou">Devenir propriétaire</a>
            </li>
        </ul>
    </div>
</div>

<div class="row copyright">
    <div class="social">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-whatsapp"></i>
    </div>
    <p class="localisation">Cote d'ivoire - Abidjan_cocody Angré Nouveau CHU</p>
    <p>Copyright &copy; 2023 Bumpy Society</p>
</div>
</footer>
`;
// fin Variable comprenant le contenu de code source du footer

// Class javascripts Footer etendu avec HTMLElement
class Footer extends HTMLElement {
    // méthode de constructor et le mot-clé spécial super
    constructor() {
      super();
    }
    // fin méthode de constructor et le mot-clé spécial super

    // rappels du cycle de vie pour ajouter l'en-tête à la page
    // connectedCallbacks'exécute chaque fois que votre élément personnalisé est inséré dans le DOM.
    connectedCallback() {
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const shadowRoot = this.attachShadow({ mode: 'closed' });
    
        if (fontAwesome) {
          shadowRoot.appendChild(fontAwesome.cloneNode());
        }
    
        shadowRoot.appendChild(footerTemplate.content);
    }
    // fin rappels du cycle de vie pour ajouter l'en-tête à la page
  }
 // fin Class javascripts Footer etendu avec HTMLElement

// Enregistrement de l'élément personnalisé avec la méthode customElements.define()
customElements.define('footer-component', Footer);