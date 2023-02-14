import { LoadingPage } from "@/components/pages/loading/loadingPage.stories";
import { Auth } from "aws-amplify";
import { awsconfig } from "aws-exports";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  Auth.configure(awsconfig)

  return <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <Suspense fallback={<LoadingPage />}>
        <Component {...pageProps} />
      </Suspense>
    </RecoilRoot>
  </QueryClientProvider>
}
