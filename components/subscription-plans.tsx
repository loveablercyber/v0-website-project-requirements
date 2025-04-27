"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SubscriptionPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Basic",
      description: "Essential features for casual users",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: ["Access to basic content", "Follow up to 5 creators", "Standard video quality", "Email support"],
      notIncluded: ["Exclusive premium content", "Live streaming access", "Priority support", "Ad-free experience"],
    },
    {
      name: "Premium",
      description: "Perfect for dedicated fans",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        "Access to all basic features",
        "Follow unlimited creators",
        "HD video quality",
        "Live streaming access",
        "Ad-free experience",
        "Priority support",
      ],
      notIncluded: ["Exclusive VIP content", "Early access to new content"],
      popular: true,
    },
    {
      name: "VIP",
      description: "Ultimate experience for super fans",
      monthlyPrice: 39.99,
      yearlyPrice: 399.99,
      features: [
        "Access to all premium features",
        "Exclusive VIP content",
        "4K video quality",
        "Early access to new content",
        "Direct messaging with creators",
        "24/7 priority support",
      ],
      notIncluded: [],
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Subscription Plans</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Choose the perfect plan to access exclusive content from your favorite creators
          </p>

          <div className="flex items-center space-x-2 mt-6">
            <Label htmlFor="billing-cycle">Monthly</Label>
            <Switch
              id="billing-cycle"
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            />
            <Label htmlFor="billing-cycle">
              Yearly <span className="text-sm text-primary">(Save 16%)</span>
            </Label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${plan.popular ? "border-primary shadow-lg relative" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-muted-foreground ml-1">/{billingCycle === "monthly" ? "month" : "year"}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="text-sm font-semibold mt-4">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Subscribe Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
