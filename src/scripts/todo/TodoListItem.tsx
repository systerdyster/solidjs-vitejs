import { TodoItem } from '__models/TodoItem';
import type { VoidComponent } from 'solid-js';

interface ITodoListItemProps {
    item: TodoItem;

    onRemove: (item: TodoItem) => void;
}

export const TodoListItem: VoidComponent<ITodoListItemProps> = (props) => {

    return (
        <div>{props.item.text} 
            <button onClick={() => props.onRemove(props.item)} class='border-2 border-gray-800'>Ta bort</button>
        </div>
    )
}