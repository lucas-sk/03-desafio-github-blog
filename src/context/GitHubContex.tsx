import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { httpGitHub } from '../utils/http'

export interface UserInfo {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

export interface Post {
  title: string
  body: string
  number: string
  created_at: string
}

interface GitHubContextType {
  userInfo?: UserInfo | null
  posts: Post[]
  loadPost: (search: string) => void
}

export const GitHubContext = createContext({} as GitHubContextType)

interface GitHubProviderProps {
  children: ReactNode
}

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [userInfo, setUserInfo] = useState({} as UserInfo)

  const [posts, setPosts] = useState<Post[]>([])

  console.log(posts)

  const loadDataUserInfo = useCallback(async () => {
    const response = await httpGitHub.get<UserInfo>('users/lucas-sk')
    setUserInfo(response.data)
  }, [])

  async function loadPost(search: string = '') {
    const response = await httpGitHub.get(`/search/issues`, {
      params: {
        q: search
          ? `${search}%20repo:rocketseat-education/reactjs-github-blog-challenge`
          : `repo:rocketseat-education/reactjs-github-blog-challenge`,
      },
    })
    const { items } = response.data

    setPosts(items)
  }

  useEffect(() => {
    loadDataUserInfo()
    loadPost()
  }, [loadDataUserInfo])

  return (
    <GitHubContext.Provider value={{ userInfo, posts, loadPost }}>
      {children}
    </GitHubContext.Provider>
  )
}
