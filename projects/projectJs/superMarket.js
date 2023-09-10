function createItem (name, cost, inventory, saleGroup, saleSubGroup) {
    return {
        name: name,
        cost: cost,
        inventory: inventory,
        saleGroup: saleGroup,
        saleSubGroup: saleSubGroup,
        getItem() {
            return name + ' ' + cost + ' ' + inventory + ' ' + saleGroup + ' ' + saleSubGroup;
        },
    };
}

let item1 = createItem('Canned Carrots', 0.50, 10, 'cannedgood', )
let item2 = createItem('Canned Green beans', 0.50, 10, 'cannedgood')
let item3 = createItem('Canned Corn', 0.50, 10, 'cannedgood')
let item4 = createItem('Mac & Cheese', 1.00, 10, 'dryfood')
let item5 = createItem('Rice', 2.99, 10, 'dryfood')
let item6 = createItem('Tortilla', 3.59, 10, 'bread')
let item7 = createItem('Wheat Bread', 3.79, 10, 'bread')
let item8 = createItem('Everything Bagels', 4.59, 10, 'bread')
let item9 = createItem('Chocolate Ice Cream', 4.49, 10, 'frozen', 'icecream')
let item10 = createItem('Vanilla Ice Cream', 4.49, 10, 'frozen', 'icecream')
let item11 = createItem('Pepperoni Pizza', 7.99, 10, 'frozen', 'pizza')
console.log(item11.getItem())


let cart = []
function addItem(obj) {
    cart.push(obj)
};

function removeItem() {
    cart.pop()
};

addItem(item1)
console.log(cart)