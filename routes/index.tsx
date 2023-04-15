import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/header.tsx"
import { Footer } from "../components/footer.tsx"

export default function Home() {
  return (
    <>
      <body class="bg-green-100">
        <Head>
          <title>Vale's web portfolio</title>
        </Head>
        <Header />
        <div class="p-4 mx-auto w-full my-auto h-full font-sans">
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
           />
          <p class="my-6">
            Welcome to my first try using `fresh` framework.
          </p>
          <p class="my-6">
            Here are some examples of uses:
          </p>
        </div>
        <Footer />
      </body>
    </>
  );
}
