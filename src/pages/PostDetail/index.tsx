import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { httpGitHub } from '../../utils/http'
import { InfoCard } from './components/Info'

import ReactMarkdown from 'react-markdown'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import remarkGfm from 'remark-gfm'
import * as S from './styles'

interface PostDetail {
  title: string
  body: string
  number: string
  created_at: string
  linkPost: string
  comments: number
  userName: string
}

export function PostDetail() {
  const { id } = useParams()

  const [data, setData] = useState({} as PostDetail)

  async function loadDataPosts(id: string) {
    const response = await httpGitHub.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
    )
    setData({
      userName: response.data.user.login,
      ...response.data,
    })
  }
  useEffect(() => {
    if (id) {
      loadDataPosts(id)
    }
  }, [id])

  return (
    <>
      <S.PostDetailContainer>
        <InfoCard
          comments={data.comments}
          createdAt={formatDistanceToNow(
            new Date(data.created_at ?? new Date()),
            {
              addSuffix: true,
              locale: ptBR,
            },
          )}
          linkPost={data.linkPost}
          title={data.title}
          userName={data.userName}
        />
        <section>
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {data.body}
          </ReactMarkdown>
        </section>
      </S.PostDetailContainer>
    </>
  )
}
