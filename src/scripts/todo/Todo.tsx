import type { VoidComponent } from 'solid-js';
import { TodoList } from './TodoList';

interface ITodoProps {
}

export const Todo: VoidComponent<ITodoProps> = (props) => {
    
    return (
        <div class='text-2xl'>
            <TodoList />
        </div>
    )
}