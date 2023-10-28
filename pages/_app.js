import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()
const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider >
  )
}
export default MyApp