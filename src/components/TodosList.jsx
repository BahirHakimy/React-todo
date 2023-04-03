import TodoItem from '@/components/TodoItem.JSX';
import { useTodosContext } from '@/context/TodosContext.JSX';

const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};
export default TodosList;
