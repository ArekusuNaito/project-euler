In this lesson we learn about a similar property to flexbox, which is to stretch or to automatically fit as needed.
This value is applied to the template-rows/columns properties.

For example:
  - `grid-template-rows: repeat(auto-fit, 100px)`
    - They way I read this is: "Repeat as much rows as you can that will be 100px"

We also learn about another function called minmax. This one is simple to remember as the name does what it means, it gets 2 values, the minimum value and the maximum value.

For example:
  - `grid-template-columns: repeat(3, minmax(50px,150px))`
  - The way I read this is:
    - Create 3 columns let them be:
    - Between 50 pixels and 150 pixeles wide/width/x axis.