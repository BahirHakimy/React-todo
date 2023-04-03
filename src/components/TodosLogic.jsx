import InputTodo from '@/components/InputTodo.JSX';
import TodosList from '@/components/TodosList.JSX';

import { TodosProvider } from '@/context/TodosContext.JSX';

const TodosLogic = () => (
  <TodosProvider>
    <InputTodo />
    <TodosList />
  </TodosProvider>
);
export default TodosLogic;
