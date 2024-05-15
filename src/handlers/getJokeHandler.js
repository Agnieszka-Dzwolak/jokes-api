import dom from '../dom.js';
import getJoke from '../../apis/getJoke.js';
import createJoke from '../components/createJoke.js';

const getJokeHandler = async () => {
    //fetch data
    const jokeData = await getJoke();

    //render data
    const jokeDom = createJoke(jokeData);
    dom.root.innerHTML = '';

    //append dom elements
    dom.root.append(jokeDom);
};

export default getJokeHandler;
