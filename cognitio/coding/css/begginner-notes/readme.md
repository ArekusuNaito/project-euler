Remember, `CSS` stands for Cascading Style Sheets. This means that if you apply styles to an element
they will be applied to their children as well.
For example, if you apply a style to the body, everything inside will "inherit" like a cascade its styles.

```css
    body
    {
        background-color: black;
        color: green;
        font-family: monospace;
    }
```

```html
<body>
    <h1>Hello world!<h1>
</body>

```

On a side note, the styling has priorities, the more specific you are, the more the priority it has. You can have a 0 priority by not adding any styles and they will inherit from a parent element, then a `class` and finally an `id`. This is:

```css
.fooClass
{
    /* This is second in priority */
}

#fooID
{
    /* this is a more important priority */
}
```

However if an element has multiple classes, the priority order is given by the order it was written on the CSS styling. For example:

```css
.pinkText
{
    color: pink;
}

.greenText
{
    color: green;
}
```
```html
<h1 class="pinkText greenText">HellO World</h1>
```

This text would be green, as its the last written style on the CSS section.

Here's another thing I didn't know. `Inline styles` are even more specific and they have a higher priority, even more than IDs.

```html
<h1 style="color: white">Hello World</h1>
```

Finally there's another way to make things become more specific or more "important".
This has the higher priority, even more than inline-styles:

```css

.fooClass
{
    color: red !important!;
}

```