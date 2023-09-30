"# discovering-taillwindcss" 
> Les titres contenant ? ont besoin d'exmple concret plus precis et claire

* En tailwind, les valeurs en chiffres sont dans la plupart des cas, voici les $n-default:
  * $px = 1px
  * ``0.5, 1, 1.5, 2, 2.5, 3, 3.5, de 4 à 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96`` avec 1unité = 0.25rem = 4px
  * pourcentage:
    * resultat: paramètre
    * 8.33333%: ``1/12``
    * 16.6666%: ``1/6``
    * 20%: ``1/5``
    * 25%: ``1/4``
    * 33.3333%: ``1/3``
    * 40%: ``2/5``
    * 41.6666%: ``5/12``
    * 50%: ``1/2``
    * 58.3333%: ``7/12``
    * 60%: ``3/5``
    * 66.6666%: ``2/3``
    * 75%: ``3/4``
    * 80%: ``4/5``
    * 83.3333%: ``5/6``
    * 91.6666%: ``11/12``
    * 100%: ``full``
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
- ``columns-$count``
- $count: soit [] est une intervvalle: [1-12], auto, 3xs, 2xs, xs, sm, md, lg, xl, [2-7]xl
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
- ``break-[after|before|inside]-$value``
- **$value pour after, before, inside**: auto, avoid, avoid-page, 
- **$value seulement pour after et before**: all, page, left, right, column
- **$value seulement pour inside**: avoid-column

## Box decoration break
> Control le comportement de la boîte lorsque'elle est fragmentée
- ``box-decoration-$value``
- $value: 
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

## Floats
> Utilitaires pour contrôler l'habillage du contenu autour d'un élément.
``float-[right|left|none]``

## clear
> Utilitaires pour contrôler l'habillage du contenu autour d'un élément
``clear[left|right|both|none]``

## ?Isolation
> Permet de controler l'isoaltion d'un élément par rapport à d'autres éléments, notamment en ce qui concerne la création d'un contexte d'empilement séparé pour cet élément.
- isolate: `isolation: isolate;`
- isolation-auto: `isolation: auto;`

## Object fit
> est utilisée pour définir comment une image ou un autre élément rempli d'une boîte (comme un conteneur ``<div>`` ou un élément ``<img>``) doit être ajusté en fonction de la taille de la boîte.

classes | propriétés
---|---
__object-contain__ | ``object-fit: contain;`` 
__object-cover__ | ``object-fit: cover;`` 
__object-fill__ | ``object-fit: fill;`` 
__object-none__ | ``object-fit: none;`` 
__object-scale-down__ | ``object-fit: scale-down;`` 

illustration de la difference entre les props
```html
<div class="flex">
    <div class="bg-indigo-300" style="width: 200px">
        <img class="object-cover h-48" src="../assets/img/i (1).jpg">
    </div>
    <div class="bg-indigo-300" style="width: 200px">
        <img class="object-contain h-48" src="../assets/img/i (1).jpg">
    </div>
    <div class="bg-indigo-300" style="width: 200px">
        <img class="object-fill h-48" src="../assets/img/i (1).jpg">
    </div>
    <div class="bg-indigo-300" style="width: 200px">
        <img class="object-scale-down h-48" src="../assets/img/i (1).jpg">
    </div>
    <div class="bg-indigo-300" style="width: 200px">
        <img class="object-none h-48" src="../assets/img/i (1).jpg">
    </div>
</div>
```

## Object position
> La propriété CSS object-position permet de définir la position d'un élément rempli (comme une image) à l'intérieur de son conteneur.

classes | propriétés
---|---
__object-bottom__ | ``object-position: bottom;``
__object-center__ | ``object-position: center;``
__object-left__ | ``object-position: left;``
__object-left-bottom__ | ``object-position: left bottom;``
__object-left-top__ | ``object-position: left top;``
__object-right__ | ``object-position: right;``
__object-right-bottom__ | ``object-position: right bottom;``
__object-right-top__ | ``object-position: right top;``
__object-top__ | ``object-position: top;``

Voir les differences entre les valeurs de la propriétés object-position, on hover, par rapport à l'état par défaut 
```html
<style>
img {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    /* Définissez la transition pour la propriété object-position */
}
</style>
<div class="flex justify-between">
    <img class="object-none hover:object-left-top bg-yellow-300 w-24 h-24" src="../assets/img/i (1).jpg">
    <img class="object-none hover:object-top bg-yellow-300 w-24 h-24" src="../assets/img/i (1).jpg">
    <img class="object-none hover:object-right-top bg-yellow-300 w-24 h-24" src="../assets/img/i (1).jpg">
    <img class="object-none hover:object-left bg-yellow-300 w-24 h-24" src="../assets/img/i (1).jpg">
    <img class="object-none hover:object-center bg-yellow-300 w-24 h-24" src="../assets/img/i (1).jpg">
    <img class="object-none hover:object-right bg-yellow-300 w-24 h-24" src="../assets/img/i (1).jpg">
    <img class="object-none hover:object-left-bottom bg-yellow-300 w-24 h-24" src="../assets/img/i (1).jpg">
    <img class="object-none hover:object-bottom bg-yellow-300 w-24 h-24" src="../assets/img/i (1).jpg">
    <img class="object-none hover:object-right-bottom bg-yellow-300 w-24 h-24" src="../assets/img/i (1).jpg">
</div>
```

## overflow
> Utilitaires permettant de contrôler la manière dont un élément gère le contenu trop volumineux pour le conteneur.

Classes | props
---|---
__overflow-auto__ | ``overflow: auto;``
__overflow-hidden__ | ``overflow: hidden;``
__overflow-clip__ | ``overflow: clip;``
__overflow-visible__ | ``overflow: visible;``
__overflow-scroll__ | ``overflow: scroll;``
__overflow-x-auto__ | ``overflow-x: auto;``
__overflow-y-auto__ | ``overflow-y: auto;``
__overflow-x-hidden__ | ``overflow-x: hidden;``
__overflow-y-hidden__ | ``overflow-y: hidden;``
__overflow-x-clip__ | ``overflow-x: clip;``
__overflow-y-clip__ | ``overflow-y: clip;``
__overflow-x-visible__ | ``overflow-x: visible;``
__overflow-y-visible__ | ``overflow-y: visible;``
__overflow-x-scroll__ | ``overflow-x: scroll;``
__overflow-y-scroll__ | ``overflow-y: scroll;``

## overscroll behavior
> Utilitaires permettant de contrôler le comportement du navigateur lorsqu'il atteint la limite d'une zone de défilement.

Classes  | props | commentaire
---|---|---
__overscroll-auto__ | ``overscroll-behavior: auto;`` | ---
__overscroll-contain__ | ``overscroll-behavior: contain;`` | l'effet de dépassement de défilement ne se propagera pas à l'extérieur si l'user fait defiler au-delà des limites de l'element
__overscroll-none__ | ``overscroll-behavior: none;`` | desactive completement l'effet de defilement depassant la  limite du l'element
__overscroll-y-auto__ | ``overscroll-behavior-y: auto;``
__overscroll-y-contain__ | ``overscroll-behavior-y: contain;``
__overscroll-y-none__ | ``overscroll-behavior-y: none;``
__overscroll-x-auto__ | ``overscroll-behavior-x: auto;``
__overscroll-x-contain__ | ``overscroll-behavior-x: contain;``
__overscroll-x-none__ | ``overscroll-behavior-x: none;``


## Positionnement
__static__ | ``position: static;``
__fixed__ | ``position: fixed;``
__absolute__ | ``position: absolute;``
__relative__ | ``position: relative;``
__sticky__ | ``position: sticky;``

## Placement de l'element positionnée
* ``[top|right|bottom|left|inset|start|end]-$size``
* $size:
  * auto: auto
  * 0: 0px
  * px: 1px;
  * size en nombre: 1unité = 0.25rem = 4px
  * 1/2 et 2/4: 50%;
  * 1/3: 33.33333%; 
  * 2/3: 66.66666%;
  * 1/4: 25%;
  * 3/4: 75%; 
  * full: 100%;
quelque classe et props speciaux où 1 unité = 0.25rem = 4px:
class | properties
---|---
``inset-x-{value}`` | left et right à {value} unité
``inset-y-{value}`` | top et bottom à {value} unité

## Visibility
class | props | explication
---|---|---
__visible__ | ``visibility: visible`` | Par défaut, rend l'élément visible.
__invisible__ | ``visibility: hidden`` | Rend l'élément invisible tout en laissant un espace vide pour lui dans la mise en page.
__collapse__ | ``visibility: collape`` | Principalement utilisé pour les tableaux, rend la cellule ou la colonne invisible tout en maintenant la structure du tableau.

## z-index
### cheat sheet de base
* ``z-$index``
* ``-z-$index`` pour les valeurs negatives
* $index:  0-50, auto
  
### personnalisé z-index
```js tailwind.config.js
module.exports = {
  theme: {
    extend: {
      zIndex: {
        'zato': '100',
      }
    }
  }
}
```
pour l'utiliser: z-zato
```html
<style>
    .teste {
        border: black solid 2px;
        border-radius: 100%;
        background-color: aquamarine;
        position: relative;
    }
</style>
<div class="flex">
    <div class="teste hover:z-zato z-40 p-5">05</div>
    <div class="teste hover:z-zato z-30 p-5 right-7">04</div>
    <div class="teste hover:z-zato z-20 p-5 right-14">03</div>
    <div class="teste hover:z-zato z-10 p-5 right-24">02</div>
    <div class="teste hover:z-zato p-5 right-28">01</div>
</div>
```

# Flexbox and Grid
## Flex basis
> Définit la taille initiale de l'élément flexible, mais cette taille peut changer en fonction de l'espace disponible et des règles de flexbox.
* basis-$value oùu $value:
  * 0 à 12, 
  * 14, 16, 20, 24, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96(1 = 0.25rem = 4px)
  * auto
  * px(1px)
  * 0.5, 1.5, 2.5, 3.5
  * 1/2, 1/3, 2/3, 1/4, 3/4, ...: valeur en pourcentage pareil que precedent
  * full: 100%

## flex direction
``flex-[row|row-reverse|col|col-reverse]``

## flex wrap
flex-[wrap|wrap-reverse|nowrap]

## flex

class | props | details
---|---|---
flex-1 | flex: 1 1 0%; | flex-grow à 1 et flex-shrink à 1 donc rempli l'espace disponible. La valeur 0% spécifie que la taille de base de l'élément est de 0, ce qui signifie qu'il peut rétrécir pour s'ajuster à l'espace disponible.
flex-auto | flex: 1 1 auto; | meme que flex-1 sauf que, grace à auto, retrecissement si necessaire tout en conservant sa taille de base 
flex-initial | flex: 0 1 auto; | flex-grow: 0; mais possibilité de retrecir, taille debase auto, ce qui signifie qu'il conservera sa taille initiale. Valeur par défaut des enfants de .display flex;
flex-none | flex: none; | desactive la flexibilité de l'element; ne peut pas s'étendre ni rétrécir en fonction de l'espace dispo, mais sa conserve taille de initiale

### Comprehension de flex
```html
<div class="parent">
  <div class="child">Child</div>
  <div class="child">Child</div>
  <div class="child">Child</div>
</div>
<style>
  .parent {
    display: flex;
  }
</style>
```
avec parent en ``display: flex``, les enfants(``.child``) auront par défaut ``flex: 0 1 auto``:
```css
.child {
  flex: 0 1 auto;/** flex-grow flex-shrink flex-basis */
}
```
qui est equivaut à
```css
.child {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
}
```

### Compréhension de flex-grow
* Définit la capacité d'un élément flexible à grandir.
* La valeur par défaut est 0.
* Si tous les éléments ont une valeur de 1, ils se répartissent l'espace disponible de manière égale.
* Si un élément a une valeur de 2 et les autres ont 1, alors l'élément avec une valeur de 2 occupe deux fois plus d'espace que les autres.

### Compréhension de flex-shrink
* Définit la capacité d'un élément flexible à rétrécir.
* La valeur par défaut est 1, ce qui signifie qu'il peut rétrécir si nécessaire.
* Si un élément a une valeur de 2 en flex-shrink, il aura une priorité plus élevée pour rétrécir par rapport à ceux ayant une valeur de 1 en flex-shrink

## flex grow
__grow__: ``flex-grow: 1;``
__grow-0__: ``flex-grow: 0;``

## flex shrink
* shrink
* shrink-0
```html
<div class="flex bg-orange-500 w-full">
    <div class="w-full bg-slate-200 shrink-0"><!--gardera la taille à width 100% et ne peut pas retrecir-->
        01
    </div>
    <div class="w-full bg-slate-300">
        02
    </div>
    <div class="w-full bg-slate-400">
        03
    </div>
</div>
```
## Ordre: controller l'ordre de flex et grid item
* ``ordre-$value``: 
* $value:
  * de 1 à 12.
  * first: -9999
  * last: 9999
  * none: 0

## Colonne de modèle de grille(grid)
* `grid-cols-$nbr-column`: ``grid-template-columns: repeat($nbr-column, minmax(0, 1fr));``
* $nbr-column:
  * de 1 à 12
  * none: ``grid-template-columns: none;``
```html
<div class="3bg-orange-500 grid grid-cols-2">
    <div class="bg-slate-200 h-20">
        01
    </div>
    <div class="bg-slate-300 h-20">
        02
    </div>
    <div class="bg-slate-400 h-20">
        03
    </div>
</div>
```

## Grid Column Start / End
> control de la colonne de grille
* ``col-$value``
* ``$value``
  * auto: ``grid-column: auto``
  * span-$n: où $n de 1 à 12 `grid-column: span $n / span $n;`
  * span-full: ``grid-column: 1 / -1;``
  * start-$n: où $n de 1 à 13: 	``grid-column-start: $n;``
  * start-auto: `	grid-column-start: auto;`
  * end-$n: où $n de 1 à 13: `grid-column-end: $n;`
  * end-auto: `	grid-column-end: auto;`
* ``span`` : Spécifie combien de colonnes un élément doit occuper dans la grille.
* ``start`` : Spécifie le point de départ (la colonne de départ) d'un élément dans la grille.
* ``end`` : Spécifie le point de fin (la colonne de fin) d'un élément dans la grille.

## Grid template row: nombre de ligne
> definir le nombre de ligne dans une grille
* `` grid-rows-$n`` où $n égale au nombre de ligne, utilisé avec `grid-flow-col` et ``row``

## Grid Row Start / End
> control de ligne de grille
* ``row-$value``
  * $value:
    * span-$n: où $n de 1 à 6: `grid-row: span $n / span $n;`
    * span-full: `grid-row: 1 / -1;`
    * start-$n:  où $n de 1 à 7, ``grid-row-end: auto;``
    * start-auto: ``grid-row-start: auto;``
    * end-$n:  où $n de 1 à 7, `grid-row-end: $n;`
    * end-auto: ``grid-row-end: auto;``

* ``span`` : Spécifie combien de lignes un élément doit occuper dans la grille.
* ``start`` : Spécifie le point de départ (la ligne de départ) d'un élément dans la grille.
* ``end`` : Spécifie le point de fin (la ligne de fin) d'un élément dans la grille.

## 	grid-auto-flow 
> Control du comportement de placement des éléments lorsque la taille de la grille est insuffisante pour les accueillir tous.
* ``grid-flow-[row|col|dense|row-dense|col-dense]``
* ``$value``
  * ``row``: Les éléments supplémentaires sont positionnés automatiquement sur de nouvelles lignes.
  * ``col``: Les éléments supplémentaires sont positionnés automatiquement sur de nouvelles colonnes.
  * ``dense``: Les éléments supplémentaires sont positionnés automatiquement en essayant de remplir les espaces vides, en réorganisant les éléments pour s'adapter aux trous.
  * ``row-dense``: Les éléments supplémentaires sont positionnés automatiquement sur de nouvelles lignes, en essayant de remplir les espaces vides.
  * ``col-dense``: Les éléments supplémentaires sont positionnés automatiquement sur de nouvelles colonnes, en essayant de remplir les espaces vides.


## Grid Auto Columns
...
## Grid Auto Rows
...
## Gap
...
## Justify content
...
## Justify Items
...
## Justify self
...
## Align Content
...
## Align Items
...
## Align Self
...
## Place Content
...
## Place Items
...
## Place Self

# SPACING
## Padding, margin
``[p|m]-$value``: p pour padding et m pour margin
* $value:
  * 0: 0px
  * x-0: [padding|margin] left et right à 0px
  * y-0: [padding|margin] top et bottom à 0px
  * [s|e|t|r|b|l]-0: respectivement ``[padding|margin]-line-[start|end]: 0px;``,  ``[padding|margin]-[top|right|bottom|left]: 0px;``
  * px: ``[padding|margin]: 1px;``
  * [x|y|s|e|t|r|b|l]-px: de 1px
  * [x|y|s|e|t|r|b|l]-$n et $n seulement: où $n = 0.5, 1, 1.5, 2, 2.5, 3, 3.5, de 4 à 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

## Space Between
> permet de controller les espaces entre les elements enfant
* ``space-$value``
* $value:
  * [x|y]-$n
  * [x|y]-reverse

# SIZING
## width, Height
[w|h]-$value
* $value:
  * $n-default
  * screen: 100vw
  * min: min-content
  * max: max-content
  * fit: fit-content

## Min Width, Min Height
* min-[w|h]-$value
* $value:
  * 0: 0px
  * full: 100%
  * min: min-content
  * max: max-content
  * fit: fit-content

## Max Width,  Max Height
### Max width et max height
Classe | Propriétés
---|---
max-[w|h]-full | max-width: 100%;
max-[w|h]-min | max-width: min-content;
max-[w|h]-max | max-width: max-content;
max-[w|h]-fit | max-width: fit-content;

### Max width seulement
Classe | Propriétés
---|---
max-w-xs | max-width: 20rem; /* 320px */
max-w-0 | max-width: 0rem; /* 0px */
max-w-none | max-width: none;
max-w-sm | max-width: 24rem; /* 384px */
max-w-md | max-width: 28rem; /* 448px */
max-w-lg | max-width: 32rem; /* 512px */
max-w-xl | max-width: 36rem; /* 576px */
max-w-2xl | max-width: 42rem; /* 672px */
max-w-3xl | max-width: 48rem; /* 768px */
max-w-4xl | max-width: 56rem; /* 896px */
max-w-5xl | max-width: 64rem; /* 1024px */
max-w-6xl | max-width: 72rem; /* 1152px */
max-w-7xl | max-width: 80rem; /* 1280px */
max-w-prose | max-width: 65ch;
max-w-screen-sm | max-width: 640px;
max-w-screen-md | max-width: 768px;
max-w-screen-lg | max-width: 1024px;
max-w-screen-xl | max-width: 1280px;
max-w-screen-2xl | max-width: 1536px;

### Max height seulement
Classe | Propriétés
max-h-px | max-height: 1px;
max-h-screen | max-height: 100vh;
max-h-$n-default sans pourcentage | max-height: $n-default*0.25rem;