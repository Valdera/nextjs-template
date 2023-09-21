import '@/styles/globals.scss';
import { NextPageWithLayout } from './page';
import { AppProps } from 'next/app';
import { heading, body } from '@/lib/fonts';
import { QueryClient, QueryClientProvider } from 'react-query';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${heading.variable} ${body.variable}`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </QueryClientProvider>
  );
};

export default App;
