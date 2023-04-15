export function Footer() {
  return (
    <>
      <footer class="bg-green-900 flex justify-center items-center absolute bottom-0 mx-auto flex-wrap w-full h-16 gap-4">
        <a href="https://fresh.deno.dev" class="flex">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg" 
            alt="Made with Fresh" 
          />
        </a>
        <a href="https://github.com/ValeMelis/fresh-list" class="flex col-span-1">
          <img 
            width="37"
            height="37"
            src="github-mark.svg"/>
        </a>
      </footer>
    </>
  );
}
