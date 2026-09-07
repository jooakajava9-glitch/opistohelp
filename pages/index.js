import React, { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import QuickStats from '../components/QuickStats';
import LatestTasks from '../components/LatestTasks';
import UpcomingEvents from '../components/UpcomingEvents';
import Announcements from '../components/Announcements';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <QuickStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <LatestTasks />
        <UpcomingEvents />
      </div>
      <Announcements />
    </Layout>
  );
}