class Stack {
    constructor() {
        this.items = []
    }
    push(items) {
        return this.items.push(items)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    size() {
        return this.items.length
    }
}
/* ------------------------------- Ejercicio 1 ------------------------------ */
/*let stack = new Stack();
stack.push("Manzana")
stack.push("Cebolla")
stack.push("Apio")
stack.push("Naranja")
stack.push("Papaya")
stack.push("Sandía")
stack.push("Melón")
function ret_elementos(stack, n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(stack.pop())
    }
    return res
}*/

/* ------------------------------- Ejercicio 2 ------------------------------ */
/*let stackNumeros = new Stack();
stackNumeros.push(3)
stackNumeros.push(2)
stackNumeros.push(3)
stackNumeros.push(4)
stackNumeros.push(6)
stackNumeros.push(8)
stackNumeros.push(1)
stackNumeros.push(2)
stackNumeros.push(5)
stackNumeros.push(5)
function remplazar(stack, vN, nN) { //vN-> Viejo número // nN-> Nuevo número
    if (stack.peek() != vN) {
        while (stack.peek() != vN) {
            stack.pop()
        }
        stack.pop()
        stack.push(nN)
    } else {
        stack.pop()
        stack.push(nN)
    }
    return stack
}*/

/* ------------------------------- Ejercicio 3 ------------------------------ */
/*let stack = new Stack();

stack.push("Pueblo Origen")
stack.push("Pueblo 1")
stack.push("Pueblo 2")
stack.push("Destino")

function camino_recorrido(stack) {
    let copia = Object.assign(new Stack, stack);
    let contador = stack.size()
    let vacio = [];
    for (let i = 0; i < contador; i++) {
        vacio[i] = copia.pop()
    }
    return console.log("la ida fue de: " + vacio.reverse() + " y el regreso fue de: " + vacio.reverse());
} */


/* ------------------------------- Ejercicio 4 ------------------------------ */
let stack = new Stack();

stack.push(3)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(6) // <- Este elemento está en la posición 4
stack.push(8)
stack.push(1)
stack.push(2)
stack.push(5)
stack.push(5)


function retirar_contenedor_id(stack, pos) {
    let auxiliar = new Stack();
    let longitud = stack.size()
    for (let i = 0; i < longitud - pos; i++) {
        if (i !== pos + 1) {
            auxiliar.push(stack.pop())
        } else {
            stack.pop()
        }
    }
    let contador = auxiliar.size();
    for (let n = 0; n < contador; n++) {
        stack.push(auxiliar.pop())
    }
    return stack
}

// Entrada: retirar_contenedor_pos(stack,4)
// Salida: [3,2,3,4,8,1,2,5,5]*/

/* ------------------------------- Ejercicio 5 ------------------------------ */
/*let stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4) // <- Este elemento tiene el id 4
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
stack.push(9)

function retirar_contenedor_id(stack, id) {
    let auxiliar = new Stack();
    while (stack.peek() != id) {
        auxiliar.push(stack.pop())
    }
    stack.pop()
    let contador = auxiliar.size();
    for (let i = 0; i < contador; i++) {
        stack.push(auxiliar.pop())
    }
    return stack
}*/