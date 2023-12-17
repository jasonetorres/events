import Footer from "@/components/ui/shared/Footer"
import Header from "@/components/ui/shared/Header"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <Header />
        <body>{children}</body>
        <Footer />
      </div>
    )
  }