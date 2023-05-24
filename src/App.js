import Jobs from './Jobs';
import TaskContextProvider from './TaskContextProvider';
function App() {
  return (
    <>
      <TaskContextProvider>
      <Jobs/>
      </TaskContextProvider>
    </>
  );
}

export default App;
