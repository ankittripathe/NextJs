import "./globals.css";

export const metadata = {
  title: "Basic Nextjs",
  description: "nextjs project setup",
};

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
