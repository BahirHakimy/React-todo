import Header from '@/components/Header.JSX';
import TodosLogic from '@/components/TodosLogic.JSX';

const Home = () => (
  <div className="todos">
    <Header>
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </Header>
    <TodosLogic />
  </div>
);
export default Home;
