// /app/layout.js
import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "Shopping list built with React and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
