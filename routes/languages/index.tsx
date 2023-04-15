import { Head } from "$fresh/runtime.ts";
import { Header } from "../../components/header.tsx"
import { Footer } from "../../components/footer.tsx"

export default function Languages() {
  return (
    <>
      <body class="bg-green-100">
        <Head>
          <title>Languages</title>
        </Head>
        <Header />
        <div class="p-4 mx-auto w-full h-full">
          <p class="my-6">
            All the languages i work with
          </p>
        </div>
        <Footer />
      </body>
    </>
  );
}
