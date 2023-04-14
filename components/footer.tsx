export function Footer() {
  return (
    <>
      <footer class="absolute grid grid-cols-2 bottom-4 left-4 gap-4">
        <a href="https://fresh.deno.dev" class="">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg" 
            alt="Made with Fresh" 
          />
        </a>
        <a href="https://github.com/ValeMelis/fresh-list" class="col-span-1">
          <img 
            width="37"
            height="37"
            src="github-mark.svg"/>
        </a>
      </footer>
    </>
  );
}
