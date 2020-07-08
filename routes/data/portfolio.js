import acuraImage from 'assets/images/portfolio/acura-portfolio.jpg';
import hondaImage from 'assets/images/portfolio/honda-portfolio.jpg';
import canonImage from 'assets/images/portfolio/canon-portfolio.jpg';

module.exports = {
  "title": "Check out my portfolio!",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum quam eu rutrum accumsan.",
  "items": [
    {
      "title": "Canon.ca",
      "image": canonImage,
      "demo": [
        {
          "title": "Demo",
          "href": "http://www.canon.ca"
        }
      ],
      "description": "A theme-based application that provides the administrator with 35+ dynamic and reusable React modules, enabling control over placement, orientation, content, and theming. The real power behind this application is its UI and flexibility.",
      "skills": "React, Theming, Sass, WebPack"
    },
    {
      "title": "Honda/Acura Build and Price Calculator",
      "image": hondaImage,
      "demo": [
        {
          "title": "Acura Demo",
          "href": "http://www.acura.ca/buildyouracura"
        },
        {
          "title": "Honda Demo",
          "href": "http://www.honda.ca/buildyourhonda"
        }
      ],
      "description": "This Redux application provides the user with a seamless experience, as they build and price a virtual vehicle. This application excels when it comes its dynamic build-based content and robust calculator.",
      "skills": "React, Redux, Router, Theming, WebPack, Node Modules, Styled-Components"
    },
    {
      "title": "Acura.ca Homepage",
      "image": acuraImage,
      "demo": [
        {
          "title": "Demo",
          "href": "http://www.acura.ca"
        }
      ],
      "description": "A single-page React application than includes a dynamic carousel, location-based data, and responsive components.",
      "skills": "React, PostCSS"
    }
  ]
}