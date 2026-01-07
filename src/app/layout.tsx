export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //context set up draft mode with draftMode() func from next
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
