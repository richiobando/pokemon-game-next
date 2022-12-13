import './globals.css';
// const getStaticProps = async () =>{}
// const serverSideProps
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await import('../data/types.json');
  return (
    <html lang='en'>
      <head />
      <body>
        <header className='bg-blue-600 p-4'>HEADER</header>
        <article className='flex gap-4'>
          <aside className='min-w-[200px]'>
            <nav>
              {data.map((type) => (
                <p>{type}</p>
              ))}
            </nav>
          </aside>
          <main>{children}</main>
        </article>
      </body>
    </html>
  );
}
