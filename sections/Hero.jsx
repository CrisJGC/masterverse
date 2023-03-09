'use client';

import { motion } from 'framer-motion'
import styles from '@/styles'
import { slideIn, staggerContainer, textVariant } from '@/utils/motion'

const Hero = () => (
  <section className={`${styles.ypa} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}>

    </motion.div>
  </section>
);

export default Hero