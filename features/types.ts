import axios from 'axios';

interface Todo {
    id: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
    const todo = response.data as Todo;

    const { id } = todo;

    console.log(`The id is: ${id}`);
});
