// Next
import type { AppProps } from "next/app";
// SCSS
import "../scss/globals.scss";
// Components
import SharedLayout from "@/components/common/SharedLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
  );
}
