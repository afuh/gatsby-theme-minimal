# Gatsby + Contentful Minimal Theme

![site](https://raw.githubusercontent.com/afuh/gatsby-theme-minimal/develop/theme/images/site.png)

## Demos
- Demo site: https://gatsby-theme-minimal.netlify.com
- I use an extended version of this theme in my [portfolio](https://axelfuhrmann.com)

## Features
- Contentful as CMS
- Progressive Web app
- Offline support
- RSS feed
- SEO friendly
- Tags

## Quick start
### Installation
You don't need to start a gatsby site, you only need to install a couple of dependencies and create a `gatsby-config.js`, that's it.

The [folder structure](https://github.com/afuh/gatsby-theme-minimal/tree/develop/site) of the demo site is just two files!

```
mkdir my-blog
cd my-blog
npm init
npm i gatsby react react-dom @afuh/gatsby-theme-minimal
```

#### Contentful Content Model
Automatically upload a `Post` content model into your Contentful space:
```
npm explore @afuh/gatsby-theme-minimal -- npm run setup
```
You will need to provide a Space ID and a Management token. You can find both keys here: **app.contentful.com → Space Settings → API keys.**

If instead you prefer to do it manually, open your [Contentful](https://app.contentful.com/) app and create a `Post` content model with the following fields:
- **Title**: `short text`.
- **Content**: `long text`, `markdown`.
- **Image**: `media`.
- **Tags**: `short text`, `list`.
- **Slug**: `short text`, `unique`.

It should look like this:
![contentful](https://raw.githubusercontent.com/afuh/gatsby-theme-minimal/develop/theme/images/content-model.png)

#### Write some posts
After you create the `Post` model remember to write some post entries. Let your creative side do the work ;).

### Gatsby
Create a `gatsby-config.js`, add the theme with your settings and you are good to go.
If you want to know more about the Contentful options check [gatsby-source-contentful](https://www.gatsbyjs.org/packages/gatsby-source-contentful)


```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "@afuh/gatsby-theme-minimal",
      options: {
        contentful: {
          spaceId: "your Contentful space id",
          accessToken: "your Contentful access token"
        },
        title: "Your title",
        description: "Your description",
        siteUrl: 'https://example.com', // no trailing slash
      }
    }
  ]
}
```
Start it up!
```
gatsby develop
```

### Override theme colors.
Gatsby themes provide something called [Component Shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/), which allows us to override or modify components in the theme.

In order to change the color scheme you have to shadowing `theme.js`. To do this, in your project create a `src/@afuh/gatsby-theme-minimal/theme.js` folder structure. If you want to know more about Component Shadowing, check [here](https://egghead.io/lessons/gatsby-use-component-shadowing-to-override-gatsby-theme-components).

You can override the following defaults:
```js
// theme.js
export default {
  primary: "#212129",
  secondary: "#FEFEFE",
  accent: "#78ff78",
  gray: "#9F9FA3",
  softGray: "#9F9FA31a",
  postWidth: 600
}
```

### Favicon and manifest cover
The theme is going to create a `theme-content` folder with an image inside, this image is used as a favicon and Manifest image. You can replace it and use your own image. Be sure to use the same file name: `icon-512x512.png`  
