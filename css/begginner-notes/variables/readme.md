CSS has their own custom way of setting variables. This is the syntax:

```css
--<variableName>: <value>
--myGreenColor: green;

```
From what I understand you use a variable using a function called `var(--<yourVariableName>)`

The second paratemer for the `var()` function its called a fallback value. This is like a backup value in case something goes wrong with the variable.

```css
--redColor: red;
backgroundColor: var(--redColor,crimson); 
/* Notice how the Crimson value is the fallback value. */

```

It is a good practice to make use of the `:root` element to declare your variables there.

```css
:root
{
    --redColor: red;
}
```


You can "re-declare" variables inside other elements, this way the variables will be overriden like so:

```css
:root
{
    --redColor:red;
}

.fooClass
{
    --redColor: crimson;
}
```

