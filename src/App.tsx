import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GitHubProvider } from './context/GitHubContex'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GitHubProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GitHubProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
