import React, {useState} from 'react';
import './App.css';

const naviItems = [
  {
    id: 1,
    itemName: 'Timer',
    logo: null,
    isActive: false
  },
  {
    id: 2,
    itemName: 'Calendar',
    logo: null,
    isActive: false
  }
];

function App() {
  const [navItems, setNavItems] = useState(naviItems);
  const [projects, setProjects] = useState([]);
  const [taskBarValue, setTaskBarValue] = useState('');

  const navItemSelect = (id) => {
    const items = navItems.map(navI => navI.id === id ? {...navI, isActive: true} : {...navI, isActive: false});
    setNavItems(items);
  }

  const taskChangeHandler = (e) => {
    setTaskBarValue(e.target.value);
  }

  const addTaskHandler = () => {
    if(taskBarValue) {
      const id = projects.length+1; // we can use uuid package here
      const currentProject = {id, projectName: taskBarValue, timer: '00:00:00'};
      const currentProjects = [...projects];
      currentProjects.push(currentProject);
      setProjects(currentProjects);
      setTaskBarValue('');
    }
  }

  const renderProjects = () => {
    return <ul>
      {projects.map(pItem => {
        return <li key={pItem.id}>
          {pItem.projectName}
        </li>
      })}
    </ul>;
  }


  return (
    <div className="container">
      <div className="sidebar">
        {navItems.map(item => {
          return <div className={`item ${item.isActive ? 'active': ''}`} key={item.id} onClick={(e) => navItemSelect(item.id)}>
            <span>{item.itemName}</span>
          </div>
        })}
      </div>
      <div className="main">
        <div className="toolbar-container">
          <div>
            <input type="text" value={taskBarValue} placeholder="What are you working on?" className="taskbox" onChange={taskChangeHandler}/>
          <button className="add-btn" onClick={addTaskHandler}>Add Project</button>
          </div>
          <div className="timer-container">
            <div className="timer">00:00:00</div>
            <button className="add-btn">START</button>
          </div>
          
        </div>
        <div className="tasks">
          {projects.length > 0 ? renderProjects(): <span>No recent tasks to show.</span>} 
         
        </div>
      </div>
    </div>
  );
}

export default App;
