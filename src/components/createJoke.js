const createJoke = (jokeData) => {
    //container
    const container = document.createElement('div');
    container.id = 'joke-container';
    container.classList.add('joke');

    //category
    const category = document.createElement('h2');
    category.id = 'category-id';
    category.classList.add('category');
    category.innerText = jokeData.category;

    //type
    const type = document.createElement('p');
    type.id = 'type-id';
    type.classList.add('type');
    type.innerText = jokeData.type;

    container.append(category, type);

    //check the type (twopart or single)
    if (jokeData.type === 'twopart') {
        //setup
        const setup = document.createElement('p');
        setup.id = 'setup-id';
        setup.classList.add('setup');
        setup.innerText = jokeData.setup;

        //delivery
        const delivery = document.createElement('p');
        delivery.id = 'delivery-id';
        delivery.classList.add('delivery');
        delivery.innerText = jokeData.delivery;

        container.append(setup, delivery);
    } else if (jokeData.type === 'single') {
        //joke
        const joke = document.createElement('p');
        joke.id = 'joke-id';
        joke.classList.add('joke');
        joke.innerText = jokeData.joke;

        container.append(joke);
    }

    //flags
    const flags = document.createElement('ul');
    flags.id = 'flags-id';
    flags.classList.add('flags');

    // list-item (li)
    for (const flag in jokeData.flags) {
        const li = document.createElement('li');
        li.className = String(jokeData.flags[flag]);
        li.innerText = flag;

        flags.append(li);
    }

    // language
    const language = document.createElement('p');
    language.id = 'lang-id';
    language.classList.add('lang');
    language.innerText = `Language: ${jokeData.lang}`;

    //safe
    const safe = document.createElement('p');
    safe.id = 'safe-id';
    if (jokeData.safe === true) {
        safe.classList.add('safe');
        safe.innerText = 'Safe for Everyone';
    } else {
        safe.classList.add('unsafe');
        safe.innerText = 'Warning: Explicit Content';
    }

    container.append(flags, language, safe);

    return container;
};

export default createJoke;
