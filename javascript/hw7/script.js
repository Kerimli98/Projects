function createList(arr) {
    const list = document.createElement('ul');
    document.body.appendChild(list);
    const script = document.querySelector("script");
    script.before(list);

    arr.map(elem => {
        let listItem = document.createElement('li');
        listItem.textContent = elem;
        list.appendChild(listItem);
    })
}

createList(['hello', 'world', 'baku', 'IBA TECH']);