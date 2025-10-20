import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaChartPie,
  FaShieldAlt,
  FaMobileAlt,
  FaBell,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="ml-2 text-xl font-bold text-black">
                  MoneyMap
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#features"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
              >
                How It Works
              </a>
              {/* <a
                href="#testimonials"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Testimonials
              </a> */}
              <Link
                to="/login"
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors shadow-md"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="ml-2 px-4 py-2 text-sm font-medium text-orange-500 bg-white border border-orange-500 hover:bg-orange-50 rounded-md transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden text-center px-6 sm:px-10">
          {/* === Blurred Gradient Background === */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-100 to-yellow-100 opacity-70 blur-[100px]" />

          {/* === Decorative Blobs === */}
          <div className="absolute w-70 h-70 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-30 left-10 animate-spin" />
          <div className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-1/3 right-10 animate-spin" />
          <div className="absolute w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 bottom-10 left-1/3 animate-pulse" />

          {/* === Content === */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Take control of your{" "}
              <span className="text-orange-600 block">Financial Journey</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              MoneyMap helps you track expenses, visualize spending patterns,
              and achieve your financial goals with powerful analytics and
              intuitive tools.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 rounded-md text-base font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg w-full sm:w-auto"
              >
                Get Started
              </Link>

              <a
                href="#features"
                className="px-8 py-3 rounded-md text-base font-medium text-orange-500 border border-orange-500 bg-white hover:bg-orange-50 transition-colors w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
        {/* Blurred Background Layer */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-100 to-yellow-100 opacity-70 blur-[100px]" /> */}

        {/* Content Layer */}
        {/* <div className="relative max-w-7xl mx-auto">
          <div className="z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-5xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-7xl md:text-6xl">
                  <span className="block">Take control of your</span>
                  <span className="block text-orange-600">
                    Financial Journey
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  MoneyMap helps you track expenses, visualize spending
                  patterns, and achieve your financial goals with powerful
                  analytics and intuitive tools.
                </p>

                <div className="mt-5 sm:mt-8 flex justify-center">
                  <div className="rounded-md shadow">
                    <Link
                      to="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#features"
                      className="w-full flex items-center justify-center px-8 py-3 border border-orange-500 text-base font-medium rounded-md text-orange-500 bg-white hover:bg-orange-50 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div> */}
      </div>

      {/* Features Section */}
      <div id="features" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage your finances
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Smart tools to help you track, analyze and optimize your financial
              life.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<FaWallet className="h-8 w-8 text-blue-400" />}
                title="Expense Tracking"
                description="Easily log and categorize your expenses. Get insights into your spending habits with detailed breakdowns."
              />
              <FeatureCard
                icon={<FaChartPie className="h-8 w-8 text-green-400" />}
                title="Visual Analytics"
                description="Understand your finances at a glance with beautiful charts and graphs showing spending trends and patterns."
              />
              <FeatureCard
                icon={<FaWallet className="h-8 w-8 text-yellow-400" />}
                title="Budget Management"
                description="Set budgets for different categories and track your progress. Receive alerts when approaching limits."
              />
              <FeatureCard
                icon={<FaMobileAlt className="h-8 w-8 text-purple-400" />}
                title="Mobile Friendly"
                description="Access your financial data anywhere, anytime. Our responsive design works on all devices."
              />

              {/* <FeatureCard
                icon={<FaShieldAlt className="h-8 w-8 text-indigo-600" />}
                title="Secure & Private"
                description="Your financial data is encrypted and secure. We prioritize your privacy and security."
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        id="how-it-works"
        className="py-12 bg-gradient-to-b from-orange-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
              How It Works
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Start mapping your finances in minutes
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Three simple steps to financial clarity
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <StepCard
                number="1"
                title="Create an account"
                description="Sign up for free and set up your personal profile in just a minute."
              />
              <StepCard
                number="2"
                title="Add your transactions"
                description="Log your income and expenses or connect your bank accounts for automatic tracking."
              />
              <StepCard
                number="3"
                title="Visualize and optimize"
                description="Get insights from visual analytics and make smarter financial decisions."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div id="testimonials" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase text-center">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            What our users are saying
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="MoneyMap completely changed how I manage my finances. I'm saving more than ever before!"
              author="Sarah J."
              role="Small Business Owner"
            />
            <TestimonialCard
              quote="The visual breakdowns of my spending habits were eye-opening. Now I know exactly where my money goes."
              author="Michael T."
              role="Software Engineer"
            />
            <TestimonialCard
              quote="I've tried many finance apps, but MoneyMap is by far the most intuitive and helpful for budgeting."
              author="Elena R."
              role="Marketing Specialist"
            />
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            <span className="block">Ready to take control?</span>
            <span className="block text-orange-600">
              Start your journey today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition-colors"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <div className="flex items-center">
              <span className="ml-2 text-lg font-bold text-white">
                MoneyMap
              </span>
            </div>
          </div>
          <nav className="mt-8 flex justify-center space-x-12">
            <a href="#features" className="text-gray-400 hover:text-gray-300">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-400 hover:text-gray-300"
            >
              How It Works
            </a>
            {/* <a
              href="#testimonials"
              className="text-gray-400 hover:text-gray-300"
            >
              Testimonials
            </a> */}
            <Link to="/login" className="text-gray-400 hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="text-gray-400 hover:text-gray-300">
              Sign Up
            </Link>
          </nav>
          <p className="mt-8 text-center text-gray-400">
            &copy; 2025 MoneyMap. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Component for individual feature cards
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-50 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

// Component for how it works steps
const StepCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
      <div className="absolute -top-6 -right-6 bg-orange-100 rounded-full h-24 w-24 flex items-center justify-center">
        <span className="text-4xl font-bold text-orange-600 mt-6 mr-6">
          {number}
        </span>
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2 mt-4">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

// Component for testimonial cards
const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
      <div className="text-blue-600 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 font-bold">{author.charAt(0)}</span>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
