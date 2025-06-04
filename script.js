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

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const creator = document.getElementById('creator').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    const item = document.createElement('div');
    item.classList.add('item', priority);
    item.draggable = true;
    item.ondragstart = drag;

    const titleEl = document.createElement('div');
    titleEl.className = 'title';
    titleEl.textContent = title;

    const descEl = document.createElement('div');
    descEl.className = 'description';
    descEl.textContent = description;

    const metaEl = document.createElement('div');
    metaEl.className = 'meta';
    metaEl.textContent = `${creator} - ${date}`;

    item.appendChild(titleEl);
    item.appendChild(descEl);
    item.appendChild(metaEl);

    document.getElementById('todo').appendChild(item);

    e.target.reset();
});
