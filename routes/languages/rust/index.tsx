import { Head } from "$fresh/runtime.ts";
import { Header } from "../../../components/header.tsx"
import { Footer } from "../../../components/footer.tsx"

export default function Rust() {
  return (
    <>
      <Head>
        <title>Rust Lang</title>
      </Head>
      <Header />
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          Rust is my favorite language
        </p>
      </div>
      <Footer />
    </>
  );
}
