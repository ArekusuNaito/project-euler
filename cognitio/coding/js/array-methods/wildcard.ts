const menu = ['🍎','🍕','🍉','🍰','🍓','🌭','🥞'];
const newMenu = menu.copyWithin(4,0,4);
console.log(menu);
console.log(newMenu);
console.log(menu==newMenu);