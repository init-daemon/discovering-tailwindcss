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
