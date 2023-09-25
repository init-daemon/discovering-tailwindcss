"# discovering-taillwindcss" 
# Editor setup
## Pour VSCode: 
Taillwind CSS IntelliSense
# Installation et configuration de taillwindcss
```console
npm install -D tailwindcss
npx tailwindcss init
```

```js tailwindcss.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```css src/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```console
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

```html src/index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descovering taillwindcss</title>
    <link rel="stylesheet" href="../dist/output.css">
</head>
<body>
    <button
        class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
        Save changes
    </button>
</body>
</html>
```

# Layout
## Aspect ratio
Utilitaires pour contrôler le rapport hauteur/largeur d'un élément.
- `aspect-auto`
- `aspect-square`: 1 / 1;
- `aspect-video` 16 / 9;
- ``aspect-[4/3]``: definir une valeur arbitraire
- `md:aspect-square`: si media querie medium(à partir de l'écran d'une largeur minimale de 768 pixels et au-delà.), appliquer la ration
```html
<video src="../assets/Jack'Dad - Get Out.mp4" class="w-full aspect-video md:aspect-square"></video>
```
### Customisation du thème
```js tailwind.config.js
module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
    }
  }
```
# Container
## utilisation et avec responsive
- ``.container``: width à 100%,
- ``sm:container``: on applique width à 100% si width <= 640px(max-width)
- ``md:container``: on applique width à 100% si width <= 768px(max-width)
- ``lg:container``: on applique width à 100% si width <= 1024px(max-width)
- ``xl:container``: on applique width à 100% si width <= 1280px(max-width)
- ``2xl:container``: on applique width à 100% si width <= 1536px(max-width)
  
## Definir des propriétés par défaut
```js tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",//horizongal pading

},
  },
}
```
ou definition de padding par défaut pour chque breackpoint
```js tailwind.config.js
module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
};
```

##  Les colonnes
- ``columns-{count}``
- count: soit [] est une intervvalle: [1-12], auto, 3xs, 2xs, xs, sm, md, lg, xl, [2-7]xl
```html
    <div class="columns-3">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
    </div>
```
remplit chaque colonne jusqu'à atteindre 3 colonne, le html precedent donne:
```txt
1 3 5
2 4
```

## Break-[after|before|inside]
### resumé
- ``break-[after|before|inside]-{value}``
- **value pour after, before, inside**: auto, avoid, avoid-page, 
- **value seulement pour after et before**: all, page, left, right, column
- **value seulement pour inside**: avoid-column

## Box decoration break
> Control le comportement de la boîte lorsque'elle est fragmentée
- ``box-decoration-{value}``
- value: 
  - slice: la boite peut etre fragmentée entre les sauts de page ou de colonnes(bordure, arrière-plans peut etre coupé) 
  - clone: la boite doit être clonée lorsqu'elle est fragmentée(contraire au slice)
```html
<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Hello<br />
  World
</span>
<span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Hello<br />
  World
</span>
```

## Box sizing
> Permet de definir coment la largeur et la hateur d'un élément HTML sont calculées, notamment en ce qui concerne les marges, les bordures et le rembourrage (padding).
- ``box-border``: 
  - css: ``box-sizing: border-box;``
  - largeur et hauteur incluent: contenu, padding, bordure
- ``box-content`` (par défaut)
  - css: ``box-sizing: content-box;``
  - largeur et hauteur seront calculé uniquement à partir du contenu sans inclure la bordure, le padding ou les marges
```html
<style>
.avec-content-box {
    border: 2px solid red;
    padding: 20px;
    width: 200px;
    height: 100px;
    background-color: lightblue;
}

.avec-border-box {
    border: 2px solid green;
    padding: 20px;
    width: 200px;
    height: 100px;
    background-color: lightcoral;
}
</style>
<!--....-->
<div class="my-4">
    <div class="avec-content-box box-content">
        <p>content box</p>
    </div>
</div>
<div class="my-4">
    <div class="avec-border-box box-border">
        <p>border box</p>
    </div>
</div>
```

## Display
classes | propriétés
---|---
__block__ | ``display: block;``
__inline-block__ | ``display: inline-block;``
__inline__ | ``display: inline;``
__flex__ | ``display: flex;``
__inline-flex__ | ``display: inline-flex;``
__table__ | ``display: table;``
__inline-table__ | ``display: inline-table;``
__table-caption__ | ``display: table-caption;``
__table-cell__ | ``display: table-cell;``
__table-column__ | ``display: table-column;``
__table-column-group__ | ``display: table-column-group;``
__table-footer-group__ | ``display: table-footer-group;``
__table-header-group__ | ``display: table-header-group;``
__table-row-group__ | ``display: table-row-group;``
__table-row__ | ``display: table-row;``
__flow-root__ | ``display: flow-root;``
__grid__ | ``display: grid;``
__inline-grid__ | ``display: inline-grid;``
__contents__ | ``display: contents;``
__list-item__ | ``display: list-item;``
__hidden__ | ``display: none;``