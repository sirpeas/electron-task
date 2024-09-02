function App(): JSX.Element {
  return (
    <>
      <div className="creator">Hello, loading completed</div>
      <div className="text">
        Please build <span className="react">loading screen</span>
        &nbsp;and <span className="ts">file input</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div>
        <button type="button">
          Upload file
        </button>
      </div>
      <div>
        <img src="" alt="File preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      </div>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
      </div>
    </>
  )
}

export default App;
