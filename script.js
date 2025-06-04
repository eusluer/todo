let draggedItem = null;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    draggedItem = ev.target;
}

function drop(ev) {
    ev.preventDefault();
    if (draggedItem) {
        ev.currentTarget.appendChild(draggedItem);
        draggedItem = null;
    }
}
