export function Header() {
  const items = [
    {name: "Home", href: "/"},
    {name: "Languages", href: "/languages"},
    {name: "Framework", href: "/frameworks"}
  ];
  return (
    <>
      <header class="">
        <nav class="flex">
          <ul class="flex justify-center items-center gap-4 mx-auto my-6 flex-wrap max-w-screen-md">
            {items.map((item) => (
              <li>
                <a href={item.href} class="p-2">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
