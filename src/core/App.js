import React from 'react'
import { Provider } from 'react-redux'

import { Main } from 'screens'
import { Layout } from 'components'
import { store } from 'modules'

import { CustomThemeProvider, GlobalStyles } from 'ui/theme'

const App = () => (
  <Provider store={store}>
    <CustomThemeProvider>
      <GlobalStyles />
      <Layout>
        <Main />
      </Layout>
    </CustomThemeProvider>
  </Provider>
)

export { App }
