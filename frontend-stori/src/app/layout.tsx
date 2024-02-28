"use client";
import { Inter } from "next/font/google";
// import "./globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const inter = Inter({ subsets: ["latin"] });

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL || "http://api:3000/graphql",
  cache: new InMemoryCache(),
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={inter.className}      
        style={{
          backgroundColor: "#eef6fb",
        }}
      >
        <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
