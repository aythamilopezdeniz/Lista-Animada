// Global variables
const message = document.getElementById('error');
const succes = '<i class="fas fa-check-square"></i>';
const alert = '<i class="fas fa-exclamation-triangle"></i>';

// Evaluate errors to insert datas of node
function evaluateErrorInsertNode(node) {
    if(node.index === '') message.innerHTML = alert + ` Index not indicated.`;
    else if(node.index != '' & node.value === '') message.innerHTML = alert + ` Data not indicated`;
    else {
        message.innerHTML = null;
        return false;
    }
    if(message.innerText.length > 0) message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Errors to insert nodes in the list
function evaluateInsertNode(node) {
    if(listNodes.length === 0 && node.index > 0 || node.index > listNodes.length) message.innerHTML = alert + ' Index is not correct.';
    else if(node.index < 0) message.innerHTML = alert + ' Index can\'t be negative.';
    else if(node.value < 0) message.innerHTML = alert + ' Value can\'t be negative.';
    else if(node.value > 99) message.innerHTML = alert + ' Value is too big.';
    else return false;
    if(message.innerText.length > 0) message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

//Evaluate errors to add datas of node
function evaluateErrorAddNode(node) {
    if(listNodes.length == 0) message.innerHTML = alert + ' Linked list is empty.';
    else if(node.value === '') message.innerHTML = alert + ' Data not indicated.';
    else {
        message.innerHTML = null;
        return false;
    }
    if(message.innerText.length > 0) message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Evaluate errors to remove nodes in the event
function evaluateErrorRemoveNodeEvent(index, value) {
    if(listNodes.length === 0) message.innerHTML = alert + ' Can\'t remove a node of one linked list empty.';
    else if(index === '' && value === '') message.innerHTML = alert + ' The data are incomplete.';
    // else if(index < 0) message.innerHTML = alert + ' The index isn\'t correct.';
    // else if(value < 0 || value > 99) message.innerHTML = alert + ' The value isn\'t correct.';
    else {
        message.innerHTML = null;
        return false;
    }
    if(message.innerText.length > 0) message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Evaluate errors to remove index node
function evaluateErrorRemoveNode(index) {
    if(index < 0 || index > (listNodes.length - 1)) message.innerHTML = alert + ' Can\'t remove a node that not exist.';
    else {
        message.innerHTML = null;
        return false;
    }
    if(message.innerText.length > 0) message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Evaluate errors to remove multiple nodes
function evaluateErrorRemoveMultipleFiguresDOM(value) {
    if(value < 0 || value > 99) message.innerHTML = alert + ' The value isn\'t correct.';
    else {
        message.innerHTML = null;
        return false;
    }
    if(message.innerText.length > 0) message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Search the value if it found in the linked list
function searchValueInLinkedList(value) {
    // var isContained = false;
    for (let index = 0; index <listNodes.length; index++) {
        // isContained = listNodes[index].firstChild.innerHTML === value;
        // if(isContained) {
        if(listNodes[index].firstChild.innerHTML === value) {
            message.innerHTML = null;
            return false;
        }
    }
    // if(!isContained) {
        message.innerHTML = alert + ' The value isn\'t found.';
        message.firstChild.style.animation = `ShowMessage 1s ease`;
    // }
    return true;
}