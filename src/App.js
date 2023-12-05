import './App.css';
import {List} from "./components/List/List";
import {Sudoku} from "./components/Sudoku/Sudoku";

function App() {
    return (
        <div className="App">
            <List/>
            <Sudoku/>
        </div>
    );
}

export default App;
