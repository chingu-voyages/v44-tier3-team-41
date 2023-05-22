<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
<!-- [![LinkedIn][linkedin-shield]][linkedin-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/alexh205/Ninja_e-commerce">
    <img width="120" alt="NinjaVillage_logo" src="https://user-images.githubusercontent.com/95322089/218267851-e7b9af4e-5686-4a1a-8965-fa5685a78459.png">
  </a>

  <h3 align="center">NinjaVillage (Amazon Clone)</h3>

  <p align="center">
    This is an e-commerce application inspired by the popular e-commerce site <a href="amazon.com">Amazon</a>. Users can search, sell, purchase, and review products.
    <br />
    <br />
    <br />
    <a href="https://ninjavillage-pkud.onrender.com/">Live Site</a>
    ·
    <a href="https://dbdiagram.io/d/63c77e35296d97641d7a5d69">DB Schema</a>
    <!-- ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With:
* [![Javascript][Javascript]][Javascript-url]
* [![HTML5][HTML5]][HTML-url]
* [![CSS][CSS]][CSS-url]
* [![Tailwind CSS][Tailwind CSS]][Tailwind CSS-url]
* [![React][React.js]][React-url]
* [![React Router][React Router]][React Router-url]
* [![Redux][Redux]][Redux-url]
* [![Node.js][Node.js]][Node-url]
* [![NPM][NPM]][NPM-url]
* [![Yarn Badge][Yarn]][Yarn-url]
* [![Python][Python]][Python-url]
* [![Flask][Flask]][Flask-url]
* [![Sequelize][Sequelize]][Sequelize-url]
* [![.ENV][.ENV]][.ENV-url]
* [![Git][Git]][Git-url]
* [![Github][Github]][Github-url]
* [![Amazon AWS][Amazon AWS]][Amazon AWS-url]
* [![Render][Render]][Render-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Images

### Splash Page

![main_page](https://user-images.githubusercontent.com/95322089/218265391-576f139a-c7da-4caf-a9bf-8cd54015202a.png)


### Product Page

![product_page](https://user-images.githubusercontent.com/95322089/218265408-7843256c-d458-467d-aadb-24014994c752.png)

### Cart Page

![cart](https://user-images.githubusercontent.com/95322089/218265454-c1477f79-c629-426c-a0e3-1d98e25811c9.png)

### Wish List Page

![Screenshot 2023-03-16 at 12 32 55 PM](https://user-images.githubusercontent.com/95322089/225688979-3abb4210-c3eb-4231-9dbe-a1dbb9c71489.jpg)

### Past Orders Page
![orders](https://user-images.githubusercontent.com/95322089/218265429-23612be5-67b2-4775-94fa-ee7043488c1d.png)


<!-- GETTING STARTED -->
## Getting Started

1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. open up a secondary terminal, and navigate to the 'frontend' directory.
8. Install dependencies npm install within the 'frontend' directory.
9. Run 'npm start'

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->

<!-- ### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Features

- [x] Sign Up, Login users to the 'NinjaVillage' app
- [x] Edit user profiles
- [x] Demo login user
- [x] Create, edit, and delete Products
- [x] Search for products by name, description, and category
- [x] filter product listings by categories (Books, Groceries, Clothing, Shoes & Jewelry,...)
- [x] View user product stores
- [x] Add products to shopping cart
- [x] checkout carts
- [x] View past orders
- [x] Add secondary images to products
- [x] Implement wish lists
- [x] Implement AWS to handle media storage


## Goals

- [ ] Add images to reviews


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
<!-- ## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->


<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

<!-- * [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search) -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/alexh205/Ninja_e-commerce/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/alexh205/Ninja_e-commerce/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[Git]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[Git-url]: https://git-scm.com/
[Github]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[Github-url]: https://github.com/
[Javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Javascript-url]: https://www.javascript.com/
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://html.com/
[CSS]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[NPM]: https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/
[SQLite]: https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white
[SQLite-url]: https://www.sqlite.org/index.html
[Flask]:https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/2.2.x/
[Python]:https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]:https://docs.python.org/3/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Yarn]: https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=for-the-badge
[Yarn-url]: https://yarnpkg.com/
[React Router]:https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=for-the-badge
[React Router-url]: https://reactrouter.com/en/main
[Sequelize]:https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=for-the-badge
[Sequelize-url]: https://sequelize.org/
[.ENV]: https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=for-the-badge
[.ENV-url]: https://github.com/motdotla/dotenv
[Render]:https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=000&style=for-the-badge
[Render-url]: https://render.com/
[Redux]:https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff&style=for-the-badge
[Redux-url]: https://redux.js.org/
[Tailwind CSS]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge
[Tailwind CSS-url]:https://tailwindcss.com/
[Amazon AWS]: https://img.shields.io/badge/Amazon%20AWS-232F3E?logo=amazonaws&logoColor=fff&style=for-the-badge
[Amazon AWS-URL]:https://aws.amazon.com/

