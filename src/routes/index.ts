import express from 'express';
import { AuthRoutes } from '../app/modules/auth/auth.route';
import { UserRoutes } from '../app/modules/user/user.route';
import { EventRoutes } from '../app/modules/event/event.route';
import { MeetupRoutes } from '../app/modules/meetup/meetup.route';
import { ExperienceRoutes } from '../app/modules/experience/experience.route';
import { ReelRoutes } from '../app/modules/reel/reel.route';
import { DonationRoute } from '../app/modules/donate/donate.route';
import { TranslatorRoutes } from '../app/modules/translateor/translator.route';
import { CountryRoutes } from '../app/modules/countrys/country.route';
import path from 'path';
import { NetworkRoutes } from '../app/modules/network/network.route';
import { AdviceRoutes } from '../app/modules/advice/advice.route';
import { DisclaimerRoutes } from '../app/modules/disclaimer/disclaimer.route';
import { DashboardRoutes } from '../app/modules/dashboard/dashboard.route';
import { SubscriptionRoutes } from '../app/modules/subscription/subscription.route';
const router = express.Router();

const apiRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path:"/event",
    route: EventRoutes
  },
  {
    path: '/meetup',
    route: MeetupRoutes,
  },
  {
    path:"/experience",
    route:ExperienceRoutes
  },
  {
    path:"/reel",
    route: ReelRoutes
  },
  {
    path:"/donate",
    route: DonationRoute
  },
  {
    path:"/translator",
    route: TranslatorRoutes
  },
  {
    path:"/country",
    route: CountryRoutes
  },
  {
    path:"/network",
    route: NetworkRoutes
  },
  {
    path:"/advice",
    route:AdviceRoutes
  },
  {
    path:"/disclaimer",
    route:DisclaimerRoutes
  },
  {
    path:"/dashboard",
    route:DashboardRoutes
  },
  {
    path:"/subscription",
    route: SubscriptionRoutes
  }
];

apiRoutes.forEach(route => router.use(route.path, route.route));

export default router;
