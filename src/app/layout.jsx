import "./globals.css";


export const metadata = {
  title: "IELTS Course by Munzeeren Shahid",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`mx-auto px-2 md:px-10`}
      >
        {children}
      </body>

    </html>
  );
}
