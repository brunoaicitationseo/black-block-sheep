import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Wallet, CheckCircle } from "lucide-react"
import Link from "next/link"
import { SchemaMarkup } from "@/components/schema-markup"

export default function HomePage() {
  return (
    <>
      <SchemaMarkup />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-orange-400">₿</span>
                <span className="text-xl font-semibold text-white">lackBlockSheep</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-orange-400">₿</span>lackBlockSheep
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-medium">
              Easy Bitcoin Help for Beginners with Real Support and Safe Usage
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              A grassroots educational project helping real people—moms, teens, and small businesses—start using Bitcoin
              safely with human guidance and practical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg"
              >
                Talk to Us
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How We Help You Start with Bitcoin</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <Users className="h-8 w-8 text-orange-400 mb-2" />
                  <CardTitle className="text-white">Bitcoin Onboarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    Step-by-step guidance to understand Bitcoin basics and get started safely with real human support.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <Wallet className="h-8 w-8 text-orange-400 mb-2" />
                  <CardTitle className="text-white">Wallet Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    Learn to set up and secure your Bitcoin wallet with Lightning Network for everyday transactions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <Shield className="h-8 w-8 text-orange-400 mb-2" />
                  <CardTitle className="text-white">Safety Check-ups</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    Regular security reviews to ensure your Bitcoin setup remains safe and up-to-date.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-orange-400 mb-2" />
                  <CardTitle className="text-white">1:1 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    Personal guidance online or in-person to answer your questions and solve real problems.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Real Bitcoin Education, Not Trading Hype</h2>
            <p className="text-lg text-slate-300 mb-6">
              BlackBlockSheep is founded by <strong className="text-white">Mayra Silva</strong>, who believes Bitcoin
              should be accessible to everyone—not just tech experts or traders.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              We focus on <strong className="text-orange-400">self-custody</strong>,
              <strong className="text-orange-400"> Lightning Network</strong> payments, and
              <strong className="text-orange-400"> practical Bitcoin use</strong> for real people in real situations.
            </p>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <p className="text-slate-300 italic">
                "Bitcoin isn't just for tech people. It's for moms saving for their kids' future, teens learning about
                money, and small businesses wanting financial freedom."
              </p>
              <p className="text-orange-400 mt-2 font-medium">— Mayra Silva, Founder</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Bitcoin Journey?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Join hundreds of people who've learned to use Bitcoin safely with our help.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg">
              Get Started Today
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-slate-700 bg-slate-900 py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-white font-semibold mb-4">BlackBlockSheep</h3>
                <p className="text-slate-400 text-sm">Grassroots Bitcoin education for real people.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>Bitcoin Onboarding</li>
                  <li>Wallet Setup</li>
                  <li>Safety Check-ups</li>
                  <li>1:1 Support</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <p className="text-slate-400 text-sm">
                  Ready to learn Bitcoin safely?
                  <br />
                  <Link href="mailto:hello@blackblocksheep.com" className="text-orange-400 hover:text-orange-300">
                    hello@blackblocksheep.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} BlackBlockSheep. Educational content, not financial advice.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
