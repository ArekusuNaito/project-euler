# Notes on Mixing and Decorator
However Decorators, are a new object that USE inside another object to extend functionality.
Mixins doesn't seem to get along much with typescript, as assigning on the fly things is more of an 
"interpreted" thing, they are calcualted during execution.
Hence, decorators seem to get more along with Typescript.
At least given these 2 examples in: `'mixin.ts' and 'decorator.ts'`

# Notes on Factory
- A pretty straight forward function-wrapper transformation from one type of data type to a curated data-structure needed and vastly used in the project.

# Notes on Adapter
- A very similar thing to an adapter, however this is not just for creation, but for use. An adapter is, in my experience what I've always called a Wrapper. Wrap third-party things to use on your own first-party application.