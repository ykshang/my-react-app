import { StrictMode } from 'react' // 严格模式
import { createRoot } from 'react-dom/client' // 创建根节点
import './index.css' // 引入全局样式
import App from './App.jsx' // 引入根应用组件

//  创建根节点
const root = createRoot(document.getElementById('root'))
//  渲染应用
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
