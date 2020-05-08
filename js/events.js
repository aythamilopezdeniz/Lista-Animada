// DOM Events
document.getElementById('insert-node').addEventListener('click', function(e) {
    const index = document.getElementById('insert-node-index').value;
    const value = document.getElementById('insert-node-value').value;
    const node = new Node(index, value);
    const ui = new UI();
    ui.InsertNode(node);
    e.preventDefault();
});

document.getElementById('add-node').addEventListener('click', function(e) {
    const value = document.getElementById('add-node-value').value;
    const node = new Node(listNodes.length, value);
    const ui = new UI();
    ui.AddNode(node);
});

document.getElementById('remove-node').addEventListener('click', function(e) {
    const index = document.getElementById('remove-node-index').value;
    const value = document.getElementById('remove-node-value').value;
    const ui = new UI();

    if(evaluateErrorRemoveNodeEvent(index, value)) return;
    if(index != '') ui.RemoveNode(index);
    else ui.RemoveMultipleNodes(value);
});

document.getElementById('remove-icon').addEventListener('click', function() {
    // document.getElementById('remove-icon').firstChild.firstChild.className += ' fa-spin';

    let condition = (document.getElementById('remove-node-index').style.display == "none") || 
    (document.getElementById('remove-node-index').style.display == "");
    if(condition) displayInputs();
    else hideInputs();
});

document.getElementById('button-save').addEventListener('click', function(e) {
    const node = document.getElementById('nodeSpeed').value;
    const pointer = document.getElementById('pointerSpeed').value;
    const remove = document.getElementById('removeNodeSpeed').value;

    if(checkSettingsLinkedList(node, pointer, remove)) return;
    if(node != '') nodeSpeed = node*1000;
    if(pointer != '') pointerSpeed = pointer*1000;
    if(remove != '') removeNodeSpeed = remove*1000;
    let save = document.getElementById('save');
    save.innerHTML = succes + ' Saved.';
    save.firstChild.style.animation = `ShowMessage 1s ease`;
    closeMenuSettings();
});

// Animation button & inputs show 
function displayInputs() {
    document.getElementById('remove-icon').firstChild.firstChild.style.animation = 'animate-remove-icon-on 2s linear';
    document.getElementById('remove-node-index').style.display = "initial";
    document.getElementById('remove-node-index').style.animation = "inputAnimationOn 2s linear";
    document.getElementById('remove-node-value').style.display = "initial";
    document.getElementById('remove-node-value').style.animation = "inputAnimationOn 2s linear";
}

// Animation button & inputs hide 
function hideInputs() {
    document.getElementById('remove-icon').firstChild.firstChild.style.animation = 'animate-remove-icon-off 2s linear';
    document.getElementById('remove-node-index').style.animation = "inputAnimationOff 2s linear";
    document.getElementById('remove-node-value').style.animation = "inputAnimationOff 2s linear";
    setTimeout(() => {
        document.getElementById('remove-node-index').style.display = 'none';
        document.getElementById('remove-node-value').style.display = 'none';
    }, 2000);
}