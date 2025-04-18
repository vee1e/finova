import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 bg-zinc-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Be among the first to experience the future of travel planning in India
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>
            
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2">
                City
              </label>
              <Input
                id="city"
                type="text"
                placeholder="Mumbai"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                I mostly travel for:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="business" 
                    name="travel_purpose" 
                    className="h-4 w-4 text-emerald-600 border-zinc-700 focus:ring-emerald-500 bg-zinc-800"
                  />
                  <label htmlFor="business" className="ml-2 text-sm">Business</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="leisure" 
                    name="travel_purpose" 
                    className="h-4 w-4 text-emerald-600 border-zinc-700 focus:ring-emerald-500 bg-zinc-800"
                  />
                  <label htmlFor="leisure" className="ml-2 text-sm">Leisure</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="education" 
                    name="travel_purpose" 
                    className="h-4 w-4 text-emerald-600 border-zinc-700 focus:ring-emerald-500 bg-zinc-800"
                  />
                  <label htmlFor="education" className="ml-2 text-sm">Education</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="other" 
                    name="travel_purpose" 
                    className="h-4 w-4 text-emerald-600 border-zinc-700 focus:ring-emerald-500 bg-zinc-800"
                  />
                  <label htmlFor="other" className="ml-2 text-sm">Other</label>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6">
              Join Waitlist
            </Button>
            
            <p className="text-xs text-zinc-400 text-center">
              By joining, you agree to receive updates about YatraGPT. 
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
} 