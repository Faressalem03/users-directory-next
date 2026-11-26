import "./globals.css";
export const metadata = {
  title: "Users Directory",
  description: "Browse and search users from the DummyJSON API",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}