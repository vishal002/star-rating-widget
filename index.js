const container = document.getElementById('star-rating-container');
const ul = document.createElement('ul');

const starObj = {
    selected: 0,
    total: 5
}

const createLiNode = (id, type) => {
    const li = document.createElement('li');
    li.innerHTML= type;
    li.id=id;
    return li;
}

const createUlNode = (obj) => {
    for(let i=0; i< obj.total; i++) {
        ul.appendChild(createLiNode(i, '&#9734;'));
    }
}

createUlNode(starObj);
container.appendChild(ul);

ul.addEventListener('click', (event) => {
    let targetId = Number(event.target.id);
    for(let i = 0; i< starObj.total; i++) {
        let li = document.getElementById(i);
        if(i < targetId || i == targetId) {
            li.innerHTML = '&#9733;';
        } else {
            li.innerHTML = '&#9734;';
        }
    }
})