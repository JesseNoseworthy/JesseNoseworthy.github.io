import acuraImage from 'assets/images/acura-portfolio.jpg';
import hondaImage from 'assets/images/honda-portfolio.jpg';
import canonImage from 'assets/images/canon-portfolio.jpg';

module.exports = {
  "title": "Check out my portfolio!",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum quam eu rutrum accumsan.",
  "items": [
    {
      "title": "Canon.ca",
      "image": canonImage,
      "demo": [
        {
          "title": "see more",
          "href": "http://www.canon.ca"
        }
      ],
      "description": "modules to be rendered dynamically across pages. This application also gives the admin complete control over the look and feel of their modules, including dynamic themes per business segment.",
      "skills": "React, Theming, Sass, WebPack"
    },
    {
      "title": "Honda/Acura Build and Price Calculator",
      "image": hondaImage,
      "demo": [
        {
          "title": "Honda Demo",
          "href": "http://www.honda.ca/buildyourhonda"
        },
        {
          "title": "Acura Demo",
          "href": "http://www.acura.ca/buildyouracura"
        }
      ],
      "description": "A virtual car-building tool that allows users to build a vehicle, and calculator various pricing options.",
      "skills": "React, Redux, Theming, Styled-Components, WebPack"
    },
    {
      "title": "Acura.ca Homepage",
      "image": acuraImage,
      "demo": [
        {
          "title": "see more",
          "href": "http://www.acura.ca"
        }
      ],
      "description": "A single-page React application than includes a dynamic carousel, location-based data, and responsive components.",
      "skills": "React, Sass"
    }
  ]
}