import './App.css'
import dataMessage from './dataMessage'
import MessageHistory from './components/MessageHistory/MessageHistory'

function App() {
  return (
    <div className="clearfix container">
      <div className="people-list">People List</div>
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={dataMessage} />
        </div>
      </div>
    </div>
  )
}

export default App
