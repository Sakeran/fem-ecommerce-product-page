# fem-ecommerce-product-page

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Notes

(January 11th, 2022)

This was my first FrontEndMentor project in a few weeks, after having spent some time focusing on personal projects. My tools here weren't anything out of the ordinary for me: Vite, SolidJS, and TailwindCSS. When I started the project, I'd intended to enchance a few parts of the design with some animation library, but ultimately stuck with simple CSS-based transitions after running out of time.

I didn't particularly struggle with this challenge, but I did make two interesting observations:

First, the "quantity selector" component was interesting, mostly because I hadn't needed to implement one from scratch before. I ended up referencing the web component implemented by Shopify's [Dawn theme](https://github.com/Shopify/dawn). My solution was slightly different from theirs, but it taught me a bit about how to approach building custom input elements.

Second, my implementation of the page header was not as clean as it could have been. This mostly came down to the fact that I'm overly-reliant on padding to create whitespace, which in this case made centering the header contents more difficult than it should have been. It's good to respect intrinsic dimensions, but I'm maybe too strict about not specifying parent heights. In cases like this, a min-height would have simplified matters greatly.

[A live version of this project can be found here.](https://nutty-shape.surge.sh/)