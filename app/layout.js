import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import Head from "next/head"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filea",
  description: "All Files Sharing System or Web App Selvin PaulRaj K",
  
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
    <Head>
          <title>Filea</title>
          <meta name="description" content="Drag and drop your file directly on our cloud and share it with your friends secuarely with password and send it on email" />

          <meta property="og:url" content="https://genxrverse.vercel.app" />
          <meta property="og:title" content="GenXRverse" />
          <meta property="og:description" content=" Bridging the gap between imagination and reality with cutting-edge Web, Mobile, XR & Generative AI solutions " />
          <meta property="og:image" content="https://genxrverse.vercel.app/images/logo/logo-dark.svg" />  {/* Replace with your image URL */}

          <meta name="linkedin:site" content="www.linkedin.com/in/selvinpaulraj" />
          <meta name="linkedin:title" content="Selvin PaulRaj K" />
          <meta name="linkedin:description" content="Pre-Final Year B.Tech IT Student | Enthusiastic Full Stack Developer | Using Web, Mobile, and XR Technologies to Create Innovative Solutions | Open to Exciting Opportunities" />
          <meta name="linkedin:image" content="https://media.licdn.com/dms/image/D4E35AQF7-Q611U4Fhg/profile-framedphoto-shrink_200_200/0/1714408120595?e=1717074000&v=beta&t=6kV9vhKxyOUVnj3q-iPiip0iTxGqdrkx1GWC67pjykg" />  {/* Replace with your image URL */}
        </Head>

      <body className={inter.className}>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
