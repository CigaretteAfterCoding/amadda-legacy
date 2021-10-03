import GlobalStyle from 'Styles/GlobalStyle.tsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Story />
        </QueryClientProvider>
      </MemoryRouter>
    </RecoilRoot>
  ),
];