import "@/app/_styles/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s / Helpr",
    default: "Helpr",
  },
  description:
    "A crowdfunding platform that allows individuals and organizations to raise money for personal, charitable causes.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased min-h-screen`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
