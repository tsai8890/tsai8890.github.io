// Set up the modal

let modals = document.getElementsByClassName('modal');
let current_trigger = -1;

function get_handleOpenModal(i) {
    return (e) => {
        if (current_trigger !== -1) {
            return;
        }
        modals[i].style.display = 'block';
        document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
        current_trigger = i;
    };
}

function handleCloseModal(e) {
    if (current_trigger === -1) {
        return;
    }
    modals[current_trigger].style.display = null;
    document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
    current_trigger = -1;
}

for (let i = 0; i < modals.length; i += 1) {
    let trigger = modals[i].nextSibling.nextSibling;
    trigger.onclick = get_handleOpenModal(i);
    modals[i].onclick = handleCloseModal;
}