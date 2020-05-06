// Global variables
var listNodes = [];
var listArrows = [];
const list = document.getElementById('container-list-animated');

// Class Node
class Node {
    constructor(index, value) {
        this.index = index;
        this.value = value;
    }
}

// Class User Interface
class UI {
    // Insert Nodes
    InsertNode(node) {
        if(evaluateErrorInsertNode(node)) return;
        if(evaluateInsertNode(node)) return;
        const figure = createFigure(node);
        const arrow = createArrow();
        addFigureDOM(figure, arrow, node);
        // clearInsertData(node);
    }
    
    // Add Nodes
    AddNode(node) {
        if(evaluateErrorAddNode(node)) return;
        const figure = createFigure(node);
        const arrow = createArrow();
        addFigureDOM(figure, arrow, node);
        // clearAddData(node);
    }
    
    // Remove Node
    RemoveNode(index) {
        if (evaluateErrorRemoveNode(index)) return;
        removeFigureDOM(index);
        // clearRemoveNode(index);
        hideInputs();
    }

    // Remove multiple Nodes
    RemoveMultipleNodes(value) {
        if(evaluateErrorRemoveMultipleFiguresDOM(value)) return;
        if(searchValueInLinkedList(value)) return;
        removeMultipleFiguresDOM(value);
        hideInputs();
    }
}

// Creation figure with the number
function createFigure(node) {
    const element = document.createElement('div');
    element.id = 'circle';
    
    const number = document.createElement('p');
    number.id = 'number';
    number.innerHTML = node.value;

    element.appendChild(number);
    return element;
}

// Creation arrow
function createArrow() {
    const container = document.createElement('div');
    container.id = 'arrow';

    const arrow = document.createElement('i');
    arrow.className = 'fas fa-long-arrow-alt-right';

    container.appendChild(arrow);
    return container;
}

// Add DOM the figures and arrows
async function addFigureDOM(figure, arrow, node) {
    if(listNodes.length == node.index) {
        list.appendChild(figure);
        list.appendChild(arrow);
        listNodes.push(figure);
        listArrows.push(arrow);
    } else {
        list.insertBefore(arrow, listNodes[node.index]);
        list.insertBefore(figure, arrow);
        listNodes.splice(node.index, 0, figure);
        listArrows.splice(node.index, 0, arrow);
    }
    await animateNode(figure);
    await animateArrow(arrow);
}

// Remove of DOM the figures and arrows 
async function removeFigureDOM(index) {
    await animateNode(listNodes[index]);
    await animateArrow(listArrows[index]);
    
    list.removeChild(listNodes[index]);
    list.removeChild(listArrows[index]);
    listNodes.splice(index, 1);
    listArrows.splice(index, 1);
}

// Remove multiple nodes
async function removeMultipleFiguresDOM(value) {
    for (let index = 0; index < listNodes.length; index++) {
        if (listNodes[index].firstChild.innerHTML !== value) continue;
        await animateNode(listNodes[index]);
        await animateArrow(listArrows[index]);
        list.removeChild(listNodes[index]);
        list.removeChild(listArrows[index]);
        listNodes.splice(index, 1);
        listArrows.splice(index, 1);
    }
}

// Give animation node
function animateNode(node) {
    return new Promise(function(resolve) {
        node.style.animation = 'circle 1s linear';
        setTimeout(() => {
            node.style.animation = null;
            resolve();
        }, 1000);
    });
}

// Give animation arrow
function animateArrow(arrow) {
    return new Promise(function(resolve) {
        arrow.style.animation = 'showArrow 2s linear';
        arrow.style.animation = 'moveArrow 1s linear';
        setTimeout(() => {
            arrow.style.animation = null;
            resolve();
        }, 1000);
    });
}

// Reset Input Datas 
function clearInsertData(node) {
    if(node.index != '' && node.value != '') {
        document.getElementById('insert-node-index').value = "";
        document.getElementById('insert-node-value').value = "";
    }
}

// Reset Add Datas
function clearAddData(node) {
    if(node.value != '') document.getElementById('add-node-value').value = "";
}

// Reset Remove Node
function clearRemoveNode(index) {
    if(index != '') document.getElementById('remove-node-index').value = '';
}

// // Give animation node
// function animateNode2(node) {
//     return new Promise(function(resolve) {
//         node.style.animation = 'circle 1s linear';
//         setTimeout(() => {
//             node.style.animation = null;
//             resolve();
//         }, 1000);
//     });
// }

// // Give animation arrow
// function animateArrow2(arrow) {
//     return new Promise(function(resolve) {
//         arrow.style.animation = 'showArrow 2s linear';
//         arrow.style.animation = 'moveArrow 1s linear';
//         setTimeout(() => {
//             arrow.style.animation = null;
//             resolve();
//         }, 1000);
//     });
// }

// Modify parameters of animation
// function modificateParameters(nodeSpeed, pointerSpeed, removeNodeSpeed) {
    //     modificateNodeSpeed(nodeSpeed);
//     modificatePointerSpeed(pointerSpeed);
//     modificateRemoveNodeSpeed(removeNodeSpeed);
// }

// Modify node's animation
// function modificateNodeSpeed(nodeSpeed) {
//     console.log('value ' + nodeSpeed.value);
//     const circle = document.getElementById('circle');
//     circle.style = 'animation-duration: 0.' + nodeSpeed.value + 's';
// }

// Modify pointer's animation
// function modificatePointerSpeed(pointerSpeed) {}

// Modify node's animation to eliminate
// function modificateRemoveNodeSpeed(removeNodeSpeed) {}

// Animation for button saved
// function animationSaved() {
//     const save = document.getElementById('save');
//     save.innerHTML = succes + ' Saved';
// }