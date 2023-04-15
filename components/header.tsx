export function Header() {
  const items = [
    {name: "Home", href: "/"},
    {name: "Languages", href: "/languages"}//,
    //{name: "Framework", href: "/frameworks"}
  ];
  return (
    <>
      <header class="bg-green-900 relative top-0">
        <nav class="flex sticky">
          <ul class="flex justify-center items-center gap-4 mx-auto my-6 flex-wrap min-w-full">
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
