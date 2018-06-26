module.exports = [{
    header: `RS&I Website`,
    para: [
        `I was tasked with redesigning the front-facing website. Objectives were: improved maintainability, mobile responsiveness, and modernizing the look of the site while retaining it’s original theme and feel.`,
        `Because the previous site had been built by an inexperienced developer it was missing many best practices. Therefore, the front end was entirely rebuilt from scratch. New additions included BEM and functional programming.`,
        `Architecture`,
        `The folder naming convention was component and/or action completed. For example: insert/ribbon-banner/news/blog-post.asp refers to an ASP insertion of a thin blog-post component. Taking advantage of the import ability in SCSS, the naming convention was carried over to the styling sheets.`,
        `Images also shared a similar naming convention. This folder structure gave the developer a hierarchy to follow as well and partitioned data into small maintainable pieces.`,
        `Bootstrap and third-party JavaScript libraries were removed with the exception of jQuery.`,
        `CSS Styling`,
        `The next object was to create a styling structure that would allow for CSS styling that could be continuously updated without tying down global elements. This was done through the Block Element Modifier styling methodology a.k.a. BEM. This methodology allows for styling to only affect scored classes.`,
        `JQuery Rewrite`,
        `New JavaScript code was writing with cleaner, more maintainable, and functional. Removal of additional 3rd party libraries including jQuery UI and Timeline.js were replaced with custom solution.`,
        `HubSpot Integration`,
        `CSS and JS were transferred over to the HubSpot portal to match the theme of the website.`
    ],

    img: `images/rsi_hist.jpg`,
    pullImg: 'img-right',
    altText: `RS&I history page`,
    btnPara: `See Site`,
    internalLink: false,
    link: `http://www.rsiinc.com/home/index.asp`,
},
{
    header: `Zollinger Racing`,
    para: [`Zollinger Racing was in need of a redesign of their current website while maintain their current domain. The website was hosted on SquareSpace.com and had a dated theme.`,
    `In order to make changes without affecting the live site, I created a test site that would contain all the new changes. Changes in design were completed with SquareSpace Design tools, photoshop, and HTML, CSS, and jQuery. Once the new design had been created changes were applied to the live site when site traffic was slowest of the week.`,
    `After the initial roll out was completed, further changes to the design were made based on feedback from the client as well as analytic data received from SquareSpace analytics. Changes made included redesign of navigation menu and ecommerce navigation, and updates to the website copywrite.`],
    img: `images/zollinger_racing_products.jpg`,
    pullImg: 'img-left',
    altText: `Zollinger Racing home page screen`,
    btnPara: `See WebSite`,
    internalLink: false,
    link: `https://www.zollingerracingproducts.com/`
},
{
    header: `Portfolio React.js Site`,
    para: [`The purpose of this project was to make full use of all of my skills from content creation, markting, photography, web design, and web development. This project also gave me a place to showcase my body of work. The result was a cleanly designed, well functioning, extensible application that reflects my current skill level.`,
    `Rather than write a length passage about my process, I invite you to view my YouTube series “React Portfolio Journey.” This series covers every step of the process from conception, to wireframing, to fully functioning application.`],
    img: `images/portfolio_mockup.jpg`,
    pullImg: 'img-right',
    altText: `Idaho Central Credit Union site image`,
    btnPara: `See My Portfolio Series`,
    internalLink: false,
    link: `https://www.youtube.com/playlist?list=PLNglBCIijurlEj4mTvA9XU3k4FTKlDlD0`

}]