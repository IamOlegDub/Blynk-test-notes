import Sidebar from './components/Sidebar/Sidebar';
import Notes from './components/Notes/Notes';
import Comments from './components/Comments/Comments';
import style from './App.module.scss';

function App() {
    return (
        <div className={style.App}>
            <div className={style.col1}>
                <Sidebar />
            </div>
            <div className={style.col2}>
                <main>
                    <Notes />
                    <Comments />
                </main>
            </div>
        </div>
    );
}

export default App;
