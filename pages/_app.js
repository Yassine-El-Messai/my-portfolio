import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router

import { useRouter } from "next/router";

// frame motion

import { AnimatePresence, motion } from "framer-motion";

// Import the SpeedInsights component
import { SpeedInsights } from '@vercel/speed-insights/next';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
          {/* Add SpeedInsights component */}
          <SpeedInsights />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;