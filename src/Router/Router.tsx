import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '@/App.tsx'
import Editor from '@/Editor/Editor.tsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/editor" element={<Editor />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
