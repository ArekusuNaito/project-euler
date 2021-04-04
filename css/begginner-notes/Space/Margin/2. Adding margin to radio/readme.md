There's a thing called `selectors` than are available for you to use. These are called `attribute selectors`.

For example, how can you control the behaviour of different types of `<Input>` like:
`<input type="radio">` or `<input type="checkbox">`

Here's the syntax on how to change those:

```css
[type="checkbox"]
{
    margin: 10px;
}

[type="radio"]
{
    margin: 5px;
}

```