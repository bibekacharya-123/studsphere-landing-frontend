"use client"
import { Navbar } from "@/components/jobs/navbar";
import { AuthProvider } from "@/components/auth/auth-provider";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
  );
}
