const menu = ['🍎','🍕','🍉','🍰','🍓','🌭','🥞'];

const index = menu.lastIndexOf('🍎');
console.log(index); // => 0
//However, it will take the whole array to find it. 
//This is because we are searching from RIGHT to LEFT.