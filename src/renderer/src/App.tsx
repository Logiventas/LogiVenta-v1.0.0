  import Principal from "./client/pages/inicioConfiguracion/Principal"
  import config from "/config"

function App(): JSX.Element {
  console.log(config)
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="">
        {(config.server==false&&config.client==false)?<Principal/>:''}
    </div>
  )
}

export default App
