// Global variables
const message = document.getElementById('error');
let save = document.getElementById('save');
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
    // if(message.innerText.length > 0)
    message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Errors to insert nodes in the list
function evaluateInsertNode(node) {
    if(listNodes.length === 0 && node.index > 0 || node.index > listNodes.length) message.innerHTML = alert + ' Index is not correct.';
    else if(node.index < 0) message.innerHTML = alert + ' Index can\'t be negative.';
    else if(node.value < 0) message.innerHTML = alert + ' Value can\'t be negative.';
    else if(node.value > 99) message.innerHTML = alert + ' Value is too big.';
    else return false;
    // if(message.innerText.length > 0) 
    message.firstChild.style.animation = `ShowMessage 1s ease`;
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
    // if(message.innerText.length > 0)
    message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Evaluate errors to remove nodes in the event
function evaluateErrorRemoveNodeEvent(index, value) {
    if(listNodes.length === 0) message.innerHTML = alert + ' Can\'t remove a node of one linked list empty.';
    else if(index === '' && value === '') message.innerHTML = alert + ' The data are incomplete.';
    else if(index != '' && value != '') message.innerHTML = alert + ' Write in one of the options.';
    else {
        message.innerHTML = null;
        return false;
    }
    message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Evaluate errors to remove index node
function evaluateErrorRemoveNode(index) {
    if(parseInt(index) < 0 || parseInt(index) > (listNodes.length - 1)) message.innerHTML = alert + ' Can\'t remove a node that not exist.';
    else {
        message.innerHTML = null;
        return false;
    }
    message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Evaluate errors to remove multiple nodes
function evaluateErrorRemoveMultipleFiguresDOM(value) {
    if(parseInt(value) < 0 || parseInt(value) > 99) message.innerHTML = alert + ' The value isn\'t correct.';
    else {
        message.innerHTML = null;
        return false;
    }
    message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Search the value if it found in the linked list
function searchValueInLinkedList(value) {
    for (let index = 0; index <listNodes.length; index++) {
        if(listNodes[index].firstChild.innerHTML === value) {
            message.innerHTML = null;
            return false;
        }
    }
    message.innerHTML = alert + ' The value isn\'t found.';
    message.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}

// Evaluate parameters of settings
function checkSettingsLinkedList(nodeSpeed, pointerNode, removeSpeed) {
    if(nodeSpeed === '' && pointerNode === '' && removeSpeed === '') save.innerHTML = alert + ' Incomplete data.';
    else if(nodeSpeed != '' && (parseInt(nodeSpeed) < 0 || isNaN(parseInt(nodeSpeed)))) save.innerHTML = alert + ' Node speed incorrect.';
    else if(pointerNode != '' && (parseInt(pointerNode) < 0 || isNaN(parseInt(pointerNode)))) save.innerHTML = alert + ' Pointer speed incorrect.';
    else if(removeSpeed != '' && (parseInt(removeSpeed) < 0 || isNaN(parseInt(removeSpeed)))) save.innerHTML = alert + ' Remove speed incorrect.';
    else {
        save.innerHTML = null;
        save.style.color = '#20a374';
        return false;
    }
    save.style.color = '#d31a2c';
    save.firstChild.style.animation = `ShowMessage 1s ease`;
    return true;
}