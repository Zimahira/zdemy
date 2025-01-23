import React from "react";
import "../styles/PartnerBanner.css";

const partners = [
  {
    id: 1,
    logo: "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals",
    alt: "Volkswagen logo gray and white logo",
  },
  {
    id: 2,
    logo: "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals",
    alt: "Samsung logo gray and white logo",
  },
  {
    id: 3,
    logo: "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals",
    alt: "Cisco logo gray and white logo",
  },
  {
    id: 4,
    logo: "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals",
    alt: "Vimeo logo gray and white logo",
  },
  {
    id: 5,
    logo: "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals",
    alt: "Procter & Gamble logo gray and white logo",
  },
  {
    id: 6,
    logo: "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals",
    alt: "Hewlett Packard logo gray and white logo",
  },
  {
    id: 7,
    logo: "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals",
    alt: "Citi logo gray and white logo",
  },
  {
    id: 8,
    logo: "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals",
    alt: "Ericsson logo gray and white logo",
  },
];

const PartnerBanner = () => {
  return (
    <div className="partners-banner">
      <div className="partners-content">
        <h2 className="partners-heading">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </h2>
        <ul className="partners-logos-list">
          {partners.map((partner) => (
            <li key={partner.id} className="partner-logo-item">
              <img
                src={partner.logo}
                alt={partner.alt}
                loading="lazy"
                className="partner-logo"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PartnerBanner;
