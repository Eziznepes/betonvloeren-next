import React from "react";
import { checkSvg, phoneSvg } from "@/app/base/SVG";

export default function Content() {
  return (
    <div className="content">
      <div className="content__text">
        <p className="extra">
          <strong>Betonvloeren</strong> zijn niet alleen mooi en modern, maar
          ook duurzaam en hygienisch. Maar welke soort
          <strong>betonvloer</strong> past het beste bij uw project?
        </p>
        <p className="extra">
          Op deze pagina vindt u alle informatie die u nodig heeft over de
          <a href="#">verschillende soorten</a>,<a href="#">voordelen</a>,{" "}
          <a href="#">nadelen</a> en
          <a href="#">prijzen van betonvloeren</a>.
        </p>
      </div>
      <div className="content__info">
        <a href="#" className="content__info-item">
          <div className="content__info-item-image">
            <img src="images/info/1.png" alt="" />
            <h4>
              Alles over <span>Betonvloer</span>
            </h4>
          </div>
          <div className="content__info-item-tag">meest verkocht</div>
        </a>
        <a href="#" className="content__info-item">
          <div className="content__info-item-image">
            <img src="images/info/2.png" alt="" />
            <h4>
              Alles over <span>Beton cire</span>
            </h4>
          </div>
        </a>
        <a href="#" className="content__info-item">
          <div className="content__info-item-image">
            <img src="images/info/3.png" alt="" />
            <h4>
              Alles over <span>Woonbeton</span>
            </h4>
          </div>
        </a>
      </div>
      <div className="button__row">
        <a href="tel:020 - 370 91 51" className="button secondary phone blue">
          {phoneSvg}
          020 - 370 91 51
        </a>
        <button type="button" className="button primary big">
          Offerte aanvragen
        </button>
      </div>
      <div className="content__about">
        <h3 className="sm">
          Wat zijn betonvloeren en waarom zijn ze populair?
        </h3>
        <div className="content__about-inner">
          <p className="extrasm">
            <strong>Betonvloeren</strong> zijn gemaakt van een sterk, natuurlijk
            en duurzaam mengsel van cement, water, zand en grind.
          </p>
          <p className="extrasm">
            <span>Betonvloeren</span> zijn verkrijgbaar in diverse kleuren,
            texturen en afwerkingen en geven elke ruimte een unieke look & feel.
          </p>
        </div>
      </div>
      <div className="content__type">
        <h2>Soorten betonvloeren</h2>
        <p className="extra">
          Er zijn verschillende soorten <span>betonvloeren</span> die u kunt
          kiezen voor uw woning of bedrijf. Elk met zijn eigen kenmerken, voor-
          en nadelen.
        </p>
        <div className="content__type-items">
          <a href="#" className="content__type-item">
            <div className="content__type-item-image">
              <img src="images/type/1.png" alt="" />
              <h6>Beton cire</h6>
            </div>
          </a>
          <a href="#" className="content__type-item">
            <div className="content__type-item-image">
              <img src="images/type/2.png" alt="" />
              <h6>Betonlook</h6>
            </div>
          </a>
          <a href="#" className="content__type-item">
            <div className="content__type-item-image">
              <img src="images/type/3.png" alt="" />
              <h6>Woonbeton</h6>
            </div>
          </a>
          <a href="#" className="content__type-item">
            <div className="content__type-item-image">
              <img src="images/type/4.png" alt="" />
              <h6>Gietvloer beton</h6>
            </div>
          </a>
        </div>
        <h3 className="sm">Welke soorten betonvloeren zijn er?</h3>
        <p className="extra">
          Betonvloeren soorten: <a href="#">beton cire</a>,
          <a href="#">woonbeton</a>,<a href="#">betonlook gietvloer</a>,
          <a href="#">gevlinderde betonvloer</a>,<a href="#">gietvloer beton</a>{" "}
          en
          <a href="#">betonnen vloer</a>.
        </p>
        <div className="button__row">
          <a href="tel:020 - 370 91 51" className="button secondary phone blue">
            {phoneSvg}
            020 - 370 91 51
          </a>
          <button type="button" className="button primary big">
            Offerte aanvragen
          </button>
        </div>
      </div>
      <div className="detail__outer">
        <div className="detail">
          <div className="detail__title">
            <h3>1. Beton cire</h3>
            <div className="detail__title-tag">meest verkocht</div>
          </div>
          <p className="extra">
            Beton ciré is een decoratieve coating die een betonlook geeft aan
            wanden en vloeren van uw woning of kantoor ruimte.
          </p>
          <div className="detail__image">
            <img src="images/detail/1/1.jpg" alt="" />
          </div>
          <h3 className="sm">Wat is betoncire?</h3>
          <p className="extra">
            <strong>Beton cire</strong> is een type
            <a href="#">betonvloer</a> met een unieke en natuurlijke
            uitstraling. Het is een dunne laag betonstuc die ambachtelijk wordt
            aangebracht op verschillende ondergronden.
          </p>
          <div className="detail__items three">
            <div className="detail__item">
              <div className="detail__item-image">
                <img src="images/detail/1/2.jpg" alt="" />
              </div>
            </div>
            <div className="detail__item">
              <div className="detail__item-image">
                <img src="images/detail/1/3.jpg" alt="" />
              </div>
            </div>
            <div className="detail__item">
              <div className="detail__item-image">
                <img src="images/detail/1/4.jpg" alt="" />
              </div>
            </div>
          </div>
          <p className="extra">
            <span>Beton cire</span> is waterdicht, slijtvast,
            onderhoudsvriendelijk en leverbaar in vele unieke kleuren zoals
            Grijs, Taupe, Dark sand, Latte en meer.
          </p>
          <h3 className="sm">Voordelen van beton cire</h3>
          <div className="detail__adv">
            <div className="detail__adv-item">
              {checkSvg}
              Hecht op elke ondergrond
            </div>
            <div className="detail__adv-item">
              {checkSvg}
              Veel kleuren en afwerkingen
            </div>
          </div>
          <p className="extra">
            Betoncire is geschikt voor zowel binnen als buiten, en voor zowel
            wanden als vloeren. <strong>Beton cire</strong> geeft uw woning of
            bedrijf een warme en moderne sfeer en kan geheel naar uw wensen
            worden gemaakt.
          </p>
          <div className="button__row">
            <a href="#" className="button link">
              Meer over Beton cire
            </a>
            <button className="button primary">Offerte aanvragen</button>
          </div>
        </div>
        <div className="detail">
          <div className="detail__title">
            <h3>2. Gietvloer beton</h3>
          </div>
          <p className="extra">
            Een Gietvloer beton is een kunststof vloer met een betonlook. Een
            gietvloer met betonlook is hygienisch, warm, makkelijk en kleurrijk.
          </p>
          <div className="detail__image">
            <img src="images/detail/2/1.jpg" alt="" />
          </div>
          <p className="extra">
            Een <strong>gietvloer beton</strong> is een vloer die vloeibaar over
            uw ondergrond wordt gegoten om een
            <a href="#">betonlook</a> te creeeren.
          </p>
          <p className="extra">
            U geniet bij een <span>gietvloer beton</span> van de look & feel van
            een <a href="#">betonvloer</a>, die toch warm en zacht aanvoelt aan
            uw voeten.
          </p>
          <div className="detail__items">
            <div className="detail__item">
              <div className="detail__item-image">
                <img src="images/detail/2/2.jpg" alt="" />
              </div>
            </div>
            <div className="detail__item">
              <div className="detail__item-image">
                <img src="images/detail/2/3.jpg" alt="" />
              </div>
            </div>
          </div>
          <p className="extra">
            Een gietvloer beton is niet hetzelfde als gietbeton, dat een
            massieve betonvloer is. Gietbeton is dikker, harder en gevoeliger
            voor scheuren dan een gietvloer beton.
          </p>
          <h3 className="sm">Voordelen van gietvloer beton</h3>
          <div className="detail__adv">
            <div className="detail__adv-item">
              {checkSvg}
              Voelt warm aan
            </div>
            <div className="detail__adv-item">
              {checkSvg}
              Ideaal voor vloerverwarming
            </div>
          </div>
          <p className="extra">
            Een gietvloer beton is daarom een betere keuze voor een comfortabele
            en duurzame vloer in uw woning.
          </p>
          <div className="button__row">
            <a href="#" className="button link">
              Meer over Gietvloer beton
            </a>
            <button className="button primary">Offerte aanvragen</button>
          </div>
        </div>
      </div>
      <div className="content__adv">
        <div className="content__adv-title">
          <h2>De voordelen van betonvloeren</h2>
          {checkSvg}
        </div>
        <p className="extra">
          Betonvloeren zijn naadloze, slijtvaste en duurzame vloeren met een
          unieke en natuurlijke uitstraling. Een betonvloer is ook geschikt voor
          vloerverwarming en isolatie, hygiënisch en onderhoudsvriendelijk. en.
        </p>
        <div className="content__adv-row">
          <div className="content__adv-item">
            <div className="content__adv-item-image">
              <img src="images/adv/1.jpg" alt="" />
            </div>
            <h3 className="sm">
              Betonvloeren: Naadloos, slijtvast en duurzaam
            </h3>
            <p className="extra">
              Een betonvloer is duurzaam en slijtvast. Een goed gestorte en
              afgewerkte betonvloer kan jarenlang meegaan zonder te beschadigen
              of te vervormen.
            </p>
          </div>
          <div className="content__adv-item">
            <div className="content__adv-item-image">
              <img src="images/adv/2.jpg" alt="" />
            </div>
            <h3 className="sm">
              Betonvloeren: Unieke en natuurlijke uitstraling
            </h3>
            <p className="extra">
              Betonvloeren passen goed bij verschillende interieurstijlen, van
              industrieel tot landelijk. Elke betonvloer heeft zijn eigen
              karakter en kleurschakering.
            </p>
          </div>
        </div>
        <div className="button__row">
          <a href="tel:020 - 370 91 51" className="button secondary phone blue">
            {phoneSvg}
            020 - 370 91 51
          </a>
          <button type="button" className="button primary big">
            Offerte aanvragen
          </button>
        </div>
        <div className="content__adv-row">
          <div className="content__adv-item">
            <div className="content__adv-item-image">
              <img src="images/adv/3.jpg" alt="" />
            </div>
            <h3 className="sm">
              Betonvloeren: hygiënisch en onderhoudsvriendelijk
            </h3>
            <p className="extra">
              Betonvloeren zijn ook makkelijk schoon te maken met een dweil of
              stofzuiger. Betonvloer heeft geen speciale behandeling of
              producten nodig qua onderhoud.
            </p>
          </div>
          <div className="content__adv-item">
            <div className="content__adv-item-image">
              <img src="images/adv/4.jpg" alt="" />
            </div>
            <h3 className="sm">Betonvloeren: geschikt voor vloerverwarming</h3>
            <p className="extra">
              Betonvloeren kunnen ook gecombineerd worden met isolatiemateriaal,
              waardoor ze de warmte beter vasthouden en energie besparen.
            </p>
          </div>
        </div>
      </div>
      <div className="content__choose">
        <h2>Kiest u voor voor betonvloeren.nl?</h2>
        <p className="extra">
          Bent u op zoek naar een betrouwbare, ervaringsrijke partner voor uw
          betonvloer? Bij <strong>Betonvloeren.nl</strong> bent u aan het juiste
          adres.
        </p>
        <p className="extra">
          Wij leveren kwaliteit en service op maat, tegen een scherpe prijs.
          Voor zowel particulier als zakelijk. Bij ons kunt u rekenen op:
        </p>
        <div className="content__choose-items">
          <div className="content__choose-item">
            <div className="content__choose-item-icon">
              <img src="images/icons/quality.png" alt="" />
            </div>
            <div className="content__choose-item-content">
              <h3 className="sm">Kwaliteit en service</h3>
              <p className="extra">
                Bij <strong>Betonvloeren.nl</strong> staan kwaliteit en service
                voorop. Wij werken alleen met de beste materialen en vakmensen,
                en wij zorgen voor een klantgerichte en persoonlijke aanpak.
              </p>
            </div>
          </div>
          <div className="content__choose-item">
            <div className="content__choose-item-icon">
              <img src="images/icons/service.png" alt="" />
            </div>
            <div className="content__choose-item-content">
              <h3 className="sm">Ervaring en expertise</h3>
              <p className="extra">
                Wij hebben meer dan 18 jaar ervaring in het plaatsen en afwerken
                van betonvloeren. Wij hebben de kennis en de vaardigheden om
                elke <strong>betonvloer</strong> naar wens te realiseren.
              </p>
            </div>
          </div>
          <div className="content__choose-item">
            <div className="content__choose-item-icon">
              <img src="images/icons/life-insurance.png" alt="" />
            </div>
            <div className="content__choose-item-content">
              <h3 className="sm">Nazorg en garantie</h3>
              <p className="extra">
                Bij Betonvloer.nl laten wij u niet in de steek na de plaatsing
                van uw betonvloer. Wij bieden u een nazorg en onderhoud van uw
                betonvloer, en een garantie van 5 jaar op uw betonvloer.
              </p>
            </div>
          </div>
        </div>
        <button type="button" className="button bluebt">
          Vrijblijvende offerte aanvragen
        </button>
      </div>
    </div>
  );
}
