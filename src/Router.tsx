import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Feed } from './pages/Feed'
import { PostDetail } from './pages/PostDetail'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Feed />} />
        <Route path="/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  )
}
