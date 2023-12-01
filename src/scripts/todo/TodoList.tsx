import { TodoItem } from '../../models/TodoItem';
import { For, onMount, type VoidComponent } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { TodoListItem } from './TodoListItem';

interface ITodoListProps {
}

export const TodoList: VoidComponent<ITodoListProps> = (props) => {
    const [list, setList] = createStore<TodoItem[]>([]);

    function removeItem(item: TodoItem) {
        setList(produce((list) => {
            list.splice(list.indexOf(item), 1);
        }));
    }

    function addItem(item: TodoItem) {
        setList(produce((list) => {
            list.push(item);
        }));
    }

    onMount(() => {
        setList([
            new TodoItem('Hej'),
            new TodoItem('Då')
        ]);
    });

    return (
        <>
            <For each={list}>{ (item) => 
                <TodoListItem item={item} onRemove={removeItem} />
            }</For>
        </>
    )
}