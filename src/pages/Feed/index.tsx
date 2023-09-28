import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useGitHub } from '../../hooks/useGithub'
import { formatText } from '../../utils/formatText'
import { Profile } from './components/Profile'
import * as S from './styles'

export function Feed() {
  const { posts, loadPost } = useGitHub()

  return (
    <>
      <S.FeedContainer>
        <Profile />
        <section>
          <S.HeaderSectionPost>
            <h3>Publicações</h3>
            <span>{posts.length} publicações</span>
          </S.HeaderSectionPost>
          <S.SearchInput onBlur={(e) => loadPost(e.target.value)} />

          <S.PostListContainer>
            {posts.map((post, index) => {
              return (
                <S.PostContainer to={`/${post.number}`} key={index}>
                  <div>
                    <h4>{post.title}</h4>
                    <span>
                      {formatDistanceToNow(new Date(post.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                  <p>{formatText(post.body, 27)}</p>
                </S.PostContainer>
              )
            })}
          </S.PostListContainer>
        </section>
      </S.FeedContainer>
    </>
  )
}
