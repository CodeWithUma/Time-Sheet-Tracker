import './App.css';

const user = {
  name: 'Uma Prasad Das'
}

function App() {

  return (
    <>
      <div className='horizontal-heading'>
        <h1>TIME SHEET TRACKER</h1>
      </div>
      <div className='vertical-heading'>
        <ul>
          <li>{user.name}</li>
          <li>Change Password</li>
          <li>Add New Task</li>
          <li>View My Task</li>
        </ul>
      </div>
    </>
  )
}

export default App
