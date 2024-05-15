const getJoke = async () => {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch joke');
        }
    } catch (err) {
        console.error(err);
    }
};

export default getJoke;
