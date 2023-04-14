import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/footer.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
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
      <Footer/>
    </>
  );
}
