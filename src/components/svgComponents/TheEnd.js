import React from 'react';
import { motion } from 'framer-motion';

const TheEnd = props => {
   return (
      <svg
         viewBox="0 0 2000 1500"
         style={{
            enableBackground: 'new 0 0 2000 1500',
         }}
         {...props}
      >
         <motion.path
            style={{ pathLength: props.scrollprogress, fill: 'none' }}
            d="M1366.1 586.6c20.5 1 39.3.9 59.8.8 72.6-.3 144.1.3 216.6-1.3 14.6-.3 23.6 4.7 32.2 15.4 33.5 42 67.6 83.5 101.6 125.1 7.1 8.6 11.1 8.8 19.3.6 8.6-8.6 16.8-17.4 24.8-26.5 6.1-7 10.8-5.7 16.2.8 9.5 11.7 19.5 23 29.1 34.7 10.2 12.3 9.9 17.4-.4 30.1-8.8 10.8-16.9 22.1-25.8 32.8-8.1 9.8-12 10.3-20.3.8-8.7-10-16.4-20.9-24.2-31.7-5.1-7.1-9.2-8.3-15.3-.8-28.3 34.6-57.1 68.8-85.6 103.3-11.1 13.5-21.9 27.3-32.6 41.1-6.2 8.1-14.2 9.9-24 9.5-34.4-1.4-68.9-2.8-103.4-3.2-45.3-.6-90.7-.3-136-.5-23-.1-46-.6-69-.7-14.8-.1-16.9 1.5-12.1 15.6 4.7 13.5 11.7 26.4 19.2 38.7 6.6 10.8 15.4 20.2 22.8 30.4 1.5 2.1 1.6 5.3 2.3 8-3.3.3-7.6 2-9.9.5-11.8-7.3-22.7-16.2-34.6-23.2-15.8-9.2-32.5-16.1-51.7-11.9-20.3 4.4-42.5 26.6-46 46.8-2.8 16.3 3.2 22.9 19.6 21.5 30.2-2.5 30.7-2.3 30.4 28-.1 9.6-1.6 19.2-2.8 28.8-.9 7.1-5.8 11.3-12.6 10.3-30.8-4.7-58 9.8-86.8 15.6-34.5 6.9-68.6 14.8-104.1 13.4-8.7-.3-14.9 1.4-16.8 11.9-1.4 7.3-1 11.5 6.6 13.7 13.5 4 19.2 14.3 19.7 27.4.5 13.5-8.5 21.1-19.4 25.9-13.8 6-28.2 10.8-42.4 16-1.7.6-3.8 1.5-5.3 1-21.7-6.8-45.7-8-62.9-25.6-15.6-15.9-15-31.8 3.6-43.4 9.8-6.1 5.3-13.4 5.9-20.5.8-8.8-6.6-7.2-11.3-8.2-35.5-7.3-71.4-12.8-106.4-22.1-24.4-6.5-48.1-10.6-73.1-7.6-9.7 1.2-17.1-4.3-17.5-14.3-.6-15 .1-30.2 1.1-45.2.6-8.6 6.4-12.4 15.1-12.2 9.7.3 19.4.2 29.1.6 8.4.3 13-3.3 11.7-11.8-5.6-37.1-14.6-50.7-53.2-54.7-11.8-1.2-24.7 7.9-37.1 12.4-5.5 2-11 11.6-16.7 2.7-4.5-6.9-2.5-15.1 4.8-20.9 13.8-11.1 19.7-27.1 26-42.8 3-7.6 1.3-11.7-7.5-11.2-12.1.7-24.1 2.1-36.2 2.1-63.6.2-127.1.1-190.7.2-41 0-82.1-.3-123.1.2-13.1.2-22.5-3.3-31-14.3-29.6-38.2-60.3-75.6-90.7-113.1-6.1-7.5-13.6-13.9-19.7-21.3-4.4-5.4-7.7-4.4-11.5.2-9.2 11.2-18.8 22.1-27.6 33.5-9.8 12.7-15.2 13.4-25.2 1.2-9.9-12.1-19.3-24.7-28.9-37.1-6.3-8.1-7.4-16.5-.6-24.8 11.9-14.4 24-28.8 36.2-43 3.9-4.5 7.6-4.5 12 .5 11 12.8 22.9 24.9 33.8 37.8 6.1 7.3 9.9 6.3 15.5-.5 19.7-23.7 40.1-46.8 59.8-70.5 17-20.4 35.3-40 49.6-62.3 12-18.7 24.3-23.2 46.7-21.7 51.2 3.4 102.9 1.4 154.3 1.7 56.3.4 112.6.8 168.9 1.4 11.8.1 14.9-3.2 9.7-13.7-5.1-10.2-11.8-19.6-18.2-29.1-4.8-7-10.6-13.2-15.4-20.2-1.4-2.1-2.1-6.4-.9-8.1 1.3-1.8 5.6-2.7 8-2 7.5 2.2 14.8 5.4 22.2 8 25.7 9.1 56.7 1.5 72.3-22.6 6.1-9.4 9.9-20.7 12.9-31.6 3.1-11-.3-14.2-11.8-14.1-9.7.1-19.4.3-29 .6-8.8.3-14.5-4-14.7-12.5-.3-14.4.4-28.9 1.6-43.3.6-7.2 5.1-13.2 13-12.5 41.7 3.6 79.5-13 118.9-22 22.9-5.2 46.4-7.9 69.7-11.4 8.7-1.3 19.4-12.2 17.9-20-.4-2-4-4-6.5-5-10.5-3.9-18.8-9.9-18-22.1.9-12.5 5.8-22.8 18.3-29.1 37.9-19.2 75.1-13.8 111.8 2.6 18.9 8.5 19.8 31.3 2.1 44.1-6.9 5-15.6 7.5-4.5 16.8 1.3 1.1 1.2 4.6.9 6.9-.8 6.6 3 7.7 8.4 9 32.3 7.7 65.2 13.6 96.4 24.6 27.1 9.5 54.5 10 82 11.9 21.3 1.5 23.4 2.2 25.3 23.6.9 9.6 2.6 19.3 1.8 28.7-1.3 14.4-5.6 17.5-20 17.5-7.9 0-15.7-1-23.6-1.3-11.9-.4-15.2 3.3-13.8 15.1 2.6 22.3 20.7 43.3 42.2 49.9 23.4 7.2 45.2 4 66.7-7.1 4.9-2.5 11-2.6 16.6-3.8-2.4 5-4.3 10.3-7.3 14.9-11 16.5-23.2 32.4-33.4 49.4-5.8 9.7-3.4 12.9 8 13.3 15.1.5 30.3.1 45.4.1l2.7.4zm-819.6 243c50.2 0 100.4-.3 150.6.1 16.9.1 30.8-5.5 42.2-17.5 7-7.4 13.5-15.5 19.6-23.7 11.3-15.3 15.2-32.9 12.5-51.5-2.3-15.4-1.1-32.8-18.9-41.4-1.5-.7-2.1-2.9-3.3-4.2-19-21.2-40.9-34.7-71.2-32.2-22.2 1.8-44.6.8-66.9.8-70.1-.2-140.3-.3-210.4-.8-9.3-.1-15.2 3-21.4 10.3-20.2 23.9-41.2 47.2-62.6 70-5.5 5.9-5.6 9.2-.6 15 18.1 21 36.1 42.2 53.6 63.7 6.7 8.3 14 11.7 24.8 11.6 50.5-.5 101.2-.2 152-.2zm917.7 7.2v.8h136.1c8.6 0 16-.6 22.3-8.7 18.2-23.3 37.1-46.1 56.6-68.2 6.7-7.6 5-11.4-1.1-17.7-11.3-11.6-21.8-24.2-32.4-36.6-7.8-9.2-15.3-18.7-22.9-28.1-7.9-9.9-17.9-12.9-30.4-11.3-12.5 1.6-25.3 1.9-37.9 1.8-30.8-.3-61.6-1.3-92.4-1.7-29.4-.3-58.9 0-88.4-.3-27.2-.2-55-3.3-77.9 16.3-9.2 7.8-17.6 16.5-26.6 24.6-13.1 11.7-17.1 26.8-18.2 43.8-1.9 28 13.4 47.2 32.4 63.7 13 11.3 27.2 21.9 46.6 21.6 44.7-.3 89.5 0 134.2 0zM935.3 488.9c-12.8 8.5-24.4 19.8-29.5 35.5-12.5 38.1-10.3 73.9 16.6 105.6 16 18.8 32.3 37.5 49 55.7 28.7 31.3 35.2 71.1 17 109.3-2.3 4.8-5.7 9.2-9 13.5-1.3 1.7-5.3 3.6-5.7 3.2-8-9.1-11.1.8-15.3 4.1-8 6.4-15.6 13.4-23.1 20.4-1.6 1.5-2.4 3.8-3.6 5.8 2.2.5 4.5 1.4 6.7 1.4 30.8.2 61.5.3 92.3.4 2.4 0 4.9 0 7.2-.6 6.5-1.7 9.5-4.2 3.9-11-7.5-9.1-14.1-19-12.6-32.6 7.7 10.7 16.3 20.8 22.7 32.1 4.8 8.5 11.1 10.3 19.4 9.5 1.7-.2 3.4-.9 5.1-1.4-.9-2-1.3-4.3-2.7-5.8-12-12.7-24.9-24.7-36.2-38-19.4-23-25.9-49.6-14.4-77.8 6.4-15.5 20.7-27.6 32.3-39.9 15.4-16.3 21-20.8 33.4-30.8 25.4-20.6 41.6-46.9 42-81 .7-56.3-57-97.8-100.9-99.7-7.8-.3-15.7-1.3-23.6-1-10.2.4-20.7.2-30.6 2.9-10.8 3-31 13.9-40.4 20.2zM537.8 899.2v-.2h103.5c23.6 0 47.2.4 70.8 0 3.6 0 9.1-2 10.3-4.7 1.3-3-.1-8.6-2.4-11.4-11.4-13.9-24.5-24.4-44.2-24.5-62.2-.4-124.5-2.1-186.7-2.2-34.4-.1-68.9 1.9-103.3 3.3-10.9.5-19.6-1-26.3-11.5-7.1-11.2-15.8-21.4-24.6-31.3-15.2-17.2-31.1-33.8-46.4-51-11.3-12.7-11.7-17.5-1.5-29.7 27-32.6 54.3-64.8 81.3-97.4 4.7-5.7 9.6-6.9 17.1-6.8 74.2 1.3 148.5 1.8 222.8 2.5 9.1.1 18.1.7 27.2.4 14.4-.4 29.1.2 43-2.5 17.2-3.4 30.8-13.8 39.2-29.7 3-5.6 4.3-9.9-5.4-10-38-.2-76-1.4-114-1.7-71.4-.5-142.8-.5-214.2-1.1-14.9-.1-25.5 4.6-35.5 16.7-36.5 44.2-74.5 87.4-112 130.8-9.6 11.1-9.5 10.6.6 22.3C273 801.1 309 842.6 343.9 885c8.2 9.9 15.9 14.4 28.8 14.2 55-.4 110 0 165.1 0zm951.6-35.8v-.5c-41.2 0-82.4 1-123.5-.4-23.4-.8-35.1 13.5-46.3 29.4-6 8.4-2.3 13.5 8.3 13.3 24.7-.5 49.4-1.6 74.1-1.7 59.9-.4 119.9-.1 179.8-.6 19.9-.1 39.8-1.5 59.8-2.4 7.8-.4 13-4.5 18-10.6 36.4-44.4 73.1-88.6 110-132.5 6.1-7.3 5-12.4-1.3-18.5-8.7-8.4-17.3-17.1-24.8-26.5-26.9-33.4-53.6-67-79.6-101.1-8-10.5-17.2-14.3-29.6-13.2-12 1.1-24 2.8-36.1 2.7-38.1-.1-76.2-.8-114.3-1.2-51.8-.5-103.7-.9-155.5-1.4-4.8 0-9.8-.5-14.5.2-2.2.3-5.5 3.2-5.6 5-.5 15.3 20.4 37.5 35.7 38 23.6.8 47.2 1.8 70.8 1.7 59.8-.2 119.7-.9 179.5-1.5 7.9-.1 15.7-.5 23.6-1.1 8.5-.7 14.8 1.6 20.1 9.1 7.2 10.4 15.9 19.7 24 29.5 17.8 21.4 35.5 42.7 53.3 64.1 4.7 5.7 6.7 11.3.7 17.6-12 12.7-24.3 25.2-35.5 38.6-13.5 16.1-27 32.4-38.7 49.8-7 10.4-14.5 14.5-26.7 14.3-42.1-.5-83.9-.1-125.7-.1zm-292.5-431.6v2.6c17.5 0 35.1.2 52.6-.2 4.6-.1 12.7-1.3 13.1-3.3 1.8-8.5 2.9-17.8 1.3-26.3-1.7-8.5-10.2-6.1-16.8-6-24.6.4-49.3 1.1-73.9.8-35.6-.4-71.3-2-106.9-2.5-62.3-.9-124.6-1.3-186.9-1.9-22.9-.2-45.9-.8-68.8-.6-12 .1-24.1.9-36.1 2.2-12.8 1.4-14.5 4.7-14.2 17.8.3 11.4 7.2 12 15.8 12.2 32.6.8 65.2 2.4 97.9 2.7 107.5 1.2 215.2 1.8 322.9 2.5zm-116.3 658.8v1.2c50.2 0 100.4.1 150.6-.1 13-.1 15.6-2.9 15.8-14.2.2-11.4-2.6-14-15.4-14.7-3.6-.2-7.3 0-10.9 0-80.4-.3-160.9-.2-241.3-.9-58-.5-116.1-1.8-174.1-2.7-9.7-.1-19.4-.5-29 .3-12.2 1-18.3 11.2-13.7 21.9 3.8 8.8 11.9 6.9 18.9 7 52 .8 103.9 1.7 155.9 2.1 47.7.4 95.4.1 143.2.1zM886.4 601.8c-.9 90.8-1.8 181.1-2.7 268.4 16.6-18.1 35.1-38.5 53.9-58.8 7.8-8.4 15.6-17 24.2-24.6 25.8-22.7 19.9-66.5-.8-86.3-29.9-28.7-58.2-59.5-74.6-98.7zm443 53.2c-8.7-9.8-19.1-18.5-25.5-29.5-17.2-29.3-8.2-57.1 8.3-83.6l4.5-7.5c-3.2-.7-6.4-1.8-9.7-1.9-4.8-.1-9.6.9-14.5 1-22.5.5-43.2-4.2-60.5-19.7-2.8-2.5-6-4.5-9-6.7-.8 4.1-3.4 9.2-1.9 12.1 4.1 7.7 8.8 15.8 15.4 21.1 12.9 10.5 29.1 10.7 45.1 10.1 7.6-.3 10 2.2 5.5 9.7-15.4 25.9-13.2 49.8 6.1 73.5 9.7 11.9 9.7 11.9-3 19.4-4.7 2.8-9.6 5.3-14.1 8.3-22.1 14.9-40.2 34.3-49.2 59.1-17.4 47.7 4.3 101.6 53.8 123.9 6.6 3 13.8 4.7 20.4 7.5 9.4 4 10 7.3 1.7 13.4-20.2 14.7-24.5 34.7-20.2 57.8.6 3 1.3 5.9 1.9 8.9 2.6 12.9 2.2 14-10.9 11.4-20.4-4-35.3 5.7-48.6 18.6-3.4 3.3-3.6 10.7-3.5 16.2.1 5 3 5.8 6.9 1.6 16.8-18.3 38.3-21.6 61.5-18.3 7.6 1.1 15.1 3 22.7 4.5.2-1.6.6-2.3.3-2.7-1.1-2.2-2.3-4.2-3.4-6.3-15.4-30.5-17.8-59.7 6.8-87.5 13.2-14.9 11.3-15.4-7.1-25.8-17.2-9.7-35.1-20.3-48.3-34.6-28.9-31.1-31.7-79.6.7-111.3 20-19 42-35.7 67.8-42.7zM756 548.4c12.9-.3 26.6-4.8 36.1-17.1 4.1-5.4 5.8-12.9 7.7-19.6.7-2.5-1.1-5.6-1.7-8.5-2.3 1.5-5.2 2.6-6.8 4.7-12.7 16.9-30.2 23.4-50.5 24-8 .2-15.9-.2-23.9-.4 4 8.1 7.7 16.3 11.9 24.2 9.6 17.9 9.6 35.4.9 53.8-6.1 12.9-15.2 21.5-27.9 27-2.6 1.1-4.5 3.6-6.7 5.5 2.8 1.7 5.4 3.9 8.4 5.2 8.3 3.4 18.2 4.7 24.8 10 15 12.1 30.3 24.7 41.8 39.8 11.7 15.3 18.8 34.2 15.6 54.5-7.3 45.7-35.3 75.2-75.8 94.5-2.5 1.2-4.7 2.9-7.1 4.4 1.8 1.5 3.6 3 5.5 4.4 31.3 23.6 38.3 55 19.8 89.5-2 3.7-4.3 7.3-6.1 11.1-.9 2-1 4.4-1.4 6.6 2.3.2 4.9 1.2 6.7.5 21.8-9 42.3-7.4 62.4 5.3 7 4.5 11.6.8 9.8-7.6-.9-4.3-3.5-9.5-6.9-11.9-10-6.9-20.8-12.9-33.7-10.6-7.7 1.4-11.5 1.2-8.4-8.8 8.1-26.2 5-50.3-16.6-69.7-6.4-5.7-5-9.5 2.5-13.4 25-13.1 43.3-33.1 54.2-58.8 13.1-30.7 16.3-62.4-2-92.4-13.1-21.4-30.7-38.7-54.3-49-13.2-5.8-13.3-9.1-1.6-17.9 20.6-15.5 26.5-37.5 16.2-61-1.9-4.4-4.8-8.4-6.9-12.8-2.2-4.6-.1-6.9 4.6-6.9 2.3.2 4.7.8 9.4 1.4zm73.2 97.9c1.4.1 2.9.3 4.3.4v23.4c0 115.6-.1 231.3-.1 346.9 0 5.4 0 10.9.3 16.3.1 1.4 1.7 2.6 2.7 3.9 1.1-1.2 2.9-2.3 3-3.6.5-5.4.6-10.9.7-16.3.9-124.6 1.9-249.3 2.7-373.9.1-16.3-1.3-32.6-1.1-48.9.5-44.8 1.6-89.5 2.1-134.3 0-3.7-1.6-8.8-4.3-10.9-2.8-2.2-9.3-3.3-11.6-1.6-3 2.3-4.9 7.9-5 12.1-1.2 52.6-2.5 105.2-2.9 157.9-.7 95.7-.7 191.3-1.3 287-.2 39.9-1.2 79.7-1.5 119.6 0 3.8 2 7.7 3.1 11.6.8-3.7 2.3-7.3 2.4-11 1.1-48.3 2.4-96.7 2.8-145.1.6-67.2.4-134.4.9-201.6 0-10.6 1.8-21.2 2.8-31.9zm347 395.1c.9 0 1.7 0 2.6.1 1-10.4 2.7-20.9 2.9-31.3 1.3-52.6 2.7-105.2 3.2-157.8.7-74.4.5-148.9.7-223.4.2-50.8.3-101.7 1-152.5.1-6.6 3.2-13.1 4.8-19.7 10.6 4.3 5.5 13.5 5.5 20.2-.7 98.5-2 197-2.9 295.5-.5 58.1-.4 116.2-.7 174.3-.2 27.2-.8 54.4-1 81.7 0 4.6-6.1 10.2 1.8 13.7 1.8-4.7 3.6-9.3 5.4-14 .2-.5 0-1.2 0-1.8 1.2-92.5 2.5-185 3.4-277.5.5-53.9.3-107.7.5-161.6.1-41.2.3-82.3.6-123.5 0-7.6-2.3-13.2-10.9-13.7-9.1-.6-13.2 4.5-13.6 13.2-.1 2.4-.2 4.8-.2 7.3-1.3 119.2-2.6 238.4-3.8 357.6-.3 25.9.3 51.9.2 77.9-.1 39.9-.5 79.9-.7 119.8.1 5.1.8 10.3 1.2 15.5zm-131.9-589.6c4.5 1.6 9.3 2.5 14 3.7 23.4 5.9 44.3 16.1 59.3 35.8 5.4 7.2 9.8 15.2 14.8 22.7.9 1.3 2.5 2.1 3.8 3.1.7-1.5 2-2.9 2.1-4.4.3-15.7.2-31.5.7-47.2.1-3.1 1.9-6.2 2.9-9.4 1.5 2.9 3.3 5.7 4.2 8.7.7 2.2 0 4.8.2 7.2 2.5 33.6-3.7 67.2-.9 101 1.2 13.9-4.3 28.4-6.8 42.6-8.8 10.3-9.6 17.2-11.1 35.6 1.2 3.2.3 7.2.3 10.8l-.3 161.5c0 4.8-.4 9.7-1.1 14.4-.2 1.1-2.3 2.1-3.7 2.8-.2.1-1.8-1.6-2-2.5-.6-3.6-.9-7.2-1.1-10.8-.9-17.5-2.3-35-2.5-52.4-.3-17.4.5-34.9 1-52.3.7-22.9 1.6-45.8 2.2-68.8 0-1.9 1.1-8.9.2-10.9-1.7 1.5-6.4 7.9-8.1 9.4-7.4 7.1-13.7 15.8-22.2 21-18.5 11.4-32.5 26.8-44.5 44.5-13.4 19.7-13.4 40.1 0 59.2 9 12.8 20.2 23.9 30.5 35.8 19.3 22.2 42.5 41.5 52.4 70.7.5 1.5 2.2 2.5 3.4 3.8.9-1.9 2.3-3.7 2.6-5.6.4-2.3 0-4.8 0-7.2 1.3-86.5 2.5-172.9 3.8-259.4 10 3.1 7.1 11.6 7 18.2-.7 50.5-1.6 101-2.8 151.5-1.2 51.5-2.6 103.1-4.2 154.6-.2 7.1-2.4 14.1-3.6 21.2l.3-.3c-2.2 4.3-4.5 8.5-6.4 12.9-15.2 35.8-39.5 60.2-79.9 65.3-8.7 1.1-17.3 3.4-25.9 5.2 9 .2 18.1.4 27.1.4 28.4.1 56.9.1 85.3.1 6 0 12.9.9 10.6-9.2-.4-1.7 1.7-4 2.6-6 1.7 1.4 3.6 2.7 4.9 4.4 1 1.3 1.3 3.1 1.9 4.7.4-1.5 1.1-3 1.1-4.6.1-13.8 0-27.5 0-41.3-1.9 1.2-2 2.4-2.2 3.6l-4.2 23.7c-9.4-6.6-4.6-16.2-4.5-24.3.8-61.7 2.4-123.3 3.2-185 .2-13.2-3.2-26.4-3-39.6.4-24.7 2.5-49.4 3.4-74.1 1.4-39.2 2.9-78.4 3.5-117.6.6-37.5.5-75 .1-112.5-.2-15.3-3.1-17.5-18.5-17.9-6.7-.2-13.3-.1-20-.4-22.9-.8-45.9-1.7-68.8-2.5l-24.3-.8c-6.6 0-13.2-.1-19.7 0-35 .4-70 .9-105 1.1-6.1 0-6.1 2.5-6.2 7.7-.4 18.1-1.8 36.1-3.1 54.1-.1 1.9-2.4 3.6-3.7 5.4-.9-2-2.5-3.9-2.5-5.9.3-18.1.9-36.3 1.3-54.4 0-1.9-1.3-3.8-2-5.7-1.3 1.8-3.5 3.5-3.7 5.5-1.1 12-2.3 24.1-2.3 36.1-.6 82.8-.7 165.7-1.3 248.6-.2 20.5-2 41-2.5 61.5-.5 20-.1 40-.5 59.9-.7 33.8-2.2 67.7-2.5 101.5-.2 19.3 1.7 38.6 2 58 .1 5.8-1.9 11.6-2.9 17.4-.3 1.5-.4 3.1-.5 4.6 2.3-.5 5.9-.3 6.5-1.5 1.2-2.4.8-5.7.9-8.7.2-12.1.2-24.2.8-36.3.1-1.6 2.6-3.1 4-4.6.8 1.5 2.2 3 2.2 4.6.5 12.1.9 24.2 1 36.3.1 6.4 2.2 10.3 9.2 10.7 32.6 1.6 65.1 3.3 99.8 5-3-2.1-3.9-3.2-5-3.3-4.8-.8-9.5-1.5-14.3-2-38.3-4.2-66.6-23.5-85-57.2-3.6-6.7-6.4-13.9-8.9-21.2-10.5-30.8-1.7-62.4-3-93.5-1.7-42.8 1.8-85.7 2.6-128.6.6-29.7 1.9-59.4.1-89-1.9-30.3 9.2-59.6 4.3-89.8-.4-2.3.2-4.8.5-7.2 7.4-57.3 52.1-98.9 109.8-102.4 10-.6 20.6-1.5 30.6-1.4 5.7.4 22.2 1.6 22.2 1.6zM175 703.9c-2.4 1.8-4.2 2.6-5.3 3.9-9.9 12.2-19.7 24.3-29.2 36.9-1.2 1.6-1 6.1.3 7.7 9.1 11.3 18.7 22.2 28.2 33.1 4.8 5.4 9.6 4.1 13.9-.7 9.2-10.4 18.2-21 27.3-31.4 3.6-4.1 2.2-6.8-1.3-10.6-9.7-10.7-18.6-22.2-28-33.2-1.6-2.2-3.9-3.9-5.9-5.7zm836.1-434c-16.1.1-31.4 2.2-44.4 12.3-13.4 10.5-12.3 21.6 3.3 28.6 3.7 1.7 8.1 3 12.1 3 18.7.2 37.5.8 56.1-.6 9.3-.7 19-4 27.1-8.6 9.2-5.3 9.1-14.5.3-20.5-6.3-4.3-13.9-7.1-21.2-9.7-16.5-5.9-30 4.3-44.5 9.1-7.8 2.6-14.1 7.4-14.3 16.7-.1 7.8-4.2 9.7-10.6 6.9-3.6-1.6-9-4.4-9.3-7.1-.4-4 2.1-9.4 5.1-12.2 4.3-4 10-6.6 15.5-9 8.3-3.3 16.6-5.9 24.8-8.9zM900.2 374.4c-.2 2-.4 4.1-.7 6.1 6.3.4 12.6 1.3 18.9 1.2 69.5-1.3 139-2.7 208.6-4.3 2.5-.1 4.9-1.1 7.4-1.7-2.5-1.5-4.8-3.9-7.4-4.3-29.2-4.7-58.3-11.1-87.7-13.1-41.1-2.9-82.2.3-123 6.5-2.9.4-5.8 1.2-8.7 1.8 3.3.6 6.6 1.7 9.9 1.6 34.5-1 68.9-2.7 103.4-3 18.7-.2 37.4 1.9 56.1 3.2 2.3.2 4.5 2.3 6.8 3.5-2.6 1-5.3 3.1-7.9 2.9-8.4-.4-16.8-2.4-25.2-2.3-50.1.4-100.3 1.3-150.5 1.9zm926.2 339.7c-1.1.5-3.3.6-4.4 1.8-8.8 9.9-17.6 19.9-26 30.1-.9 1.1-.2 4.8 1 6.3 8 9.8 16.2 19.4 24.8 28.8 1.7 1.9 6.8 3.7 7.6 2.9 9.6-9.9 19.5-19.6 27.6-30.7 3.9-5.2-23-39.2-30.6-39.2zM994 1212.3c-.2.7-.4 1.5-.5 2.2 4.3 1.3 9.3 4.8 12.8 3.6 14.6-5 29.3-10.5 42.9-17.8 7.4-3.9 6.3-13.2 0-20.5-13.7-15.9-59.5-14-72.9 2.8-5 6.2-4.1 11.6 3 14.4 5.4 2.2 11.6 2.8 17.5 3.5 5.4.6 10.9 0 16.2.9 2.3.4 4.2 3.2 6.2 4.9-1.8 1.3-3.5 3.6-5.5 3.9-6.5 1.1-13.1 1.5-19.7 2.1zm-26.6-273.9v2.7c20.5 0 41 .3 61.4-.1 18.7-.3 37.3-1.3 56-2 1.2 0 2.6 0 3.5-.6 1.8-1.3 3.3-3 4.9-4.6-1.6-1.5-2.9-3.8-4.8-4.3-2.8-.8-6-.5-9-.5-36.8-.4-73.6-.8-110.4-1-7.2 0-15.4-1.2-21.5 1.6-15.7 7.3-31.5 6.6-47.8 4.7-3.4-.4-7.1 1.8-10.7 2.8 3.3 1.8 6.4 3.9 9.9 5.1 2.1.7 4.8-.1 7.2-.3 20.5-1.1 40.9-2.3 61.3-3.5zm-96.8 167.4c-.1 1.1-.3 2.2-.4 3.2 6.3 1.2 12.5 3.3 18.8 3.5 24.7.6 49.4.9 74.1.9 53.7.1 107.5 0 161.2-.3 11.8-.1 23.7-1 35.5-1.9 1.2-.1 2.2-2.2 3.4-3.4-1-.4-1.9-1.1-3-1.2-1.8-.2-3.6-.1-5.4-.1-82.1-.3-164.2-.5-246.4-.8-12.6.1-25.2.1-37.8.1zm167.7-225.1c0-.1 0-.1 0 0 10.3-.1 20.5.1 30.8-.2 2.4-.1 4.8-2 7.2-3.1-2-2-3.8-5.2-6.2-5.8-4.6-1.2-9.6-.7-14.3-1.5-2-.3-3.7-2.3-5.5-3.5 1.7-1.3 3.4-2.6 5-4 1.5-1.3 2.8-2.8 4.2-4.3-1.5-.9-3-2.5-4.5-2.5-8.9-.1-17.7.1-26.6.4-.9 0-2.4 1.2-2.4 1.9-.1.9.8 2.5 1.7 2.8 2.8 1 6.2 1 8.6 2.5 2 1.3 3.1 4.1 4.6 6.3-2.1.7-4.2 2.2-6.3 2.1-12-.4-24.1-2.2-36.1-1.7-20.4.9-40.7 3.7-61.2 4.7-9.5.4-19.1-1.8-28.6-2.3-1.3-.1-3.1 2.9-4.1 4.8-.2.3 2.1 2.5 3.6 3.1 1.6.6 3.6.4 5.4.4 41.5-.1 83.1-.1 124.7-.1zm3.3 40.1v-2.2c13.9 0 27.8.2 41.7-.2 3-.1 6-2.7 8.9-4.1-2.8-1.5-5.5-4.2-8.3-4.3-30.8-.7-61.6-1.4-92.5-1.4-13.8 0-27.6 1.2-41.4 2.1-13.8.9-27.6 2.3-41.4 3.2-4.2.3-8.5-.8-12.6-.2-2.4.4-4.4 3.1-6.5 4.7 2.4.9 4.8 2.6 7.1 2.5 24.8-.9 49.5-2.9 74.3-3 23.6-.1 47.2 1.8 70.7 2.9zm-31.8 60.4v-2.5c18.7 0 37.4.1 56.1-.1 4.2 0 8.5-.6 12.4-1.8 1.7-.5 2.9-3.2 3.7-5.2.2-.4-2.2-2.3-3.7-2.8-1.6-.6-3.6-.4-5.4-.4-33.8-.1-67.6-.6-101.3-.2-8.2.1-16.3 3.5-24.6 4.5-8.8 1.1-17.8 1.5-26.7 1.7-4.1.1-8.4-1.7-12.4-1.4-2.1.2-4 3.1-6 4.8 2 1.9 5.4 5.9 5.9 5.5 11.4-7.6 23.6-1.8 35.3-2.1 22.1-.3 44.4 0 66.7 0zm-21.6-81.7v-.4c10.3 0 20.5.1 30.8 0 19.9-.1 39.8-.2 59.7-.6 2.4-.1 4.8-2.5 7.2-3.8-2.1-1.7-4.2-4.6-6.4-4.8-10.2-.9-20.5-.5-30.7-1.6-48.7-5-96.8 8.5-145.5 4-2.2-.2-4.7 2.6-7 3.9 2.3 1.1 4.6 3.1 6.9 3.1 28.3.2 56.6.2 85 .2zm61.9 59.9v-2.1c10.3 0 20.6.4 30.8-.2 3.5-.2 6.9-3 10.3-4.7-3.2-1-6.3-2.7-9.5-2.9-7.2-.4-14.5-.1-21.8-.1-16.3-.1-33.1 2.2-48.9-.8-37.9-7.2-74.3 7.8-111.6 5.5-1.6-.1-3.5 3.4-5.3 5.2 2.1.8 4.1 2.2 6.2 2.1 11.9-.5 23.9-1.8 35.8-1.9 37.9-.2 75.9-.1 114-.1zm-45.5 40.5c17.6-.9 33.9-1.7 50.2-2.7 3-.2 6.2-.6 8.8-1.9 2.5-1.2 4.3-3.8 6.4-5.7-2.5-.5-5.1-1.6-7.6-1.5-12.7.3-25.4.8-38 1.5-22.9 1.2-45.7 2.6-68.6 4.1-3.3.2-6.4 1.6-9.6 2.4 3.7 1.3 7.3 3.5 11 3.6 16.1.4 32.4.2 47.4.2zm88.2 121.5H929.5c54.6 9.4 109.1 8.2 163.3 0zm-71.1-777.5v-.6c7.2 0 14.4.5 21.6-.2 3.1-.3 5.9-3.1 8.8-4.7-2.5-2.9-5-5.7-7.5-8.5-.3-.4-1.1-.5-1.7-.5-17.9 0-35.7-.1-53.6.1-.3 0-1.1 2.4-.9 2.6 5.8 3.8 5.9 15.2 17.2 12.1 5-1.4 10.7-.3 16.1-.3zm-157 162.3c-.5-.3-1-.5-1.4-.8v162.5h1.4V506.2zm299.2-49.1c-.9 0-1.7 0-2.6-.1-1.5 43.7-3.1 87.5-4.6 131.2 1.3 0 2.6.1 3.9.1 1.1-43.7 2.2-87.4 3.3-131.2zm-206.7 567.2c33.5 9.6 71.6 11 88.1 0h-88.1zm200.4-196.5h1.6V680.5h-1.6v147.3zm-118.2 180.5h-63c-1.8 0-3.6.4-5.3 1-1 .4-1.8 1.4-2.7 2.2 1 1.1 1.9 3 2.9 3 22.7.5 45.6 4.5 68.1-6.2zm-30.3 140.1v2c4.2-.2 8.4-.1 12.5-.8 1.9-.4 3.4-2.6 5.1-3.9-1.8-1.2-3.4-3.1-5.3-3.3-10.7-1.2-21.4-2.4-32.2-2.6-4.5-.1-9.1 2.1-13.6 3.6-.8.3-1.6 1.9-1.6 2.9 0 .8 1.3 2.1 2 2.2 11.1-.1 22.1-.1 33.1-.1zm-26.9-292.7v-.2c-6.6 0-13.3-.4-19.9.1-4.2.3-8.3 1.9-12.4 2.9 4.4 1.1 8.9 3.2 13.3 3.2 16.3 0 32.5-.6 48.8-1.2 1.2 0 2.4-1.6 3.6-2.5-1.5-.8-2.9-2.3-4.4-2.3-9.7-.1-19.4 0-29 0zm138.2 69.7c-.2-4 .2-6.6-.6-8.7-1.1-3-2.6-6.3-5-8.2-.9-.7-6.7 2.3-6.8 3.8-.2 2.6 1.7 6.3 3.9 7.9 5.6 4.3 4.3 5.8-1.5 7.8-1.7.6-3.4 4.1-3.3 6.2 0 1.4 3.3 3.9 5 3.7 2.5-.2 6.1-1.7 7.1-3.8 1.4-2.9 1-6.8 1.2-8.7z"
         />
         <motion.path
            style={{ pathLength: props.scrollprogress, fill: 'none' }}
            d="M585.9 742.6c17.2-.1 18.7-2 14.3-19.2-.6-2.3-1.4-4.6-2.1-6.9-4.6-14.3-1.5-17.9 13.8-16.9 8.6.6 12.7 4.1 9.6 12.7-8 22.5-7 44.9-.6 67.6 1.2 4.2-1 13.1-3.1 13.6-6.5 1.5-13.8.5-20.6-.6-1.3-.2-2.8-5.1-2.6-7.7.2-3.5 2.5-6.8 3-10.4 1-6.1 1.3-12.4 1.9-18.6-10 .5-20 .8-29.9 1.8-.8.1-1.7 5.2-1.4 7.9.5 6 2.9 12.1 2.3 17.9-.4 3.6-4.2 8.7-7.5 9.8-4.6 1.5-11 1.1-15.1-1.1-1.8-1-.9-9.1.5-13.3 7.9-23 10.3-45.8.4-68.8-2.9-6.6-.6-10.6 6.7-11 4.2-.2 8.5 0 12.6.5 6.1.8 8.1 4.6 6.4 10.4-1.2 4-2.8 8-3.9 12-5 17.5-2.9 20.4 15.3 20.3zM686.1 699.3h23.6c8.4 0 11.5 4.4 11.7 12.6.4 14.2-1.7 15.8-14.6 9.9-4.9-2.2-10.1-4-15.4-5.2-12.2-2.8-15-.6-16.7 11.4-1.1 7.8 1.4 11.8 9.8 10.5 1.8-.3 3.6-1 5.3-.9 3.9.3 10.8.3 11.1 1.6 1.3 5.6 1.4 11.9.1 17.5-.3 1.1-8.1.8-12.4.8-4.4 0-8.9-.3-13.3-.4 0 7.1-1.2 14.4.5 21.1.6 2.3 8.2 4.4 12.3 4.1 8.4-.8 16.6-3.3 24.8-5.2 5.4-1.3 9.9-.7 10.8 5.9.8 6.6-.1 12.8-8.7 12.7-18.1-.3-36.3-1-54.4-1.8-6.6-.3-7.6-4.4-6.6-10.1 1.7-10.1 4.5-20.3 4.3-30.4-.3-13.1-2.4-26.3-4.8-39.3-2.2-12.1-1.6-13.8 10.7-14.4 7.2-.4 14.5-.1 21.8-.1.1-.1.1-.2.1-.3zM474 699.5c9.6 0 19.4-.8 28.9.3 4.6.5 11.7 4 12.4 7.3 1.5 6.5-.6 13.9-1.2 21-3.1-.4-6.4 0-9.2-1.2-6.3-2.8-12.3-6.3-18.4-9.5-.6 7-2.1 14.1-1.7 21.1.9 13.8 3.1 27.5 4.2 41.3.3 4.2-.7 12-2.3 12.3-6.2 1.2-13.2 1.2-19-.8-2.3-.8-3.5-8.2-3.2-12.5 1.1-14.4 3.7-28.7 4.5-43.1.4-6.7-1.9-13.5-3-20.3-6.8 3-13.7 5.8-20.3 9.3-2.5 1.3-4 4.5-6.3 6.4-1.7 1.3-4.1 1.8-6.2 2.7-.8-2-1.7-4-2.4-6.1-.2-.5.2-1.2.2-1.8 1.4-26.3 1.4-26.3 28.4-26.3 5-.1 9.8-.1 14.6-.1zM1414.4 760.7c1.7 9.4 3.6 17.6 4.5 26 .4 4.3-.4 12.3-1.7 12.5-6.3 1.1-13.2 1.1-19.3-.8-1.8-.6-2.3-8.4-1.9-12.7 1-12 3.4-23.9 4.1-35.9.5-8.4-.7-16.9-1.8-25.2-.8-6-3.9-12.2 5.1-14.5 8.8-2.2 15.3 1.3 18.5 9.7 3.8 10.2 6.6 20.8 11.6 30.4 3 5.8 9.3 9.9 14.1 14.7 1-6.2 3.3-12.5 2.5-18.5-1.1-8.8-4-17.5-7-26-2.6-7.4 0-10.3 7.1-10.4 4.2-.1 8.5-.1 12.7.1 6.8.4 10.2 3.8 7.8 10.8-7.9 22.9-9 46-2.7 69.4 1.5 5.5-.3 10-6.6 10.4-7 .5-15.2 2.7-18.5-6.8-2.8-8-4.8-16.2-7.6-24.2-1.5-4.5-3.1-9.3-6-12.9-3.2-4.1-7.8-7-11.8-10.4-.9 5-2.1 10-3.1 14.3zM1526.8 801.2c-27.8.2-27.8.2-20.6-25.8 5-18.3 1.7-35.9-3.9-53.4-4.5-14-4.2-14.2 9.9-13.1 7.8.6 15.7.9 23.6.6 26.5-.8 45.2 19.3 45.5 43.9.4 27.9-21 51.1-45.5 47.9-2.9-.4-6-.1-9-.1zm-3.3-45.9h.4c0 5.4-.2 10.9 0 16.3.4 9.1 2.9 16.9 13.8 18.1 9.5 1 18.4-4 19.9-14.5 1.8-12.4 1.2-25.2.3-37.7-.3-4.1-4.5-8.6-8-11.7-10.4-9.1-23.1-4.3-25.2 9.6-1.1 6.6-.9 13.3-1.2 19.9zM1336.6 800.7c-7.9 0-15.7-.2-23.6 0-8.7.2-10.5-3.8-8-11.4 7.5-22.9 10.4-45.9 2-69.4-2.5-6.9 1.6-10.4 8.2-10.6 16.3-.4 32.6-.7 48.9-.5 8.1.1 9.5 7.4 9.9 13.1.4 6.2.2 13.8-3.1 18.5-3 4.4-9.1 1.5-11.2-4-3.1-8.2-9.1-13.2-17.2-14.4-3.9-.6-10.8 1.1-12.2 3.9-2.7 5.5-2.6 12.5-3.6 18.8 4.4.5 9 1.7 13.3 1.2 11.1-1.3 15.1 2.1 12.6 11.9-2 8-7.2 5.7-12.8 4.8-4.4-.7-9 .5-13.6.8 1.3 6.3 1.7 12.9 4 18.7 2.4 6.3 8.4 6.4 13.9 4 7.2-3.1 14-7.1 21.2-10.2 2.3-1 6.5-1.4 7.8 0 5.9 6.3-.6 23.3-9.4 24.1-9 .8-18.1.2-27.2.2.1.2.1.3.1.5zM895.1 734.7c0-21.9-.1-47.2.1-72.5 0-1.8 1.8-3.6 2.7-5.3 1 1.4 2.7 2.6 3 4.2.8 4.1 1.3 8.3 1.3 12.5 0 42.2-.1 84.4-.4 126.6 0 5.9-1.2 11.9-2.4 17.8-.4 1.9-2.6 3.4-4 5.1-1.1-1.9-3.2-3.7-3.2-5.6-.1-12.6-.1-25.3.4-37.9.4-13.8 1.5-27.6 2.5-44.9zM1134.8 960.9c2.3 3.1 6.6 6.1 6.6 9.1-.4 21-1.6 42.1-2.7 63.1-.1 1.5-1.7 3-2.5 4.4-1.4-1.6-3.7-3-4-4.7-.6-3.5-.3-7.2-.2-10.8 1-20.5 2.1-40.9 3.2-61.4l-.4.3z"
         />
      </svg>
   );
};

export default TheEnd;
