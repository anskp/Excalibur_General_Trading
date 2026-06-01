'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
export function ScrollReveal({ children, className = '', delay = 0, direction = 'up', duration = 0.6, once = true, }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-60px' });
    const controls = useAnimation();
    const directionMap = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
        none: {},
    };
    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);
    return (<motion.div ref={ref} className={className} initial="hidden" animate={controls} variants={{
            hidden: { opacity: 0, ...directionMap[direction] },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1],
                },
            },
        }}>
      {children}
    </motion.div>);
}
export function StaggerContainer({ children, className = '', staggerDelay = 0.08, }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-40px' });
    return (<motion.div ref={ref} className={className} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={{
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: staggerDelay,
                },
            },
        }}>
      {children}
    </motion.div>);
}
export function StaggerItem({ children, className = '', }) {
    return (<motion.div className={className} variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
            },
        }}>
      {children}
    </motion.div>);
}
export function CounterAnimation({ value, suffix = '', prefix = '', className = '', }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);
    return (<motion.span ref={ref} className={className} initial="hidden" animate={controls} variants={{
            hidden: {},
            visible: {
                transition: { duration: 2, ease: 'easeOut' },
            },
        }}>
      {isInView ? (<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          {prefix}
          <AnimatedNumber value={value}/>
          {suffix}
        </motion.span>) : (<span>{prefix}0{suffix}</span>)}
    </motion.span>);
}
function AnimatedNumber({ value }) {
    const [displayValue, setDisplayValue] = useState(0);
    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setDisplayValue(value);
                clearInterval(timer);
            }
            else {
                setDisplayValue(Math.floor(current));
            }
        }, stepDuration);
        return () => clearInterval(timer);
    }, [value]);
    return <>{displayValue.toLocaleString()}</>;
}
import { useState } from 'react';
