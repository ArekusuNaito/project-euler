If you want to change how a font looks, you wanna change the actual font.
The needed property is called: `font-family`.
You can pass a list of different font family names, prioritized in written order. This is called `font-degrade` (I would assume font-degradation). The order determines the priority of the font that will be used.

```css
p
{
    font-family: Helvetica, monospace;
}
```

You can go to [Google fonts](https://fonts.google.com/specimen/New+Tegomin) and see a collection of free to use fonts that you can use for your projects. There are 2 ways of importing fonts.

## Way 1

Using a `<link>` tag. 

```html
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap" rel="stylesheet"> 
</head>
```
And then you will add the CSS of the font family's name:

```css
p
{
    font-family: 'New Tegomin';
}
```

Note: It is recommended to use quotation marks for fonts that you are importing, however it is 100% neccesary to add quotation marks when the font family's name is made of 2 or more words

## Way 2 - Using a direct CSS Import

```css
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
p
{
    font-family: 'New Tegomin';
}
```

