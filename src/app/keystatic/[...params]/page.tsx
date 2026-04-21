import { makeNextRouteHandler } from '@keystatic/next/ui/app';
import config from '../../../../keystatic.config';

export const { GET } = makeNextRouteHandler({ config });
