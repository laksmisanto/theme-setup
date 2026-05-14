import "./globals.css";

import ThemeProvider from "@/components/theme/theme-provider";
// import ThemeScript from "@/components/theme/theme-script";

export const metadata = {
  title: "News Website",
  description: "Professional news platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <ThemeScript /> */}

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
