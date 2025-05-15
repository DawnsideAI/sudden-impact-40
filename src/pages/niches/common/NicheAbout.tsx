
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Calendar, Star, Shield, Zap, Phone, MessageSquare, Users } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const NicheAbout = () => {
  const { industry = 'healthcare' } = useParams();
  const validIndustry = ['healthcare', 'real-estate', 'restaurants', 'service-contractors'].includes(industry) 
    ? industry 
    : 'healthcare';
  
  const getIndustryTitle = () => {
    switch(validIndustry) {
      case 'healthcare':
        return 'Healthcare Practices';
      case 'real-estate':
        return 'Real Estate Agencies';
      case 'restaurants':
        return 'Restaurants & Hospitality';
      case 'service-contractors':
        return 'Service Contractors';
      default:
        return 'Businesses';
    }
  };

  const getDescription = () => {
    switch(validIndustry) {
      case 'healthcare':
        return 'healthcare practices optimize patient appointments and communications';
      case 'real-estate':
        return 'real estate professionals streamline client interactions and property showings';
      case 'restaurants':
        return 'restaurants and hospitality businesses enhance reservation systems and guest experiences';
      case 'service-contractors':
        return 'service contractors automate appointment booking and customer follow-ups';
      default:
        return 'businesses transform their customer communication';
    }
  };
  
  const industryTitle = getIndustryTitle();
  const description = getDescription();
  
  const timeline = [
    {
      year: "2019",
      title: "Our Founding",
      description: "Sudden Impact Agency was founded with a mission to transform business communications using AI technology."
    },
    {
      year: "2020",
      title: "First AI Voice Assistant",
      description: "Launched our first AI Voice Assistant solution, helping businesses automate simple phone interactions."
    },
    {
      year: "2021",
      title: "Industry Specialization",
      description: `Began developing industry-specific solutions for ${validIndustry.replace('-', ' ')} businesses.`
    },
    {
      year: "2022",
      title: "Enhanced AI Capabilities",
      description: "Integrated advanced natural language processing and custom workflow automation."
    },
    {
      year: "2023",
      title: "Enterprise Solution Launch",
      description: "Expanded offerings to serve large enterprise clients with complex communication needs."
    },
    {
      year: "2024",
      title: "Where We Are Today",
      description: `Helping thousands of ${industryTitle.toLowerCase()} across North America transform their customer communications and business operations.`
    }
  ];
  
  // New pricing data with richer feature details
  const pricingPlans = [
    {
      name: "Starter",
      price: 197,
      monthlyFee: 97,
      minutes: 300,
      popular: false,
      color: "from-blue-400 to-cyan-500",
      tagline: "Perfect for small businesses",
      description: `Great for small ${validIndustry.replace('-', ' ')} businesses just getting started with AI automation`,
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      features: [
        "300 AI Voice Minutes per month",
        "24/7 Automated answering",
        "Basic appointment scheduling",
        "Email & SMS notifications",
        "Calendar integrations",
        "Basic call analytics",
        "Email support response within 24hrs"
      ],
      limitations: [
        "Limited workflow customization",
        "No CRM integration",
        "Basic reporting only"
      ]
    },
    {
      name: "Professional",
      price: 197,
      monthlyFee: 297,
      minutes: 1000,
      popular: true,
      color: "from-purple-500 to-pink-500",
      tagline: "Most popular choice",
      description: `Ideal for growing ${validIndustry.replace('-', ' ')} businesses looking to scale operations`,
      icon: <Star className="h-6 w-6 text-purple-500" />,
      features: [
        "1,000 AI Voice Minutes per month",
        "Everything in Starter plus:",
        "Multiple AI Voice Agents",
        "Advanced call routing logic",
        "Custom workflow automation",
        "Premium voice selection",
        "CRM & software integrations",
        "Advanced analytics dashboard",
        "Priority support with 8hr response time"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      price: 497,
      monthlyFee: 597,
      minutes: 3000,
      popular: false,
      color: "from-indigo-600 to-blue-700",
      tagline: "For high-volume needs",
      description: `Comprehensive solution for established ${validIndustry.replace('-', ' ')} operations`,
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      features: [
        "3,000 AI Voice Minutes per month",
        "Everything in Professional plus:",
        "Unlimited AI Voice Agents",
        "White-labeled solution",
        "Custom integration development",
        "Enterprise-grade security",
        "Dedicated account manager",
        "Full API access",
        "Phone & email support with 4hr response",
        "Quarterly strategy sessions"
      ],
      limitations: []
    }
  ];

  // Calculate potential savings based on industry
  const getSavingsText = () => {
    switch(validIndustry) {
      case 'healthcare':
        return "Save up to 30 hours weekly on appointment scheduling and follow-ups";
      case 'real-estate':
        return "Convert 40% more leads with 24/7 property information and showing scheduling";
      case 'restaurants':
        return "Handle 200+ reservation calls daily without adding staff";
      case 'service-contractors':
        return "Book 35% more appointments with immediate customer response";
      default:
        return "Save time and increase revenue with AI automation";
    }
  };

  // Get industry-specific features
  const getIndustrySpecificFeatures = () => {
    switch(validIndustry) {
      case 'healthcare':
        return [
          {
            title: "HIPAA Compliance",
            description: "Fully compliant with healthcare privacy regulations",
            icon: <Shield className="h-6 w-6 text-green-500" />
          },
          {
            title: "Patient Intake",
            description: "Collect patient information before appointments",
            icon: <Users className="h-6 w-6 text-green-500" />
          }
        ];
      case 'real-estate':
        return [
          {
            title: "Property Details",
            description: "Instant information about listings to callers",
            icon: <MessageSquare className="h-6 w-6 text-blue-500" />
          },
          {
            title: "Showing Scheduler",
            description: "Automated property tour scheduling",
            icon: <Calendar className="h-6 w-6 text-blue-500" />
          }
        ];
      case 'restaurants':
        return [
          {
            title: "Reservation Management",
            description: "Handle multiple booking requests simultaneously",
            icon: <Calendar className="h-6 w-6 text-orange-500" />
          },
          {
            title: "Special Occasions",
            description: "Record and prepare for birthday/anniversary visits",
            icon: <Star className="h-6 w-6 text-orange-500" />
          }
        ];
      case 'service-contractors':
        return [
          {
            title: "Emergency Routing",
            description: "Prioritize urgent service calls automatically",
            icon: <Zap className="h-6 w-6 text-yellow-500" />
          },
          {
            title: "Technician Updates",
            description: "Keep customers informed about arrival times",
            icon: <MessageSquare className="h-6 w-6 text-yellow-500" />
          }
        ];
      default:
        return [];
    }
  };

  return (
    <NicheLayout 
      industry={validIndustry as any}
      title="About Sudden Impact Agency"
      subtitle={`We help ${description} through revolutionary AI voice technology.`}
    >
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <StyleProvider className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700">
                At Sudden Impact Agency, we're on a mission to revolutionize how {industryTitle.toLowerCase()} communicate with their customers and manage their operations. Our AI Voice Agents are designed to handle routine communications, freeing up your team to focus on what truly matters: delivering exceptional service.
              </p>
              <p className="text-gray-700">
                We understand the unique challenges faced by {industryTitle.toLowerCase()}, from managing appointments to following up with customers. Our solutions are tailored specifically for your industry, ensuring seamless integration with your existing workflows.
              </p>
              <h2 className="text-3xl font-bold mt-12 mb-6">Our Journey</h2>
            </StyleProvider>
            
            <div className="mt-10 space-y-12">
              {timeline.map((item, index) => (
                <StyleProvider key={index} delay={index * 0.1} className="flex">
                  <div className="w-24 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-aqua flex items-center justify-center text-white font-semibold">
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </StyleProvider>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="AI Voice Assistant Pricing Plans"
            subtitle={`Choose the right plan for your ${validIndustry.replace('-', ' ')} business`}
            centered={true}
          />
          
          {/* Savings Highlight */}
          <StyleProvider className="max-w-2xl mx-auto my-8 text-center">
            <div className="bg-gradient-to-r from-brand-aqua/10 to-brand-pink/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                {getSavingsText()}
              </h3>
              <p className="mt-2 text-gray-600">
                Our customers report an average ROI within the first 30 days
              </p>
            </div>
          </StyleProvider>

          {/* Pricing Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <StyleProvider
                key={index}
                delay={index * 0.15}
                className={`relative rounded-2xl border ${plan.popular ? 'border-brand-pink shadow-xl' : 'border-gray-200 shadow-md'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                    <div className={`bg-gradient-to-r ${plan.color} text-white text-center text-sm font-medium py-2 px-4 rounded-full w-3/4 mx-auto`}>
                      Most Popular Choice
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${plan.color} opacity-20 flex items-center justify-center`}>
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.tagline}</p>
                    </div>
                  </div>
                  
                  <div className="mt-5 space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">${plan.monthlyFee}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <div className="flex items-baseline gap-1 text-sm text-gray-500">
                      <span className="font-medium">${plan.price}</span>
                      <span>one-time setup</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{plan.minutes} AI minutes included</p>
                  </div>
                  
                  <p className="mt-4 text-sm text-gray-600">
                    {plan.description}
                  </p>
                  
                  <motion.button 
                    className={`w-full mt-6 mb-5 bg-gradient-to-r ${plan.color} text-white py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </motion.button>
                  
                  <div className="border-t border-gray-100 pt-5">
                    <h4 className="text-sm font-semibold mb-3">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-2 text-gray-500">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-500">
                              <span>• {limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </StyleProvider>
            ))}
          </div>
          
          {/* Industry-specific features */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-brand-pink via-brand-purple to-brand-aqua bg-clip-text text-transparent">
                Industry-Specific Features for {industryTitle}
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getIndustrySpecificFeatures().map((feature, index) => (
                <StyleProvider key={index} delay={index * 0.1}>
                  <Card className="border-t-4 border-t-brand-pink">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle>{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{feature.description}</p>
                    </CardContent>
                  </Card>
                </StyleProvider>
              ))}
            </div>
            
            {/* Feature comparison table */}
            <StyleProvider className="mt-16 overflow-hidden rounded-xl border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px] bg-gray-50">Feature</TableHead>
                    <TableHead className="text-center bg-blue-50">Starter</TableHead>
                    <TableHead className="text-center bg-purple-50">Professional</TableHead>
                    <TableHead className="text-center bg-indigo-50">Enterprise</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { feature: "AI Voice Minutes", starter: "300/mo", pro: "1,000/mo", enterprise: "3,000/mo" },
                    { feature: "Available 24/7", starter: "✓", pro: "✓", enterprise: "✓" },
                    { feature: "Number of AI Agents", starter: "1", pro: "3", enterprise: "Unlimited" },
                    { feature: "Calendar Integration", starter: "✓", pro: "✓", enterprise: "✓" },
                    { feature: "CRM Integration", starter: "✗", pro: "✓", enterprise: "✓" },
                    { feature: "Custom Workflow", starter: "Basic", pro: "Advanced", enterprise: "Enterprise" },
                    { feature: "Voice Selection", starter: "Standard", pro: "Premium", enterprise: "Premium+" },
                    { feature: "White Labeling", starter: "✗", pro: "✗", enterprise: "✓" },
                    { feature: "Support", starter: "Email", pro: "Priority Email", enterprise: "Phone & Email" }
                  ].map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{row.feature}</TableCell>
                      <TableCell className="text-center">{row.starter}</TableCell>
                      <TableCell className="text-center font-medium">{row.pro}</TableCell>
                      <TableCell className="text-center">{row.enterprise}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </StyleProvider>
            
            <StyleProvider className="mt-10 text-center">
              <p className="text-gray-600 mb-6">
                Need a custom solution for your {validIndustry.replace('-', ' ')} business? We can help!
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white px-8 py-6 rounded-lg text-lg"
              >
                Contact Us for Custom Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </StyleProvider>
          </div>
          
          {/* Money-back guarantee */}
          <StyleProvider className="mt-16 max-w-3xl mx-auto text-center p-8 border border-green-200 rounded-xl bg-green-50">
            <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">30-Day Money Back Guarantee</h3>
            <p className="mt-2 text-gray-600">
              If you're not completely satisfied with our AI Voice Assistant within the first 30 days, we'll refund your setup fee.
            </p>
          </StyleProvider>
        </div>
      </section>
    </NicheLayout>
  );
};

export default NicheAbout;
